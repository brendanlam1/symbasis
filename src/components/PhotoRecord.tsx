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
 * catalog code, short caption.
 *
 * No scrim over the image: the caption lives outside the frame and the catalog
 * chip carries its own dark glass, so nothing needs the photo darkened to stay
 * legible. The daylight exposure is the point — these frames are what makes the
 * bright sections bright.
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
          className="scanlines absolute inset-0 opacity-20"
        />

        <span className="catalog-chip">{item.code}</span>
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
