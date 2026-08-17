"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

/**
 * Full-bleed backdrop photograph that drifts slower than the page as you
 * scroll. Fills its (positioned) parent.
 *
 * `preload` replaces the `priority` prop, which is deprecated in Next.js 16.
 */
export function ParallaxImage({
  src,
  alt,
  objectPosition = "50% 50%",
  factor = 0.3,
  preload = false,
  grade = "hero",
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  factor?: number;
  preload?: boolean;
  /** `hero` keeps the photo bright under a scrim; `specimen` is the darker archival grade. */
  grade?: "hero" | "specimen";
}) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const el = layerRef.current;
    if (!el) return;

    let frame = 0;

    function update() {
      frame = 0;
      if (!el?.parentElement) return;
      const rect = el.parentElement.getBoundingClientRect();
      el.style.transform = `translate3d(0, ${(rect.top * factor).toFixed(2)}px, 0)`;
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
  }, [factor]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div
        ref={layerRef}
        className={`absolute -top-32 -bottom-32 left-0 right-0 will-change-transform ${
          grade === "hero" ? "photo-hero" : "photo-treated"
        }`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          preload={preload}
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}
