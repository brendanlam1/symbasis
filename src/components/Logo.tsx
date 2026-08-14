export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="symbasis-helix" x1="4" y1="2" x2="28" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#2dd9c8" />
          <stop offset="1" stopColor="#a855f7" />
        </linearGradient>
      </defs>
      <path
        d="M8 2C8 8 24 10 24 16C24 22 8 24 8 30"
        stroke="url(#symbasis-helix)"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M24 2C24 8 8 10 8 16C8 22 24 24 24 30"
        stroke="url(#symbasis-helix)"
        strokeWidth="2.4"
        strokeLinecap="round"
        opacity="0.45"
      />
      <circle cx="8" cy="2" r="1.6" fill="#2dd9c8" />
      <circle cx="24" cy="16" r="1.6" fill="#a855f7" />
      <circle cx="8" cy="30" r="1.6" fill="#a855f7" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Symbasis
      </span>
    </span>
  );
}
