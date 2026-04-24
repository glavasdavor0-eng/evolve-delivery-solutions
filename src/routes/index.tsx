import { createFileRoute } from "@tanstack/react-router";

// Note: file naming is reversed — these point to the visually correct asset.
import logoLight from "@/assets/evolve-logo-dark.png"; // navy text on white bg
import logoDark from "@/assets/evolve-logo-light.png"; // white text on dark bg

export const Route = createFileRoute("/")({
  component: Index,
});

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary">
      <div className="container-evolve flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="EVOLVE home">
          <img src={logoDark} alt="EVOLVE" className="h-5 w-auto" style={{ mixBlendMode: "screen" }} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#top"
            className="text-sm font-normal text-white transition-colors hover:text-white/70"
          >
            Home
          </a>

          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-normal text-white transition-colors hover:text-white/70"
              aria-haspopup="true"
            >
              Services
              <svg
                aria-hidden
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="mt-0.5"
              >
                <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <div className="invisible absolute right-0 top-full pt-3 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
              <div className="min-w-[220px] bg-primary py-2">
                <a
                  href="#service-uat"
                  className="block px-5 py-2.5 text-sm text-white transition-colors hover:bg-accent"
                >
                  UAT &amp; Testing
                </a>
                <a
                  href="#service-impl"
                  className="block px-5 py-2.5 text-sm text-white transition-colors hover:bg-accent"
                >
                  Implementation Support
                </a>
                <a
                  href="#service-resourcing"
                  className="block px-5 py-2.5 text-sm text-white transition-colors hover:bg-accent"
                >
                  Embedded Resourcing
                </a>
              </div>
            </div>
          </div>

          <a
            href="#contact"
            className="text-sm font-normal text-white transition-colors hover:text-white/70"
          >
            Contact
          </a>
        </nav>

        <a
          href="#contact"
          className="text-sm font-medium text-white/90 transition-colors hover:text-white"
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
      <div className="container-evolve pb-24 pt-28 md:pb-28 md:pt-36">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Specialized delivery support for eClinical technology vendors.
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-normal leading-relaxed text-primary-foreground/75 md:text-xl">
            We help eClinical platforms deliver with less risk, better test coverage, and stronger
            quality control — embedded inside your delivery team.
          </p>
          <p className="mt-6 max-w-2xl text-sm font-normal leading-relaxed text-primary-foreground/60">
            Built by people who have worked inside eClinical delivery teams.
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

type Pillar = {
  id: string;
  n: string;
  title: string;
  intro?: string;
  points: string[];
  engagementModels?: string[];
  note?: string;
};

const pillars: Pillar[] = [
  {
    id: "service-uat",
    n: "01",
    title: "UAT Design & Support",
    points: [
      "Test script development aligned to protocol and functional specs",
      "Full study coverage and structured traceability",
      "Review and optimization of existing test scripts",
      "Optional execution support including defect verification and retesting",
    ],
    engagementModels: [
      "Core – UAT Scripts",
      "Study-Ready – Full Coverage (Recommended)",
      "Execution Support – Optional Add-on",
    ],
  },
  {
    id: "service-impl",
    n: "02",
    title: "Implementation & Configuration Support",
    points: [
      "Study configuration and platform implementation support",
      "Translation of protocol requirements into system configuration",
      "Setup of workflows, forms, schedules, and participant-facing logic",
      "Review and validation of study builds prior to UAT",
      "Pre-UAT quality control and spec alignment checks",
    ],
  },
  {
    id: "service-resourcing",
    n: "03",
    title: "Embedded Delivery Resourcing",
    intro: "Experienced profiles that integrate into your delivery team from day one:",
    points: [
      "Project Managers (PM)",
      "Quality Assurance (QA) Specialists",
      "Study Designers / Study Builders",
      "eClinical Implementation Specialists",
      "Developers / Technical Configuration Support",
      "Project Coordinators (PC) and operational roles",
    ],
    note: "Flexible engagement: fractional or dedicated, project-based or ongoing.",
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

        <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <article
              key={p.title}
              id={p.id}
              className="flex scroll-mt-24 flex-col bg-surface p-8 md:p-10"
            >
              <span className="text-sm font-medium text-accent">{p.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{p.title}</h3>

              {p.intro && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.intro}</p>
              )}

              <ul className="mt-5 space-y-2.5">
                {p.points.map((pt) => (
                  <li
                    key={pt}
                    className="flex gap-3 text-[0.95rem] leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden
                      className="mt-2.5 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-accent"
                    />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {p.engagementModels && (
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground/70">
                    Engagement Models
                  </p>
                  <ul className="mt-3 space-y-1.5 pl-1 text-sm text-primary/80">
                    {p.engagementModels.map((it) => (
                      <li key={it}>· {it}</li>
                    ))}
                  </ul>
                </div>
              )}

              {p.note && (
                <p className="mt-6 border-t border-border pt-5 text-sm italic leading-relaxed text-muted-foreground">
                  {p.note}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>

      <div className="bg-surface">
        <div className="container-evolve py-12 text-center md:py-16">
          <p className="section-label">Platform Familiarity</p>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Our team has hands-on experience across leading eCOA, ePRO, EDC, and broader eClinical
            platforms operating in complex global study environments.
          </p>
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

const outcomes = [
  "Reduced pre-UAT defect leakage on a complex eCOA study through structured script coverage aligned to protocol requirements.",
  "Supported full study configuration and go-live readiness for a global Phase III study, ensuring alignment between protocol requirements and platform setup across workflows and participant-facing logic.",
  "Embedded QA resource operational within one week, contributing directly to UAT execution with minimal ramp-up time or oversight required.",
  "Identified misalignment between protocol specifications and platform configuration during study build review, preventing downstream issues before UAT commenced.",
];

function Outcomes() {
  return (
    <section id="outcomes" className="bg-background">
      <div className="container-evolve py-24 md:py-32">
        <p className="section-label">Experience in Practice</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          Work that speaks for itself.
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {outcomes.map((o) => (
            <div key={o} className="bg-surface p-8 md:p-10">
              <p className="text-base leading-relaxed text-foreground/85">{o}</p>
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
    "CROs managing eClinical implementation",
    "Sponsors with complex study delivery needs",
  ];
  return (
    <section id="clients" className="bg-surface">
      <div className="container-evolve py-24 md:py-32">
        <p className="section-label">Our Clients</p>
        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
          We work with eClinical technology vendors, CROs, and sponsors.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          Our core experience is vendor-side — working inside delivery and implementation teams.
          But the same capabilities apply wherever eClinical quality and delivery risk needs to be
          managed.
        </p>

        <ul className="mt-10 flex flex-wrap gap-3">
          {tags.map((t) => (
            <li
              key={t}
              className="rounded-full border border-primary/25 bg-background px-4 py-2 text-sm text-foreground"
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
    {
      title: "Project-based scoped support",
      body: "Defined scope, clear deliverables, fixed engagement.",
    },
    {
      title: "Fractional or dedicated embedded resources",
      body: "We become part of your team for as long as you need.",
    },
    {
      title: "Flexible resourcing aligned to delivery peaks",
      body: "Scale up during high-volume periods, scale back as priorities shift.",
    },
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

        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {items.map((i) => (
            <div key={i.title} className="border-t border-white/15 pt-6">
              <span aria-hidden className="inline-block h-1 w-8 bg-accent" />
              <h3 className="mt-4 text-lg font-semibold text-primary-foreground">{i.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-primary-foreground/70">
                {i.body}
              </p>
            </div>
          ))}
        </div>
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
          <p className="text-xs font-medium uppercase tracking-wider text-foreground/70">
            Davor Glavas
          </p>

          <form
            action="https://formspree.io/f/mykloklq"
            method="POST"
            className="mt-5 space-y-4"
          >
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                required
                placeholder="Name"
                className="flex h-11 w-full rounded-md border-0 bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="Email"
                className="flex h-11 w-full rounded-md border-0 bg-surface px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Message"
                className="flex w-full rounded-md border-0 bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center bg-accent px-7 py-3.5 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent/90"
              >
                Send message
              </button>
            </div>
          </form>

          <div className="mt-6">
            <a
              href="/capabilities.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent underline-offset-4 hover:underline"
            >
              Download our capabilities sheet →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingBand() {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-evolve py-6">
        <p className="text-center text-sm text-primary-foreground/70">
          EVOLVE Clinical Solutions — specialized eClinical delivery support based on real delivery
          experience, not theory.
        </p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-evolve py-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <img src={logoDark} alt="EVOLVE Clinical Solutions" className="h-4 w-auto opacity-90" style={{ mixBlendMode: "screen" }} />
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
  // Reference logoLight to satisfy unused-import lint while keeping it available for future light-bg use.
  void logoLight;
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Services />
        <Differentiators />
        <Outcomes />
        <Clients />
        <Engagement />
        <Contact />
      </main>
      <ClosingBand />
      <Footer />
    </div>
  );
}
