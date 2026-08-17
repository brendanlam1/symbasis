/**
 * Degraded-signal divider, used purely as a transition device between
 * sections. Never sits over copy the visitor needs to read.
 */
export function ScanDivider({ code }: { code?: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative isolate flex h-16 w-full items-center overflow-hidden border-y border-border bg-surface/40"
    >
      <div className="scanlines absolute inset-0 opacity-70" />
      <div className="scan-sweep absolute inset-0 opacity-50" />
      <div className="relative flex w-full items-center justify-between gap-6 px-6 sm:px-8">
        <span className="mono-data whitespace-nowrap text-faint/70">
          ▓▓▒▒░░ ▒▓░▒ ░░▒▒▓▓
        </span>
        {code ? (
          <span className="mono-label hidden whitespace-nowrap text-faint/70 sm:inline">
            {code}
          </span>
        ) : null}
        {/* Two nowrap blocks plus the code label overflow a 375px viewport;
            the parent clips rather than scrolls, but a half-cut block looks
            broken, so the trailing one only appears once it fits. */}
        <span className="mono-data hidden whitespace-nowrap text-faint/70 sm:inline">
          ░░▒▒▓▓ ▒░▓▒ ▓▓▒▒░░
        </span>
      </div>
    </div>
  );
}
