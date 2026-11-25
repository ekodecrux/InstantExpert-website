import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, MessageSquare, Send, X } from 'lucide-react';
import {
  buildWhatsAppUrl,
  FAQ_ITEMS,
  SERVICES,
  WHATSAPP_DISPLAY,
} from '../data/siteData';
import { RoutePath } from '../types/navigation';

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  actionLabel?: string;
  actionPath?: RoutePath;
  actionInterest?: string;
  showWhatsApp?: boolean;
}

interface FaqChatbotProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
  onNavigate: (path: RoutePath, options?: { interest?: string }) => void;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    id: 'welcome',
    sender: 'bot',
    text: 'Welcome to Expertaid Technologies. Ask me about our services (Software Development, ERP Implementation, CRM, System Integration, IT Consulting, Technical Support), our software products, or select a FAQ topic below.',
  },
];

function isExplicitNumberRequest(normalized: string): boolean {
  const numberIntentTerms = [
    'whatsapp number',
    'phone number',
    'contact number',
    'mobile number',
    'telephone',
    'helpline',
    'call number',
    'number',
    'phone',
    'mobile',
    'call',
    'whatsapp no',
  ];
  return numberIntentTerms.some((term) => normalized.includes(term));
}

function findBestFaqResponse(input: string): ChatMessage {
  const normalized = input.toLowerCase().trim();
  const id = `bot-${Date.now()}`;

  // 1. Explicit request for phone / WhatsApp number
  if (isExplicitNumberRequest(normalized)) {
    return {
      id,
      sender: 'bot',
      text: `You can reach our Enterprise Desk by phone or WhatsApp at ${WHATSAPP_DISPLAY} (Mon–Sat, 9:30 AM – 6:30 PM IST), or email contact@expertaid.in.`,
      actionLabel: 'Open Contact Page',
      actionPath: '/contact',
      showWhatsApp: true,
    };
  }

  // 2. Greeting / help intent
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|namaste)\b/.test(normalized)) {
    return {
      id,
      sender: 'bot',
      text: 'Hello! How can Expertaid Technologies assist you today? You can ask about ERP Implementation, CRM Solutions, Custom Software, Website or Mobile App Development, System Integration, IT Consulting, Technical Support, or our AI platforms.',
      actionLabel: 'Browse All Services',
      actionPath: '/services',
    };
  }

  // 3. Privacy Policy
  if (
    normalized.includes('privacy') ||
    normalized.includes('cookie') ||
    normalized.includes('personal data')
  ) {
    return {
      id,
      sender: 'bot',
      text: 'At Expertaid, we protect your personal data and never sell or rent your information. You can review our full Privacy Policy or email contact@expertaid.in for access or deletion requests.',
      actionLabel: 'Read Privacy Policy',
      actionPath: '/privacy-policy',
    };
  }

  // 4. Direct match against all 11 Services
  for (const service of SERVICES) {
    const titleLower = service.title.toLowerCase();
    if (normalized.includes(titleLower)) {
      return {
        id,
        sender: 'bot',
        text: `${service.title}: ${service.description}. Scope includes ${service.deliverables}`,
        actionLabel: `Enquire about ${service.title}`,
        actionPath: '/contact',
        actionInterest: service.contactInterestValue,
        showWhatsApp: true,
      };
    }
  }

  // 5. General "services" list query
  if (normalized.includes('service') || normalized.includes('what do you do')) {
    return {
      id,
      sender: 'bot',
      text: 'We provide 11 core services: Software Development, ERP Implementation, CRM Solutions, Website Development, Mobile App Development, IT Consulting, System Integration, Technical Support, AI Quality Intelligence Platform, ExpertBuddy, and AI Tutor.',
      actionLabel: 'View All 11 Services',
      actionPath: '/services',
    };
  }

  // 6. Demo / Pricing / Quote
  if (
    normalized.includes('demo') ||
    normalized.includes('price') ||
    normalized.includes('pricing') ||
    normalized.includes('cost') ||
    normalized.includes('quote')
  ) {
    return {
      id,
      sender: 'bot',
      text: 'Pricing and implementation timelines are tailored to your modules, user count, and deployment model (Cloud SaaS, Private VPC, or On-Premise). Submit your requirements on our Contact page or start a WhatsApp chat for a custom proposal.',
      actionLabel: 'Request a Quote',
      actionPath: '/contact',
      showWhatsApp: true,
    };
  }

  // 7. Weighted keyword & question match across FAQ_ITEMS
  let bestMatch = FAQ_ITEMS[0];
  let bestScore = 0;

  for (const item of FAQ_ITEMS) {
    let score = 0;
    for (const kw of item.keywords) {
      if (normalized.includes(kw)) {
        score += 2;
      }
    }
    const questionWords = item.question.toLowerCase().split(/\W+/);
    for (const word of questionWords) {
      if (word.length > 3 && normalized.includes(word)) {
        score += 1;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = item;
    }
  }

  if (bestScore > 0) {
    return {
      id,
      sender: 'bot',
      text: bestMatch.answer,
      actionLabel: bestMatch.actionLabel,
      actionPath: bestMatch.actionPath,
      actionInterest: bestMatch.actionInterest,
      showWhatsApp: true,
    };
  }

  // 8. Automatic fallback reply (without displaying the WhatsApp number)
  return {
    id,
    sender: 'bot',
    text: 'Thank you for reaching out. Our solutions team can help with ERP, CRM, custom software, system integration, IT consulting, and AI platforms. Please use the Contact Us page or start a WhatsApp chat below to share your requirements.',
    actionLabel: 'Go to Contact Us',
    actionPath: '/contact',
    showWhatsApp: true,
  };
}

export function FaqChatbot({
  isOpen,
  onToggle,
  onClose,
  onNavigate,
}: FaqChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSendQuery = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: trimmed,
    };
    const replyMsg = findBestFaqResponse(trimmed);

    setMessages((prev) => [...prev, userMsg, replyMsg]);
    setInputValue('');
  };

  const handleQuickFaq = (faqId: string) => {
    const item = FAQ_ITEMS.find((f) => f.id === faqId);
    if (!item) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: item.question,
    };
    const replyMsg: ChatMessage = {
      id: `bot-${Date.now() + 1}`,
      sender: 'bot',
      text: item.answer,
      actionLabel: item.actionLabel,
      actionPath: item.actionPath,
      actionInterest: item.actionInterest,
      showWhatsApp: true,
    };
    setMessages((prev) => [...prev, userMsg, replyMsg]);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
      {/* Expandable FAQ Chatbot Panel */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="false"
          aria-label="Expertaid Technologies FAQ Chatbot"
          className="w-[calc(100vw-2rem)] sm:w-[390px] max-h-[75vh] bg-white rounded-lg border border-slate-300 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Chatbot Header (no WhatsApp number displayed) */}
          <div className="px-4 py-3.5 bg-[#0D1E33] text-white border-b border-white/10 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-sm font-bold text-white">
                Expertaid FAQ Assistant
              </h2>
              <p className="text-xs text-[#8AC8FA]">
                Automated Service &amp; Product Support
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close FAQ Chatbot"
              className="w-9 h-9 inline-flex items-center justify-center rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#F8FBFE]">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] px-3.5 py-2.5 rounded-lg text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-[#1769AA] text-white'
                      : 'bg-white text-[#142C49] border border-slate-200'
                  }`}
                >
                  <p>{msg.text}</p>

                  {msg.sender === 'bot' && (msg.actionLabel || msg.showWhatsApp) && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-3">
                      {msg.actionLabel && msg.actionPath && (
                        <button
                          type="button"
                          onClick={() => {
                            onClose();
                            onNavigate(msg.actionPath!, {
                              interest: msg.actionInterest,
                            });
                          }}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-[#1769AA] hover:text-[#142C49] cursor-pointer"
                        >
                          <span>{msg.actionLabel}</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      )}

                      {msg.showWhatsApp && (
                        <a
                          href={buildWhatsAppUrl(
                            'Hello Expertaid Technologies, I would like to learn more about your services and solutions.'
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 hover:text-emerald-900"
                        >
                          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />

            {/* Suggested Service & Product FAQ Topics */}
            <div className="pt-2">
              <p className="text-[11px] font-medium text-slate-500 mb-2">
                Service &amp; solution FAQs:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {FAQ_ITEMS.slice(0, 6).map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleQuickFaq(item.id)}
                    className="text-left px-2.5 py-1.5 text-xs font-medium text-[#142C49] bg-white border border-slate-200 hover:border-[#1769AA] hover:bg-[#EAF3FB] rounded transition-colors cursor-pointer"
                  >
                    {item.question}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Direct WhatsApp Escalation Strip (without displaying number) */}
          <div className="px-4 py-2 bg-[#EAF3FB] border-t border-slate-200 flex items-center justify-between gap-2">
            <span className="text-xs font-medium text-[#142C49]">
              Need live team assistance?
            </span>
            <a
              href={buildWhatsAppUrl(
                'Hello Expertaid Technologies, I have an enquiry from your website FAQ.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendQuery(inputValue);
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2"
          >
            <label htmlFor="faq-chat-input" className="sr-only">
              Ask a FAQ question
            </label>
            <input
              id="faq-chat-input"
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about services, ERP, CRM, AI..."
              className="flex-1 min-w-0 px-3 py-2 text-sm text-[#142C49] bg-white border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1769AA]"
            />
            <button
              type="submit"
              aria-label="Send FAQ question"
              className="w-10 h-10 inline-flex items-center justify-center rounded-md bg-[#1769AA] hover:bg-[#12568C] text-white transition-colors shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button */}
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Close FAQ Assistant' : 'Open FAQ Chatbot'}
        className="h-11 px-4 inline-flex items-center gap-2 rounded-lg bg-[#0D1E33] hover:bg-[#142C49] text-white border border-white/20 shadow-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769AA]"
      >
        {isOpen ? (
          <>
            <X className="w-4 h-4" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold">Close FAQs</span>
          </>
        ) : (
          <>
            <MessageSquare className="w-4 h-4 text-[#8AC8FA]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold">FAQ Chatbot</span>
          </>
        )}
      </button>
    </div>
  );
}
