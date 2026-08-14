import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell Symbasis where growth is stalling and we'll tell you what we'd do about it.",
};

export default function ContactPage() {
  return (
    <section className="bg-radial-glow py-24 sm:py-28">
      <Container className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <span className="w-fit rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-muted">
            Contact
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s talk growth.
          </h1>
          <p className="mt-6 max-w-sm text-lg leading-relaxed text-muted">
            Tell us where things are stalling. We&apos;ll reply within one
            business day with next steps. No lengthy pitch process.
          </p>

          <div className="mt-10 space-y-4 text-sm text-muted">
            <div>
              <p className="font-semibold text-foreground">Email</p>
              <a href="mailto:hello@symbasis.com.au" className="hover:text-teal">
                hello@symbasis.com.au
              </a>
            </div>
            <div>
              <p className="font-semibold text-foreground">Based in</p>
              <p>Sydney, Australia</p>
            </div>
          </div>
        </div>

        <div className="border-gradient rounded-2xl bg-background-elevated p-8 sm:p-10">
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
