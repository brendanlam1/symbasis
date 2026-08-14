import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { Breadcrumbs } from "@/components/Breadcrumbs";
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
  const service = services.find((s) => s.slug === slug);

  if (!service) notFound();

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      <section className="border-b border-border bg-radial-glow">
        <Container className="flex flex-col gap-6 py-20 sm:py-24">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: service.title },
            ]}
          />
          <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {service.title}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-muted">
            {service.description}
          </p>
          <Button href="/contact" className="w-fit">
            Start a project
          </Button>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h2 className="text-2xl font-semibold text-foreground">
              How we approach it
            </h2>
            <p className="mt-4 leading-relaxed text-muted">
              {service.approach}
            </p>
          </div>

          <div className="border-gradient rounded-2xl bg-background-elevated p-8">
            <h2 className="text-lg font-semibold text-foreground">
              What&apos;s included
            </h2>
            <ul className="mt-5 space-y-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-20">
        <Container>
          <h2 className="text-xl font-semibold text-foreground">
            Other services
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="rounded-xl border border-border p-5 text-sm font-medium text-foreground transition-colors hover:border-coral/60"
              >
                {other.title}
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to talk {service.title.toLowerCase()}?
          </h2>
          <p className="max-w-lg text-muted">
            Tell us where you&apos;re starting from. We&apos;ll tell you what we&apos;d do about it.
          </p>
          <Button href="/contact">Start a project</Button>
        </Container>
      </section>
    </>
  );
}
