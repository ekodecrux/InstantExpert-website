import { useState } from 'react';
import { BrandMark } from './BrandMark';

interface BrandLogoProps {
  className?: string;
  variant?: 'dark' | 'light';
}

export const BRAND_LOGO_DARK_BG =
  '/assets/aistudio/Instant-removebg-white_1eb0f162.png';

export const BRAND_LOGO_LIGHT_BG =
  '/assets/aistudio/Instant-removebg-preview_605918af.png';

export function BrandLogo({
  className = 'h-9 sm:h-10 w-auto',
  variant = 'dark',
}: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span
        className={`inline-flex items-center gap-2.5 text-lg font-bold tracking-tight whitespace-nowrap shrink-0 ${
          variant === 'light' ? 'text-[#0D1E33]' : 'text-white'
        }`}
      >
        <BrandMark className="w-8 h-8 shrink-0" inverted={variant === 'dark'} />
        <span className="font-display">Instant Experts</span>
      </span>
    );
  }

  return (
    <img
      src={variant === 'light' ? BRAND_LOGO_LIGHT_BG : BRAND_LOGO_DARK_BG}
      alt="Instant Experts"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`object-contain shrink-0 select-none ${className}`}
    />
  );
}
