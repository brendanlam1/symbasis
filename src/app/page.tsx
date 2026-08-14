import Link from "next/link";
import { Container } from "@/components/Container";
import { Button } from "@/components/Button";
import { ParallaxImage } from "@/components/ParallaxImage";
import { services } from "@/lib/services";

const process = [
  {
    step: "01",
    title: "Discover",
    description: "We dig into your market, your data, and your customers until the real opportunity is obvious.",
  },
  {
    step: "02",
    title: "Design",
    description: "Strategy becomes a system: messaging, creative, and channels built to reinforce each other.",
  },
  {
    step: "03",
    title: "Deploy",
    description: "We ship fast, in public, with tracking baked in from day one, not bolted on after.",
  },
  {
    step: "04",
    title: "Compound",
    description: "Every campaign feeds the next. We double down on what works and kill what doesn't, on a set cadence.",
  },
];

const principles = [
  {
    title: "One system, not six vendors",
    description:
      "Strategy, creative, and media sit under one roof so your channels reinforce each other instead of competing for the same budget.",
  },
  {
    title: "Built on your data",
    description:
      "Every recommendation traces back to a number. If we can't measure it, we don't pitch it.",
  },
  {
    title: "Senior hands, every project",
    description:
      "No junior hand-off after the pitch. The people who plan the work are the people who run it.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden">
        <ParallaxImage
          src="/images/earth-network.jpg"
          alt="Earth at night seen from orbit, city lights forming a connected network across the globe"
          objectPosition="50% 68%"
          factor={0.25}
        />
        <div className="absolute inset-0 bg-foreground/10" />

        <Container className="relative py-24">
          <div className="border-gradient max-w-xl rounded-3xl bg-background/85 p-8 backdrop-blur-md sm:p-12">
            <span className="rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
              Full-service marketing agency
            </span>

            <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
              Marketing built in{" "}
              <span className="text-gradient">symbiosis</span> with your
              business.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
              We fuse strategy, creative, and performance into a single system,
              so every channel compounds instead of competing for budget.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/contact">Start a project</Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Everything a growth team needs.
                <br />
                Under one roof.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold text-coral hover:text-coral-light"
            >
              View all services →
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="border-gradient rounded-2xl bg-background-elevated p-8 transition-transform motion-safe:hover:-translate-y-0.5"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            How we work
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step}>
                <span className="text-sm font-semibold text-gradient">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Why brands work with us
            </h2>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle.title}>
                  <h3 className="text-lg font-semibold text-foreground">
                    {principle.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {principle.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border py-24">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Ready to build something that compounds?
          </h2>
          <p className="max-w-lg text-muted">
            Tell us where growth is stalling. We&apos;ll tell you what we&apos;d do about it. No deck, no fluff.
          </p>
          <Button href="/contact">Start a project</Button>
        </Container>
      </section>
    </>
  );
}
