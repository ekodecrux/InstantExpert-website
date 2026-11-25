import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/siteData';
import { RoutePath } from '../types/navigation';

interface ServicesPageProps {
  onNavigate: (path: RoutePath, options?: { interest?: string }) => void;
}

type ServiceFilter = 'All Services' | 'Enterprise Platforms' | 'Engineering & Advisory';

const FILTER_OPTIONS: ServiceFilter[] = [
  'All Services',
  'Enterprise Platforms',
  'Engineering & Advisory',
];

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const [activeFilter, setActiveFilter] = useState<ServiceFilter>('All Services');

  const filteredServices =
    activeFilter === 'All Services'
      ? SERVICES
      : SERVICES.filter((service) => service.category === activeFilter);

  return (
    <div>
      {/* Dark Architectural Services Header */}
      <section className="bg-gradient-to-b from-[#0D1E33] to-[#142C49] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#8AC8FA]">Services</p>
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.12]"
              style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.15rem)' }}
            >
              Professional Technology &amp; Business Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We provide technology services that help businesses build, improve, and manage their digital infrastructure.
            </p>
          </div>

          {/* Interactive Category Filter */}
          <div className="mt-8 inline-flex flex-wrap items-center gap-1 p-1 bg-white/10 border border-white/15 rounded-md">
            {FILTER_OPTIONS.map((option) => {
              const isSelected = activeFilter === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                    isSelected
                      ? 'bg-white text-[#0D1E33] font-semibold'
                      : 'text-slate-200 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Structured Directory */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 overflow-hidden bg-white">
            {/* Table Header on Desktop */}
            <div className="hidden md:grid md:grid-cols-12 gap-6 px-6 py-4 bg-[#EAF3FB]/70 border-b border-slate-200 text-xs font-semibold text-[#142C49]">
              <div className="col-span-3">Service</div>
              <div className="col-span-3">Description</div>
              <div className="col-span-4">Scope &amp; Deliverables</div>
              <div className="col-span-2 text-right">Action</div>
            </div>

            <div className="divide-y divide-slate-200">
              {filteredServices.map((service) => (
                <div
                  key={service.number}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 px-6 py-6 items-start md:items-center hover:bg-[#EAF3FB]/40 transition-colors duration-150"
                >
                  <div className="md:col-span-3 flex items-baseline gap-3">
                    <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums shrink-0">
                      {service.number}.
                    </span>
                    <div>
                      <h2 className="font-display text-base font-bold text-[#142C49]">
                        {service.title}
                      </h2>
                      <p className="text-xs text-slate-500 mt-0.5">{service.category}</p>
                    </div>
                  </div>

                  <div className="md:col-span-3 text-sm font-medium text-slate-700">
                    {service.description}
                  </div>

                  <div className="md:col-span-4 text-sm text-slate-600 leading-relaxed">
                    {service.deliverables}
                  </div>

                  <div className="md:col-span-2 md:text-right">
                    <button
                      type="button"
                      onClick={() =>
                        onNavigate('/contact', { interest: service.contactInterestValue })
                      }
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1769AA] hover:text-[#142C49] transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                    >
                      <span>Enquire</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Call To Action */}
          <div className="mt-12 p-8 sm:p-10 rounded-lg bg-[#142C49] text-white flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Need a tailored technology roadmap for your organization?
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Share your operational challenges and software integration goals with our engineering team.
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
        </div>
      </section>
    </div>
  );
}
