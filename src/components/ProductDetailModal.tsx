import { useEffect } from 'react';
import { ArrowRight, CheckCircle2, X } from 'lucide-react';
import { ProductItem, RoutePath } from '../types/navigation';
import { ResilientImage } from './ResilientImage';

interface ProductDetailModalProps {
  product: ProductItem | null;
  onClose: () => void;
  onNavigate: (path: RoutePath, options?: { interest?: string }) => void;
}

export function ProductDetailModal({ product, onClose, onNavigate }: ProductDetailModalProps) {
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0D1E33]/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-lg border border-slate-200 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 px-6 py-4 bg-[#0D1E33] text-white border-b border-white/10">
          <div>
            <p className="text-xs font-medium text-[#8AC8FA]">{product.category}</p>
            <h2 id="product-modal-title" className="text-xl font-bold text-white">
              {product.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close product details"
            className="w-10 h-10 inline-flex items-center justify-center rounded-md text-slate-300 hover:text-white hover:bg-white/10 transition-colors duration-150 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-8">
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-slate-200 bg-[#EAF3FB]">
            <ResilientImage
              src={product.image}
              alt={product.imageAlt}
              title={product.name}
              aspectClass="aspect-video"
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-base font-semibold text-[#142C49]">Platform Overview</h3>
            <p className="text-base text-slate-600 leading-relaxed">{product.overview}</p>
            <div className="pt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500">
              <span className="font-medium text-[#142C49]">Deployment options:</span>
              {product.deploymentOptions.map((option, idx) => (
                <span key={option} className="inline-flex items-center gap-2">
                  <span>{option}</span>
                  {idx < product.deploymentOptions.length - 1 && (
                    <span aria-hidden="true">·</span>
                  )}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-base font-semibold text-[#142C49] mb-4">Core Modules &amp; Capabilities</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.keyModules.map((mod) => (
                <div
                  key={mod.title}
                  className="p-4 rounded-lg bg-[#EAF3FB]/60 border border-[#1769AA]/15"
                >
                  <h4 className="text-sm font-semibold text-[#142C49] mb-1.5">
                    {mod.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {mod.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-base font-semibold text-[#142C49] mb-3">Operational Outcomes</h3>
            <ul className="space-y-2.5">
              {product.businessOutcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-[#1769AA] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <p className="text-sm text-slate-600">
              Ready to evaluate {product.name} for your organization?
            </p>
            <button
              type="button"
              onClick={() => {
                onClose();
                onNavigate('/contact', { interest: product.contactInterestValue });
              }}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#12568C] rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              <span>Request Product Enquiry</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
