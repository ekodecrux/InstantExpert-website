import { useState } from 'react';
import { BrandMark } from './BrandMark';

interface BrandLogoProps {
  className?: string;
}

export const BRAND_LOGO_SRC = '/assets/aistudio/Instant-removebg-white_1eb0f162.png';

export function BrandLogo({ className = 'h-9 sm:h-10 w-auto' }: BrandLogoProps) {
  const [imgError, setImgError] = useState(false);

  if (imgError) {
    return (
      <span className="inline-flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0">
        <BrandMark className="w-8 h-8 shrink-0" inverted />
        <span className="font-display">InstantExperts</span>
      </span>
    );
  }

  return (
    <img
      src={BRAND_LOGO_SRC}
      alt="InstantExperts"
      referrerPolicy="no-referrer"
      onError={() => setImgError(true)}
      className={`object-contain shrink-0 select-none ${className}`}
    />
  );
}
