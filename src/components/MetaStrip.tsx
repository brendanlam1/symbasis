import { LiveClock } from "./LiveClock";

export const SYDNEY_COORDS = "33.8688°S / 151.2093°E";

/**
 * Monospace metadata strip: where we are, when it is, and what we're doing.
 * Every value is real — no invented numbers.
 */
export function MetaStrip({
  status = "Open for new work",
  className = "",
}: {
  status?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 ${className}`}
    >
      <span className="mono-label text-foreground/70">Sydney, AU</span>
      <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
      <span className="mono-data">{SYDNEY_COORDS}</span>
      <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
      <LiveClock />
      <span aria-hidden="true" className="h-3 w-px bg-border-strong" />
      <span className="mono-label flex items-center gap-2 text-foreground/70">
        <span
          aria-hidden="true"
          className="relative flex h-1.5 w-1.5"
        >
          <span className="absolute inline-flex h-full w-full rounded-full bg-signal opacity-60 motion-safe:animate-ping" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
        </span>
        {status}
      </span>
    </div>
  );
}
