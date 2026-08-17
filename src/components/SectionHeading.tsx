import { Reveal } from "./Reveal";

/**
 * Section header treatment: a bracketed monospace index tag, a technical
 * label, then the display headline.
 */
export function SectionHeading({
  index,
  label,
  title,
  lede,
  align = "left",
  className = "",
}: {
  index: string;
  label: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  const centered = align === "center";

  return (
    <Reveal
      className={`flex flex-col gap-5 ${centered ? "items-center text-center" : ""} ${className}`}
    >
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <span className="index-tag">[{index}]</span>
        <span aria-hidden="true" className="hidden h-px w-8 bg-border-strong sm:block" />
        <span className="mono-label">{label}</span>
      </div>

      <h2
        className={`display text-4xl text-foreground sm:text-5xl lg:text-[3.5rem] ${centered ? "max-w-3xl" : "max-w-3xl"}`}
      >
        {title}
      </h2>

      {lede ? (
        <p
          className={`max-w-xl text-base leading-relaxed text-muted sm:text-lg ${centered ? "mx-auto" : ""}`}
        >
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
