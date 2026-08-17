"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { AuroraField } from "./AuroraField";
import { useMediaQuery, useReducedMotion } from "@/lib/useMediaQuery";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

/**
 * Scroll-pinned reveal. The panel sticks to the viewport while the full-bleed
 * photograph behind it settles and emphasis walks down the process steps.
 *
 * Deliberately built on CSS `position: sticky` rather than scroll hijacking:
 * the page never stops responding to the wheel, and every step stays readable
 * the whole way through — emphasis moves, content is never hidden.
 *
 * Under `prefers-reduced-motion` the whole thing collapses to a plain static
 * section with no pinning and no transforms.
 */
export function PinnedProcess({
  steps,
  src,
  alt,
  objectPosition = "50% 50%",
  eyebrow,
  index,
  title,
}: {
  steps: readonly ProcessStep[];
  src: string;
  alt: string;
  objectPosition?: string;
  eyebrow: string;
  index: string;
  title: React.ReactNode;
}) {
  const wrapRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const readoutRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  // Four stacked steps do not fit inside a pinned `h-screen` panel on a phone,
  // so narrow viewports get the plain static layout too.
  const isNarrow = useMediaQuery("(max-width: 639px)");
  const reduced = prefersReducedMotion || isNarrow;

  useEffect(() => {
    if (reduced) {
      const image = imageRef.current;
      if (image) image.style.transform = "none";
      return;
    }

    const wrap = wrapRef.current;
    if (!wrap) return;

    let frame = 0;
    let lastActive = 0;

    function update() {
      frame = 0;
      if (!wrap) return;

      const rect = wrap.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const raw = travel > 0 ? -rect.top / travel : 0;
      const progress = Math.min(1, Math.max(0, raw));

      if (imageRef.current) {
        imageRef.current.style.transform = `scale(${(1.14 - progress * 0.14).toFixed(4)})`;
      }
      if (scrimRef.current) {
        scrimRef.current.style.opacity = (0.55 - progress * 0.22).toFixed(3);
      }
      if (readoutRef.current) {
        readoutRef.current.textContent = String(
          Math.round(progress * 100)
        ).padStart(3, "0");
      }

      const next = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );
      if (next !== lastActive) {
        lastActive = next;
        setActive(next);
      }
    }

    function onScroll() {
      if (frame) return;
      frame = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [reduced, steps.length]);

  return (
    <section
      ref={wrapRef}
      aria-labelledby="process-heading"
      className={`relative ${reduced ? "" : "h-[280vh]"}`}
    >
      <div
        className={
          reduced
            ? "relative isolate overflow-hidden py-24"
            : "sticky top-0 isolate flex h-screen items-center overflow-hidden"
        }
      >
        <div
          ref={imageRef}
          className="photo-hero absolute inset-0 will-change-transform"
          style={{ transform: "scale(1.14)" }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition }}
          />
        </div>

        <div
          ref={scrimRef}
          aria-hidden="true"
          className="absolute inset-0 bg-background"
          style={{ opacity: 0.55 }}
        />
        {/* Solid behind the copy on the left, clearing toward the right so the
            photograph stays visible while the panel is pinned. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-r from-background via-background/75 to-background/10"
        />
        <AuroraField intensity="faint" />
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-20"
        />

        <Container className="relative z-10 w-full">
          <div className="flex items-center gap-3">
            <span className="index-tag">[{index}]</span>
            <span aria-hidden="true" className="h-px w-8 bg-border-strong" />
            <span className="mono-label">{eyebrow}</span>
          </div>

          <h2
            id="process-heading"
            className="display mt-5 max-w-2xl text-4xl text-foreground sm:text-5xl lg:text-[3.5rem]"
          >
            {title}
          </h2>

          <ol className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {steps.map((item, i) => {
              const isActive = reduced || i === active;
              return (
                <li
                  key={item.step}
                  className="relative border-t pt-5 transition-colors duration-500"
                  style={{
                    borderTopColor: isActive
                      ? "var(--signal)"
                      : "var(--border-strong)",
                  }}
                >
                  <span
                    className="font-mono text-3xl tabular-nums transition-colors duration-500 sm:text-4xl"
                    style={{ color: isActive ? "var(--signal)" : "var(--faint)" }}
                  >
                    {item.step}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </li>
              );
            })}
          </ol>
        </Container>

        {!reduced && (
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 hidden border-t border-border bg-background/50 backdrop-blur-sm sm:block"
          >
            <Container className="flex items-center justify-between py-3">
              <span className="mono-label">
                Phase {steps[active]?.step ?? "01"} of{" "}
                {String(steps.length).padStart(2, "0")}
              </span>
              <span className="mono-data text-foreground/70">
                Scroll to advance
              </span>
              <span className="mono-data text-foreground/70">
                <span ref={readoutRef}>000</span>%
              </span>
            </Container>
          </div>
        )}
      </div>
    </section>
  );
}
