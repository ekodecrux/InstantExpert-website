interface BrandMarkProps {
  className?: string;
  inverted?: boolean;
}

export function BrandMark({ className = 'w-8 h-8', inverted = false }: BrandMarkProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect
        width="36"
        height="36"
        rx="8"
        fill={inverted ? '#1769AA' : '#142C49'}
      />
      <path
        d="M10.5 11H15V25H10.5V11Z"
        fill="#FFFFFF"
      />
      <path
        d="M18.5 11H26L21.8 17.8L26.5 25H22L18.5 19.3V11Z"
        fill={inverted ? '#EAF3FB' : '#5EB3F6'}
      />
      <rect
        x="18.5"
        y="21.5"
        width="3.5"
        height="3.5"
        rx="0.5"
        fill="#FFFFFF"
      />
    </svg>
  );
}
