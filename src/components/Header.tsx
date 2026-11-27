import { useState } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../data/siteData';
import { RoutePath } from '../types/navigation';
import { BrandLogo } from './BrandLogo';

interface HeaderProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export function Header({ currentPath, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, path: RoutePath) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-24 flex items-center justify-between gap-8">
        {/* Zone 1: Brand logo (single-line, no subtitle/tagline in top bar) */}
        <a
          href="/"
          onClick={(e) => handleNavClick(e, '/')}
          aria-label="Instant Experts Home"
          className="inline-flex items-center whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1769AA] rounded"
        >
          <BrandLogo variant="light" className="h-11 sm:h-14 md:h-15 w-auto max-w-[260px] sm:max-w-[320px]" />
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-[#142C49]/80"
        >
          {NAV_LINKS.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <a
                key={item.path}
                href={item.path}
                onClick={(e) => handleNavClick(e, item.path)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1769AA] rounded ${
                  isActive
                    ? 'text-[#0D1E33] font-semibold'
                    : 'text-[#142C49]/75 hover:text-[#1769AA]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-[#1769AA]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Single primary action CTA + mobile menu toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(false);
              onNavigate('/contact');
            }}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#0D1E33] hover:bg-[#1769AA] rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769AA]"
          >
            <span>Get in Touch</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-md text-[#0D1E33] hover:bg-[#EAF3FB] transition-colors duration-150 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1769AA]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav
            aria-label="Mobile Navigation"
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
          >
            {NAV_LINKS.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <a
                  key={item.path}
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item.path)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`min-h-[44px] flex items-center px-3 rounded-md text-base font-medium transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#EAF3FB] text-[#0D1E33] font-semibold'
                      : 'text-[#142C49]/80 hover:bg-slate-50 hover:text-[#1769AA]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <div className="pt-3 mt-2 border-t border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onNavigate('/contact');
                }}
                className="w-full min-h-[44px] inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#0D1E33] hover:bg-[#1769AA] rounded-md transition-colors duration-150 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
