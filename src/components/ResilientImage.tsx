import { useState } from 'react';
import { Building2 } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  aspectClass?: string;
}

export function ResilientImage({
  src,
  alt,
  title,
  className = '',
  aspectClass = 'aspect-video',
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex flex-col items-center justify-center bg-[#EAF3FB] text-[#142C49] border border-[#1769AA]/15 p-6 text-center ${aspectClass} ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="w-12 h-12 rounded-lg bg-white border border-[#1769AA]/20 flex items-center justify-center mb-3 text-[#1769AA]">
          <Building2 className="w-6 h-6" />
        </div>
        <p className="text-sm font-semibold text-[#142C49] max-w-xs">
          {title || alt}
        </p>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={`w-full h-full object-cover ${className}`}
    />
  );
}
