import { ArrowRight, Compass, Target } from 'lucide-react';
import { ABOUT_IMAGE } from '../data/siteData';
import { RoutePath } from '../types/navigation';
import { ResilientImage } from '../components/ResilientImage';

interface AboutPageProps {
  onNavigate: (path: RoutePath, options?: { interest?: string }) => void;
}

const DELIVERY_PRINCIPLES = [
  {
    step: '01',
    title: 'Operational Discovery',
    description:
      'We document existing accounting, inventory, sales, and approval workflows before configuring software.',
  },
  {
    step: '02',
    title: 'Practical Architecture',
    description:
      'Systems are structured for everyday usability, clean data hygiene, and long-term maintainability.',
  },
  {
    step: '03',
    title: 'Guided Adoption',
    description:
      'Hands-on training for department leads and end users ensures confident transition from legacy spreadsheets.',
  },
  {
    step: '04',
    title: 'Continuous Partnership',
    description:
      'Post-launch SLA monitoring, incremental enhancements, and responsive engineering support.',
  },
];

export function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div>
      {/* Dark Architectural About Hero Split */}
      <section className="bg-gradient-to-b from-[#0D1E33] to-[#142C49] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <p className="text-sm font-medium text-[#8AC8FA]">About Expertaid Technologies</p>
              <h1
                className="font-display font-bold text-white tracking-tight leading-[1.12]"
                style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.15rem)' }}
              >
                Your Trusted Partner in Technology and Business Transformation
              </h1>
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                Expertaid Technologies is focused on delivering innovative software products, technology solutions, and professional services that help businesses operate smarter and more efficiently.
              </p>
              <p className="text-base text-slate-300 leading-relaxed">
                Our goal is to bridge the gap between business requirements and technology through practical, scalable, and customer-focused solutions.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/products')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0D1E33] bg-white hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Explore Our Products</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/contact')}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-transparent border border-white/25 hover:border-white hover:bg-white/10 rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                >
                  <span>Connect With Our Team</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex">
              <div className="w-full min-h-[280px] sm:min-h-[340px] lg:min-h-full rounded-lg overflow-hidden border border-white/15 bg-[#0D1E33]">
                <ResilientImage
                  src={ABOUT_IMAGE.src}
                  alt={ABOUT_IMAGE.alt}
                  title="Expertaid Technologies Leadership & Solutions Architecture"
                  className="lg:h-full object-cover"
                  aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-[#EAF3FB]/70 py-16 sm:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 border border-slate-200 rounded-lg overflow-hidden bg-slate-200 gap-px">
            <div className="bg-white p-8 sm:p-10 space-y-4">
              <div className="w-11 h-11 rounded-md bg-[#EAF3FB] text-[#1769AA] flex items-center justify-center">
                <Compass className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#142C49]">
                Our Vision
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                To become a trusted technology partner for businesses by delivering innovative digital solutions.
              </p>
            </div>

            <div className="bg-white p-8 sm:p-10 space-y-4">
              <div className="w-11 h-11 rounded-md bg-[#EAF3FB] text-[#1769AA] flex items-center justify-center">
                <Target className="w-5 h-5" aria-hidden="true" />
              </div>
              <h2 className="font-display text-2xl font-bold text-[#142C49]">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                To simplify business processes through smart software, expert services, and continuous innovation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Approach */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 space-y-2">
            <p className="text-sm font-medium text-[#1769AA]">How We Work</p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#142C49] tracking-tight">
              Bridging Business Requirements and Technology
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-200 rounded-lg overflow-hidden bg-slate-200 gap-px">
            {DELIVERY_PRINCIPLES.map((item) => (
              <div
                key={item.step}
                className="p-6 bg-white space-y-3"
              >
                <span className="font-display text-2xl font-bold text-[#142C49]/20 tabular-nums block">
                  {item.step}
                </span>
                <h3 className="font-display text-lg font-bold text-[#142C49]">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 p-8 rounded-lg bg-[#142C49] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <h3 className="font-display text-xl font-bold">
                Looking for a long-term technology partner?
              </h3>
              <p className="text-sm text-slate-300">
                Schedule a discovery discussion with our solutions team.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#0D1E33] bg-white hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
