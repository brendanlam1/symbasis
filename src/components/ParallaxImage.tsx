"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export function ParallaxImage({
  src,
  alt,
  objectPosition = "50% 50%",
  factor = 0.3,
}: {
  src: string;
  alt: string;
  objectPosition?: string;
  factor?: number;
}) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const el = layerRef.current;
    if (!el) return;

    let ticking = false;

    function update() {
      if (!el) return;
      const rect = el.parentElement!.getBoundingClientRect();
      el.style.transform = `translateY(${rect.top * factor}px)`;
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [factor]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div ref={layerRef} className="absolute left-0 right-0 -top-32 -bottom-32 will-change-transform">
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </div>
    </div>
  );
}
