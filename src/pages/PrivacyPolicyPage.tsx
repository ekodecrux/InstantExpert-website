import { ArrowLeft, ArrowRight } from 'lucide-react';
import { RoutePath } from '../types/navigation';

interface PrivacyPolicyPageProps {
  onNavigate: (path: RoutePath) => void;
}

export function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  return (
    <div>
      {/* Dark Architectural Header */}
      <section className="bg-gradient-to-b from-[#0D1E33] to-[#142C49] text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-18">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-medium text-[#8AC8FA]">
              Legal <span aria-hidden="true" className="mx-1.5 text-white/30">·</span> Effective Date: January 1, 2021
            </p>
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.12]"
              style={{ fontSize: 'clamp(2.1rem, 3.6vw, 3.15rem)' }}
            >
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
              At Expertaid, we are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
            </p>
          </div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-slate-200 rounded-lg divide-y divide-slate-200 bg-white">
            {/* 1. Information We Collect */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">01.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  Information We Collect
                </h2>
              </div>
              <ul className="pl-7 space-y-2 text-base text-slate-700 list-disc">
                <li>Name, email address, and phone number</li>
                <li>Login credentials and account data</li>
                <li>Usage data such as pages visited and actions taken</li>
                <li>Device and browser information</li>
              </ul>
            </article>

            {/* 2. How We Use Your Information */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">02.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  How We Use Your Information
                </h2>
              </div>
              <ul className="pl-7 space-y-2 text-base text-slate-700 list-disc">
                <li>To provide and maintain our services</li>
                <li>To communicate with users</li>
                <li>To improve website functionality</li>
                <li>To ensure security and prevent fraud</li>
              </ul>
            </article>

            {/* 3. Cookies */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">03.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  Cookies
                </h2>
              </div>
              <p className="pl-7 text-base text-slate-700 leading-relaxed">
                We use cookies to enhance your experience and analyze site traffic. You can disable cookies in your browser settings.
              </p>
            </article>

            {/* 4. Data Sharing */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">04.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  Data Sharing
                </h2>
              </div>
              <p className="pl-7 text-base text-slate-700 leading-relaxed">
                We do not sell or rent your personal information. We may share data with trusted third-party services for operational purposes.
              </p>
            </article>

            {/* 5. Data Security */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">05.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  Data Security
                </h2>
              </div>
              <p className="pl-7 text-base text-slate-700 leading-relaxed">
                We implement strong security measures to protect your personal data.
              </p>
            </article>

            {/* 6. User Rights */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">06.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  User Rights
                </h2>
              </div>
              <ul className="pl-7 space-y-2 text-base text-slate-700 list-disc">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </article>

            {/* 7. Third-Party Links */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">07.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  Third-Party Links
                </h2>
              </div>
              <p className="pl-7 text-base text-slate-700 leading-relaxed">
                Our website may contain links to external sites. We are not responsible for their content or privacy practices.
              </p>
            </article>

            {/* 8. Changes to This Policy */}
            <article className="p-6 sm:p-8 space-y-3">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">08.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  Changes to This Policy
                </h2>
              </div>
              <p className="pl-7 text-base text-slate-700 leading-relaxed">
                We may update this policy from time to time. Changes will be posted on this page.
              </p>
            </article>

            {/* 9. Contact Us */}
            <article className="p-6 sm:p-8 space-y-3 bg-[#EAF3FB]/50">
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-xs font-medium text-[#1769AA] tabular-nums">09.</span>
                <h2 className="font-display text-xl font-bold text-[#142C49]">
                  Contact Us
                </h2>
              </div>
              <div className="pl-7 space-y-1.5 text-base text-slate-700">
                <p>
                  Email:{' '}
                  <a
                    href="mailto:contact@expertaid.in"
                    className="font-semibold text-[#1769AA] hover:text-[#142C49] underline underline-offset-4"
                  >
                    contact@expertaid.in
                  </a>
                </p>
                <p className="tabular-nums">
                  Phone:{' '}
                  <a
                    href="tel:9281866990"
                    className="font-semibold text-[#1769AA] hover:text-[#142C49] underline underline-offset-4"
                  >
                    92818-66990
                  </a>
                </p>
              </div>
            </article>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => onNavigate('/')}
              className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#142C49] bg-white border border-slate-300 hover:bg-[#EAF3FB] rounded-md transition-colors duration-150 cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              <span>Back to Home</span>
            </button>

            <button
              type="button"
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1769AA] hover:bg-[#12568C] rounded-md transition-colors duration-150 cursor-pointer"
            >
              <span>Contact Expertaid Technologies</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
