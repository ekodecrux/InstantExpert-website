import { useState } from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2, ChevronDown, Cpu, Layers, MessageCircle, MessageSquare, ShieldCheck, TrendingUp } from 'lucide-react';
import {
  buildWhatsAppUrl,
  ENTERPRISE_METRICS,
  FAQ_ITEMS,
  HERO_IMAGE,
  PRODUCTS,
  SERVICES,
  WHY_CHOOSE_ITEMS,
} from '../data/siteData';
import { ProductItem, RoutePath } from '../types/navigation';
import { ResilientImage } from '../components/ResilientImage';

interface HomePageProps {
  onNavigate: (path: RoutePath, options?: { interest?: string }) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenChatbot: () => void;
}

const PILLAR_ICONS = [Cpu, Layers, ShieldCheck, TrendingUp];

export function HomePage({ onNavigate, onSelectProduct, onOpenChatbot }: HomePageProps) {
  const [openFaqId, setOpenFaqId] = useState<string>(FAQ_ITEMS[0].id);
  return (
    <div>
      {/* Dark Architectural Studio Hero */}
      <section className="bg-gradient-to-b from-[#0D1E33] to-[#142C49] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            {/* Left Copy Column */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-sm font-medium text-[#8AC8FA] tracking-tight">
                Smart Technology <span aria-hidden="true" className="mx-1.5 text-white/30">·</span> Expert Solutions
              </p>

              <h1
                className="font-display font-bold text-white tracking-tight leading-[1.08]"
                style={{ fontSize: 'clamp(2.35rem, 4vw, 3.6rem)' }}
              >
                Empowering Businesses with Smart Technology Solutions
              </h1>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl">
                At Instant Experts, we deliver innovative technology products and professional business solutions that help organizations simplify operations, improve productivity, and accelerate growth.
              </p>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                From ERP and CRM platforms to customized software development and digital transformation, we provide solutions designed around your business requirements.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/products')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0D1E33] bg-white hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6]"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>

                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-transparent border border-white/25 hover:border-white hover:bg-white/10 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5EB3F6]"
                >
                  <span>Talk to Our Experts</span>
                </button>
              </div>
            </div>

            {/* Right Framed Studio Image Column */}
            <div className="lg:col-span-6 flex">
              <div className="w-full min-h-[280px] sm:min-h-[360px] lg:min-h-full rounded-lg overflow-hidden border border-white/15 bg-[#0D1E33] flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <ResilientImage
                    src={HERO_IMAGE.src}
                    alt={HERO_IMAGE.alt}
                    title="Instant Experts Enterprise Technology Workspace"
                    className="lg:h-full object-cover"
                    aspectClass="aspect-video lg:aspect-auto lg:h-full"
                  />
                </div>
                <div className="px-4 py-3 bg-[#0D1E33] border-t border-white/10 flex items-center justify-between text-xs text-slate-300">
                  <span>Enterprise Software &amp; Digital Transformation</span>
                  <span className="font-mono text-[#8AC8FA]">Ahmedabad · Hyderabad</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width 4-Column Enterprise Proof Strip */}
      <section className="bg-[#EAF3FB] border-b border-slate-200" aria-label="Enterprise Impact Metrics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-[#142C49]/15">
            {ENTERPRISE_METRICS.map((metric, idx) => (
              <div
                key={metric.label}
                className={idx === 0 ? 'lg:pr-8' : 'lg:px-8'}
              >
                <p className="font-display text-3xl sm:text-4xl font-bold text-[#142C49] tabular-nums tracking-tight">
                  {metric.value}
                </p>
                <p className="mt-1.5 text-sm font-semibold text-[#1769AA]">
                  {metric.label}
                </p>
                <p className="mt-1 text-xs text-slate-600 leading-relaxed">
                  {metric.context}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Instant Experts? — Architectural Editorial Grid */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 space-y-5">
              <p className="text-sm font-medium text-[#1769AA]">Core Value Pillars</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142C49] tracking-tight leading-[1.12]">
                Why Choose Instant Experts?
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                We pair disciplined software engineering with structured operational workflows so your enterprise platforms stay fast, dependable, and ready to scale.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769AA] hover:text-[#142C49] transition-colors duration-150 cursor-pointer"
                >
                  <span>Explore our methodology</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-8 border border-slate-200 rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2 bg-slate-200 gap-px">
              {WHY_CHOOSE_ITEMS.map((item, idx) => {
                const Icon = PILLAR_ICONS[idx];
                return (
                  <div
                    key={item.title}
                    className="p-7 sm:p-8 bg-white hover:bg-[#EAF3FB]/40 transition-colors duration-150 flex flex-col justify-between gap-6"
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-display text-3xl font-bold text-[#142C49]/15 tabular-nums leading-none">
                        {item.number}
                      </span>
                      <div className="w-9 h-9 rounded-md bg-[#EAF3FB] text-[#1769AA] flex items-center justify-center">
                        <Icon className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#142C49]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-sm font-semibold text-[#1769AA]">
                        {item.description}
                      </p>
                      <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Software Products — Asymmetric Architectural Showcase */}
      <section className="bg-[#EAF3FB]/50 py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="space-y-2 max-w-2xl">
              <p className="text-sm font-medium text-[#1769AA]">Enterprise Software Suite</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142C49] tracking-tight">
                Powerful Software Products Designed for Modern Businesses
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/products')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#142C49] hover:text-[#1769AA] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>View all products</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Primary Marquee Product (ERP) */}
            <article className="lg:col-span-7 bg-white rounded-lg border border-slate-200 overflow-hidden flex flex-col">
              <div className="aspect-video w-full overflow-hidden bg-[#142C49] border-b border-slate-200">
                <ResilientImage
                  src={PRODUCTS[0].image}
                  alt={PRODUCTS[0].imageAlt}
                  title={PRODUCTS[0].name}
                  aspectClass="aspect-video"
                />
              </div>
              <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-[#1769AA]">
                      {PRODUCTS[0].category}
                    </p>
                    <span className="font-mono text-xs text-slate-400">01</span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#142C49]">
                    {PRODUCTS[0].name}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {PRODUCTS[0].shortDescription}
                  </p>
                  <ul className="pt-3 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PRODUCTS[0].keyModules.map((mod) => (
                      <li key={mod.title} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{mod.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-200">
                  <span className="text-xs text-slate-500">
                    Cloud SaaS · Private VPC · On-Premise
                  </span>
                  <button
                    type="button"
                    onClick={() => onSelectProduct(PRODUCTS[0])}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769AA] hover:text-[#142C49] transition-colors duration-150 cursor-pointer"
                  >
                    <span>Explore Product</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>

            {/* Secondary Stacked Products (CRM & Custom Apps) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {PRODUCTS.slice(1, 3).map((product, idx) => (
                <article
                  key={product.id}
                  className="flex-1 bg-white rounded-lg border border-slate-200 p-7 flex flex-col justify-between space-y-5 hover:border-[#1769AA]/50 transition-colors duration-150"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-[#1769AA]">
                        {product.category}
                      </p>
                      <span className="font-mono text-xs text-slate-400">
                        0{idx + 2}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-[#142C49]">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {product.shortDescription}
                    </p>
                    <p className="text-xs text-slate-500 pt-1">
                      {product.keyModules.map((m) => m.title).join(' · ')}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769AA] hover:text-[#142C49] transition-colors duration-150 cursor-pointer"
                    >
                      <span>Explore Product</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('/contact', { interest: product.contactInterestValue })
                      }
                      className="text-xs font-semibold text-[#142C49] hover:text-[#1769AA] cursor-pointer"
                    >
                      Request Demo
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Intelligent & AI Platforms Row */}
          {PRODUCTS.length > 3 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {PRODUCTS.slice(3).map((product, idx) => (
                <article
                  key={product.id}
                  className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between space-y-5 hover:border-[#1769AA]/50 transition-colors duration-150"
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-medium text-[#1769AA]">
                        {product.category}
                      </p>
                      <span className="font-mono text-xs text-slate-400">
                        0{idx + 4}
                      </span>
                    </div>
                    <h3 className="font-display text-xl font-bold text-[#142C49]">
                      {product.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onSelectProduct(product)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769AA] hover:text-[#142C49] transition-colors duration-150 cursor-pointer"
                    >
                      <span>Explore Product</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('/contact', { interest: product.contactInterestValue })
                      }
                      className="text-xs font-semibold text-[#142C49] hover:text-[#1769AA] cursor-pointer"
                    >
                      Request Demo
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Editorial Numbered Services Index */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div className="space-y-2 max-w-2xl">
              <p className="text-sm font-medium text-[#1769AA]">End-to-End Capabilities</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142C49] tracking-tight">
                Professional Technology &amp; Business Services
              </h2>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/services')}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1769AA] hover:text-[#142C49] whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Explore all {SERVICES.length} services</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          <div className="border-t border-slate-200 divide-y divide-slate-200">
            {SERVICES.map((service) => (
              <button
                key={service.number}
                type="button"
                onClick={() =>
                  onNavigate('/contact', { interest: service.contactInterestValue })
                }
                className="group w-full text-left py-5 px-2 sm:px-4 grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-6 items-start md:items-center hover:bg-[#EAF3FB]/60 transition-colors duration-150 cursor-pointer"
              >
                <div className="md:col-span-4 flex items-baseline gap-4">
                  <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums shrink-0">
                    {service.number}.
                  </span>
                  <h3 className="font-display text-lg font-bold text-[#142C49] group-hover:text-[#1769AA] transition-colors">
                    {service.title}
                  </h3>
                </div>
                <div className="md:col-span-6 text-sm text-slate-600">
                  {service.description}
                </div>
                <div className="md:col-span-2 md:text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1769AA] group-hover:translate-x-0.5 transition-transform">
                    <span>Discuss</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions & Chatbot */}
      <section className="bg-[#EAF3FB]/50 py-16 sm:py-24 border-b border-slate-200" id="faqs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            <div className="lg:col-span-4 space-y-5">
              <p className="text-sm font-medium text-[#1769AA]">FAQs &amp; Instant Help</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#142C49] tracking-tight leading-[1.12]">
                Frequently Asked Questions
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                Find quick answers about Instant ERP, Experts CRM, AI platforms, and delivery timelines, or chat directly with our FAQ Assistant.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={onOpenChatbot}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#12568C] rounded-md transition-colors duration-150 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" aria-hidden="true" />
                  <span>Open FAQ Chatbot</span>
                </button>
                <a
                  href={buildWhatsAppUrl(
                    'Hello Instant Experts, I have a question regarding your software solutions.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#142C49] bg-white border border-slate-300 hover:border-emerald-600 hover:text-emerald-800 rounded-md transition-colors duration-150"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-8 border border-slate-200 rounded-lg divide-y divide-slate-200 bg-white overflow-hidden">
              {FAQ_ITEMS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id}>
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-[#EAF3FB]/40 transition-colors duration-150 cursor-pointer"
                    >
                      <span className="font-display text-base sm:text-lg font-semibold text-[#142C49]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#1769AA] shrink-0 transition-transform duration-150 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-slate-600 leading-relaxed space-y-3">
                        <p>{faq.answer}</p>
                        {faq.actionLabel && faq.actionPath && (
                          <button
                            type="button"
                            onClick={() =>
                              onNavigate(faq.actionPath!, { interest: faq.actionInterest })
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1769AA] hover:text-[#142C49] cursor-pointer"
                          >
                            <span>{faq.actionLabel}</span>
                            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Conversion Band */}
      <section className="bg-[#142C49] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to streamline your business operations?
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Connect with our engineering and consulting specialists to evaluate Instant ERP, Experts CRM, or custom enterprise software for your organization.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-[#0D1E33] bg-white hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <span>Discuss Your Requirements</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </section>
    </div>
  );
}
