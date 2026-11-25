import { ArrowUpRight, Facebook, Instagram, Linkedin, Mail, MessageCircle, Twitter } from 'lucide-react';
import { buildWhatsAppUrl, NAV_LINKS, PRODUCTS } from '../data/siteData';
import { RoutePath } from '../types/navigation';
import { BrandLogo } from './BrandLogo';

interface FooterProps {
  onNavigate: (path: RoutePath, options?: { interest?: string; productId?: string }) => void;
  onOpenChatbot: () => void;
}

export function Footer({ onNavigate, onOpenChatbot }: FooterProps) {
  return (
    <footer className="bg-[#0D1E33] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Editorial Wordmark & Summary Row */}
        <div className="pb-12 border-b border-white/10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-lg">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/');
              }}
              aria-label="Expertaid Technologies Home"
              className="inline-flex items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#5EB3F6] rounded"
            >
              <BrandLogo className="h-14 sm:h-16 w-auto max-w-[280px]" />
            </a>
            <p className="text-sm font-medium text-[#8AC8FA]">
              Smart Technology. Expert Solutions.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              Delivering practical ERP, CRM, and bespoke enterprise software engineered for clarity, security, and measurable operational scale.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#0D1E33] bg-white hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer self-start lg:self-auto"
          >
            <span>Start a Project Enquiry</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>

        {/* Structured Links Grid */}
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-4 space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Engineering Hubs
            </h2>
            <p className="text-sm font-medium text-white">Ahmedabad · Hyderabad, India</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Enterprise ERP, CRM, and Custom Software Delivery
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <a
                    href={link.path}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.path);
                    }}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="/privacy-policy"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('/privacy-policy');
                  }}
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenChatbot}
                  className="text-sm text-slate-300 hover:text-white transition-colors duration-150 cursor-pointer text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  FAQs &amp; Chatbot
                </button>
              </li>
            </ul>
          </div>

          {/* Our Products */}
          <div className="lg:col-span-3">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Our Products
            </h2>
            <ul className="space-y-2.5">
              {PRODUCTS.map((product) => (
                <li key={product.id}>
                  <a
                    href="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate('/products', { productId: product.id });
                    }}
                    className="text-sm text-slate-300 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                  >
                    {product.name.replace('Expertaid Technologies ', '')}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us: Direct redirect links for Email, WhatsApp, and Social Media */}
          <div className="lg:col-span-2">
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
              Connect With Us
            </h2>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="mailto:contact@expertaid.in?subject=Project%20Enquiry%20-%20Expertaid%20Technologies"
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  <Mail className="w-4 h-4 text-[#8AC8FA] shrink-0" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl(
                    'Hello Expertaid Technologies, I have an enquiry from your website.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/expertaid-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  <Linkedin className="w-4 h-4 text-[#8AC8FA] shrink-0" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/expertaidtechnologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  <Instagram className="w-4 h-4 text-[#8AC8FA] shrink-0" aria-hidden="true" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/expertaidtech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  <Twitter className="w-4 h-4 text-[#8AC8FA] shrink-0" aria-hidden="true" />
                  <span>X (Twitter)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61596792427672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-slate-200 hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6] rounded"
                >
                  <Facebook className="w-4 h-4 text-[#8AC8FA] shrink-0" aria-hidden="true" />
                  <span>Facebook</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Expertaid Technologies. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/privacy-policy"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('/privacy-policy');
              }}
              className="text-slate-300 hover:text-white underline underline-offset-4 transition-colors duration-150"
            >
              Privacy Policy
            </a>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Enterprise Software · ERP · CRM · Digital Transformation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
