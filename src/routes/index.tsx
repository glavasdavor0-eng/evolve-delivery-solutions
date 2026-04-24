import { createFileRoute } from "@tanstack/react-router";
import logoLight from "@/assets/evolve-logo-light.png"; // navy text on white
import logoDark from "@/assets/evolve-logo-dark.png"; // white text on navy

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/85 backdrop-blur">
      <div className="container-evolve flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="EVOLVE home">
          <img src={logoLight} alt="EVOLVE" className="h-5 w-auto" />
        </a>
        <a
          href="#contact"
          className="text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="bg-primary text-primary-foreground">
      <div className="container-evolve pb-28 pt-40 md:pb-40 md:pt-48">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Specialized delivery support for eClinical technology vendors.
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-primary-foreground/75 md:text-xl">
            We help eClinical platforms deliver with less risk, better test coverage, and stronger
            quality control — embedded inside your delivery team.
          </p>
          <div className="mt-12">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    title: "UAT Design & Support",
    body: "Test script development aligned to protocol and functional specs. Full study coverage, structured traceability, optional execution support.",
  },
  {
    title: "Test Quality Oversight",
    body: "An oversight layer on top of your QA process. We identify gaps, surface risks, and deliver structured reporting before issues reach clients.",
  },
  {
    title: "Functional Testing & Validation",
    body: "Pre-UAT quality control, spec alignment checks, and system behavior validation across complex study workflows.",
  },
  {
    title: "Configuration & Study Build Support",
    body: "Hands-on support ensuring alignment between specification and platform configuration throughout the build process.",
  },
  {
    title: "Embedded Delivery Resourcing",
    body: "Experienced QE, PC, and implementation profiles that plug into your team and contribute from day one.",
  },
];

function Services() {
  return (
    <section id="services" className="bg-background">
      <div className="container-evolve py-24 md:py-32">
        <p className="section-label">Services</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          Our work sits between your product, your delivery team, and your client expectations.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`bg-surface p-8 md:p-10 ${
                i === services.length - 1 ? "md:col-span-2" : ""
              }`}
            >
              <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

const differentiators = [
  {
    n: "01",
    title: "We catch issues early",
    body: "Before UAT, before go-live, before your client sees them.",
  },
  {
    n: "02",
    title: "We understand both sides",
    body: "System configuration logic and study execution realities. That combination is rare.",
  },
  {
    n: "03",
    title: "We integrate, we don't audit",
    body: "We operate inside your delivery team, not as an external layer of oversight.",
  },
];

function Differentiators() {
  return (
    <section id="differentiators" className="bg-surface">
      <div className="container-evolve py-24 md:py-32">
        <p className="section-label">Differentiators</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          Most QA support understands testing. We understand testing and how eClinical studies
          actually run.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {differentiators.map((d) => (
            <div key={d.title} className="border-t border-border pt-6">
              <span className="text-sm font-medium text-accent">{d.n}</span>
              <h3 className="mt-3 text-lg font-semibold text-foreground">{d.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">{d.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const tags = [
    "eCOA, ePRO & clinical platform vendors",
    "Heads of Delivery and Operations",
    "Product and Engineering leaders",
  ];
  return (
    <section id="clients" className="bg-background">
      <div className="container-evolve py-24 md:py-32">
        <p className="section-label">Our Clients</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          We work exclusively with eClinical technology vendors.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Not sponsors. Not CROs. We partner with the companies building and delivering eClinical
          platforms — and the teams responsible for quality and implementation.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-primary/25 px-4 py-2 text-sm text-foreground"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Engagement() {
  const items = [
    "Project-based scoped support",
    "Fractional or dedicated embedded resources",
    "Flexible resourcing aligned to delivery peaks and study timelines",
  ];
  return (
    <section id="engagement" className="bg-primary text-primary-foreground">
      <div className="container-evolve py-24 md:py-32">
        <p
          className="section-label"
          style={{ color: "color-mix(in oklab, white 60%, transparent)" }}
        >
          How We Work
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          Flexible by design. Structured where it matters.
        </h2>

        <ul className="mt-12 max-w-2xl space-y-5">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-4">
              <span
                aria-hidden
                className="mt-3 inline-block h-1.5 w-6 flex-shrink-0 bg-accent"
              />
              <span className="text-lg text-primary-foreground/90">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="container-evolve py-24 md:py-32">
        <p className="section-label">Contact</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          If you're managing delivery risk on complex eClinical studies, let's talk.
        </h2>

        <div className="mt-12 max-w-xl">
          <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-3 text-base">
            <dt className="text-muted-foreground">Name</dt>
            <dd className="text-foreground">Davor Glavas</dd>
            <dt className="text-muted-foreground">Email</dt>
            <dd>
              <a
                href="mailto:davor@evolve-clinical.com"
                className="text-foreground underline-offset-4 hover:text-accent hover:underline"
              >
                davor@evolve-clinical.com
              </a>
            </dd>
          </dl>

          <div className="mt-10">
            <a
              href="mailto:davor@evolve-clinical.com"
              className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-evolve py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <img src={logoDark} alt="EVOLVE Clinical Solutions" className="h-4 w-auto opacity-90" />
          <a
            href="mailto:davor@evolve-clinical.com"
            className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
          >
            davor@evolve-clinical.com
          </a>
        </div>
        <p className="mt-8 text-xs text-primary-foreground/55">
          © 2025 EVOLVE Clinical Solutions
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <Clients />
        <Engagement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
