import Image from "next/image";

export type PhotoRecordItem = {
  src: string;
  alt: string;
  code: string;
  place: string;
  caption: string;
  objectPosition?: string;
};

/**
 * A photograph treated like an archival specimen: hairline frame, monospace
 * catalog code, short caption. Desaturated to sit in the dark palette, and it
 * resolves to full colour on hover.
 */
export function PhotoRecord({ item }: { item: PhotoRecordItem }) {
  return (
    <figure className="photo-record group flex flex-col gap-4">
      <div className="photo-treated relative aspect-4/5 w-full overflow-hidden border border-border bg-surface">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
          className="object-cover"
          style={{ objectPosition: item.objectPosition ?? "50% 50%" }}
        />

        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-30"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-linear-to-t from-background/80 via-background/10 to-background/25"
        />

        <span className="absolute left-3 top-3 border border-border-strong bg-background/70 px-2 py-1 font-mono text-[0.625rem] uppercase tracking-[0.16em] text-foreground/80 backdrop-blur-sm">
          {item.code}
        </span>
      </div>

      <figcaption className="flex flex-col gap-1.5">
        <span className="mono-label text-foreground/70">{item.place}</span>
        <span className="text-sm leading-relaxed text-muted">
          {item.caption}
        </span>
      </figcaption>
    </figure>
  );
}
