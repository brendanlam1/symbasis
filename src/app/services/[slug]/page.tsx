import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AuroraField } from "@/components/AuroraField";
import { Reveal } from "@/components/Reveal";
import { ScanDivider } from "@/components/ScanDivider";
import { services } from "@/lib/services";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) return {};

  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  const service = services[index];

  if (!service) notFound();

  const code = `SB.02.${String(index + 1).padStart(2, "0")}`;
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <AuroraField intensity="bright" />
        <div aria-hidden="true" className="absolute inset-0 bg-background/25" />
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-15"
        />

        <Container className="relative z-10 flex flex-col gap-7 py-20 sm:py-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
            <span className="index-tag">[{code}]</span>
            <span aria-hidden="true" className="hidden h-px w-10 bg-border-strong sm:block" />
            <span className="mono-label">
              Service {String(index + 1).padStart(2, "0")} of{" "}
              {String(services.length).padStart(2, "0")}
            </span>
          </div>

          <h1 className="display max-w-3xl text-[clamp(2.1rem,6vw,3.75rem)] text-foreground">
            {service.title}
          </h1>

          <p className="max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {service.description}
          </p>

          <Button href="/contact" className="w-fit">
            Start a project
          </Button>
        </Container>
      </section>

      <ScanDivider code={code} />

      {/* ------------------------------------------------ Approach — bright */}
      <section className="on-paper py-20 sm:py-24">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span aria-hidden="true" className="hidden h-px w-8 bg-signal sm:block" />
              <span className="mono-label">Approach</span>
            </div>
            <h2 className="display mt-5 text-3xl text-foreground sm:text-4xl">
              How we approach it
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {service.approach}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="border border-border bg-surface/60 p-8">
              <h2 className="mono-label text-foreground/70">
                What&apos;s included
              </h2>
              <ul className="mt-6 space-y-4">
                {service.deliverables.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 border-b border-border pb-4 text-sm text-foreground last:border-b-0 last:pb-0"
                  >
                    <span className="mono-data shrink-0 pt-0.5 text-signal">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------- Other capabilities — bright, warm */}
      <section className="on-paper on-paper--warm border-t border-border py-20">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="index-tag">[SB.02]</span>
              <span aria-hidden="true" className="hidden h-px w-8 bg-border-strong sm:block" />
              <span className="mono-label">Other capabilities</span>
            </div>
          </Reveal>

          {/* Bordered cells rather than the `gap-px` hairline-grid trick: with
              five items the grid would leave a lit phantom cell. */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other, i) => (
              <Reveal key={other.slug} delay={i * 60}>
                <Link
                  href={`/services/${other.slug}`}
                  className="group flex h-full items-center justify-between gap-4 border border-border bg-background p-6 text-sm font-medium text-foreground transition-colors duration-300 hover:border-signal/50 hover:bg-surface hover:text-signal-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-signal"
                >
                  {other.title}
                  <span
                    aria-hidden="true"
                    className="text-signal opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --------------------------------------------- Outro — ember flood */}
      <section className="on-ember relative isolate overflow-hidden py-28 sm:py-32">
        <div
          aria-hidden="true"
          className="scanlines absolute inset-0 opacity-20"
        />

        <Container className="relative z-10 flex flex-col items-center gap-7 text-center">
          <Reveal className="flex flex-col items-center gap-7">
            <span className="mono-label">Next step</span>
            <h2 className="display max-w-2xl text-4xl text-foreground sm:text-5xl">
              Ready to talk {service.title.toLowerCase()}?
            </h2>
            <p className="max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Tell us where you&apos;re starting from. We&apos;ll tell you what
              we&apos;d do about it.
            </p>
            <Button href="/contact">Start a project</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
