/**
 * Drifting gradient colour field: three blurred blobs of ember, harbour blue,
 * and sun yellow bleeding into each other and into the surface behind them.
 * Pure CSS animation (see globals.css) so it costs no JavaScript, and it
 * freezes into a static gradient under `prefers-reduced-motion`.
 *
 * Each intensity is halved again inside a `.on-paper` section — the same
 * opacity that glows on near-black would bury a cream surface.
 */
export function AuroraField({
  intensity = "soft",
  className = "",
}: {
  /** `bright` for hero light sources, `soft` for body sections, `faint` behind dense copy. */
  intensity?: "bright" | "soft" | "faint";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`aurora aurora--${intensity} ${className}`}
    >
      <span className="aurora__blob aurora__blob--signal" />
      <span className="aurora__blob aurora__blob--tide" />
      <span className="aurora__blob aurora__blob--acid" />
    </div>
  );
}
