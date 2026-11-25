import { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageCircle, MessageSquare, Send, X } from 'lucide-react';
import {
  buildWhatsAppUrl,
  FAQ_ITEMS,
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
    text: `Welcome to Expertaid Technologies. Ask a question about our ERP, CRM, AI platforms, services, or reach our team directly on WhatsApp at ${WHATSAPP_DISPLAY}.`,
  },
];

function findBestFaqResponse(input: string): ChatMessage {
  const normalized = input.toLowerCase().trim();

  if (
    normalized.includes('privacy') ||
    normalized.includes('cookie') ||
    normalized.includes('data')
  ) {
    return {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: 'At Expertaid, we protect your personal data and never sell or rent your information. You can review our full Privacy Policy or contact contact@expertaid.in for data requests.',
      actionLabel: 'Read Privacy Policy',
      actionPath: '/privacy-policy',
    };
  }

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
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: bestMatch.answer,
      actionLabel: bestMatch.actionLabel,
      actionPath: bestMatch.actionPath,
      actionInterest: bestMatch.actionInterest,
      showWhatsApp: bestMatch.id === 'offices-contact' || bestMatch.id === 'demo-pricing',
    };
  }

  return {
    id: `bot-${Date.now()}`,
    sender: 'bot',
    text: `Thanks for your question. For detailed project guidance or custom requirements, you can send an instant WhatsApp message to our Enterprise Desk (${WHATSAPP_DISPLAY}) or submit an enquiry form.`,
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
      showWhatsApp: item.id === 'offices-contact' || item.id === 'demo-pricing',
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
          className="w-[calc(100vw-2rem)] sm:w-[380px] max-h-[75vh] bg-white rounded-lg border border-slate-300 shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Chatbot Header */}
          <div className="px-4 py-3.5 bg-[#0D1E33] text-white border-b border-white/10 flex items-center justify-between gap-3">
            <div>
              <h2 className="font-display text-sm font-bold text-white">
                Expertaid FAQ Assistant
              </h2>
              <p className="text-xs text-[#8AC8FA]">
                Instant Answers · WhatsApp {WHATSAPP_DISPLAY}
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
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-wrap gap-2">
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
                            'Hello Expertaid Technologies, I would like to learn more about your solutions.'
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

            {/* Suggested FAQ Topics */}
            <div className="pt-2">
              <p className="text-[11px] font-medium text-slate-500 mb-2">
                Popular FAQ topics:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {FAQ_ITEMS.slice(0, 4).map((item) => (
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

          {/* Direct WhatsApp Escalation Strip */}
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
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold text-white bg-emerald-700 hover:bg-emerald-800 rounded transition-colors whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
              <span>WhatsApp {WHATSAPP_DISPLAY}</span>
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
              placeholder="Ask about ERP, CRM, AI, offices..."
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

      {/* Floating Launcher Button (compact h-11 to respect mobile sticky cap) */}
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
