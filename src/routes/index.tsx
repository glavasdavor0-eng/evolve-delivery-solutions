import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
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
          <img src={logoDark} alt="EVOLVE" className="h-5 w-auto" />
        </a>
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
      <div className="container-evolve pb-44 pt-56 md:pb-56 md:pt-64">
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
  n: string;
  title: string;
  points: string[];
  footer?: { label: string; items: string[] } | { note: string };
};

const pillars: Pillar[] = [
  {
    n: "01",
    title: "UAT Design & Support",
    points: [
      "Test script development aligned to protocol and functional specs",
      "Full study coverage and structured traceability",
      "Review and optimization of existing test scripts",
      "Optional execution support including defect verification and retesting",
    ],
  },
  {
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
    n: "03",
    title: "Embedded Delivery Resourcing",
    points: [
      "Project Managers (PM)",
      "Quality Assurance (QA) Specialists",
      "Study Designers / Study Builders",
      "eClinical Implementation Specialists",
      "Developers / Technical Configuration Support",
      "Project Coordinators (PC) and operational roles",
    ],
    footer: {
      note: "Flexible engagement: fractional or dedicated, project-based or ongoing.",
    },
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
              className="flex flex-col bg-surface p-8 md:p-10"
            >
              <span className="text-sm font-medium text-accent">{p.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-foreground">{p.title}</h3>

              {p.title === "Embedded Delivery Resourcing" && (
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Experienced profiles that integrate into your delivery team from day one:
                </p>
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

              {p.footer && "label" in p.footer && (
                <div className="mt-6 border-t border-border pt-5">
                  <p className="text-xs font-medium uppercase tracking-wider text-foreground/70">
                    {p.footer.label}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                    {p.footer.items.map((it) => (
                      <li key={it}>· {it}</li>
                    ))}
                  </ul>
                </div>
              )}

              {p.footer && "note" in p.footer && (
                <p className="mt-6 border-t border-border pt-5 text-sm italic leading-relaxed text-muted-foreground">
                  {p.footer.note}
                </p>
              )}
            </article>
          ))}
        </div>

        <div className="mt-12">
          <p className="section-label">UAT Engagement Models</p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {[
              "Core — UAT Scripts",
              "Study-Ready — Full Coverage (Recommended)",
              "Execution Support — Optional Add-on",
            ].map((it) => (
              <li
                key={it}
                className="rounded-full border border-primary/30 px-4 py-2 text-sm text-primary"
              >
                {it}
              </li>
            ))}
          </ul>
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
    "CROs managing eClinical implementation",
    "Sponsors with complex study delivery needs",
  ];
  return (
    <section id="clients" className="bg-background">
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
      body: "Scale up during high-volume periods, scale back when not needed.",
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
