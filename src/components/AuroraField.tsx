/**
 * Drifting gradient colour field: three blurred blobs of ember, harbour blue,
 * and sun yellow bleeding into each other and into the dark canvas.
 * Pure CSS animation (see globals.css) so it costs no JavaScript, and it
 * freezes into a static gradient under `prefers-reduced-motion`.
 */
export function AuroraField({
  intensity = "soft",
  className = "",
}: {
  intensity?: "soft" | "faint";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`aurora ${intensity === "faint" ? "aurora--faint" : "aurora--soft"} ${className}`}
    >
      <span className="aurora__blob aurora__blob--signal" />
      <span className="aurora__blob aurora__blob--tide" />
      <span className="aurora__blob aurora__blob--acid" />
    </div>
  );
}
