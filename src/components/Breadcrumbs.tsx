import Link from "next/link";

type Crumb = {
  label: string;
  href?: string;
};

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="mono-label flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {item.href ? (
              // 44px tall on touch; the crumbs sit side by side, so the row
              // height is unchanged.
              <Link
                href={item.href}
                className="inline-flex tap-target items-center transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground/80">{item.label}</span>
            )}
            {index < items.length - 1 && (
              <span aria-hidden="true" className="text-faint/60">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
