import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { PRODUCTS } from '../data/siteData';
import { ProductItem, RoutePath } from '../types/navigation';
import { ResilientImage } from '../components/ResilientImage';

interface ProductsPageProps {
  onNavigate: (path: RoutePath, options?: { interest?: string }) => void;
  onSelectProduct: (product: ProductItem) => void;
}

export function ProductsPage({ onNavigate, onSelectProduct }: ProductsPageProps) {
  return (
    <div>
      {/* Dark Architectural Products Header */}
      <section className="bg-gradient-to-b from-[#0D1E33] to-[#142C49] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#8AC8FA]">Our Products</p>
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.12]"
              style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.15rem)' }}
            >
              Powerful Software Products Designed for Modern Businesses
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Each InstantExperts platform is built for operational clarity, role-based security, and seamless integration across departments.
            </p>
          </div>
        </div>
      </section>

      {/* Individual Product Cards */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {PRODUCTS.map((product, index) => {
            const isReversed = index % 2 === 1;
            return (
              <article
                key={product.id}
                className="rounded-lg border border-slate-200 bg-white overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Image Panel */}
                  <div
                    className={`lg:col-span-5 bg-[#EAF3FB] min-h-[260px] ${
                      isReversed
                        ? 'lg:order-2 border-b lg:border-b-0 lg:border-l border-slate-200'
                        : 'border-b lg:border-b-0 lg:border-r border-slate-200'
                    }`}
                  >
                    <ResilientImage
                      src={product.image}
                      alt={product.imageAlt}
                      title={product.name}
                      className="lg:h-full object-cover"
                      aspectClass="aspect-[4/3] lg:aspect-auto lg:h-full"
                    />
                  </div>

                  {/* Content Panel */}
                  <div
                    className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${
                      isReversed ? 'lg:order-1' : ''
                    }`}
                  >
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium text-[#1769AA]">
                          <span>{product.category}</span>
                          <span aria-hidden="true" className="text-slate-300">·</span>
                          <span className="text-slate-500">
                            {product.deploymentOptions.join(' / ')}
                          </span>
                        </div>
                        <span className="font-mono text-xs text-slate-400">
                          0{index + 1}
                        </span>
                      </div>

                      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#142C49]">
                        {product.name}
                      </h2>

                      <p className="text-base text-slate-700 leading-relaxed">
                        {product.shortDescription}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {product.overview}
                      </p>

                      <div className="pt-3 border-t border-slate-200">
                        <h3 className="text-xs font-semibold text-[#142C49] mb-3">
                          Included Modules &amp; Features
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                          {product.keyModules.map((mod) => (
                            <div key={mod.title} className="flex items-start gap-2">
                              <CheckCircle2
                                className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <div>
                                <p className="text-sm font-semibold text-[#142C49]">
                                  {mod.title}
                                </p>
                                <p className="text-xs text-slate-600 leading-relaxed">
                                  {mod.detail}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => onSelectProduct(product)}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#12568C] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>Explore Product</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          onNavigate('/contact', { interest: product.contactInterestValue })
                        }
                        className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#142C49] hover:text-[#1769AA] hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
                      >
                        <span>Request Enquiry</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}
