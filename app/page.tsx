import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Galzu Universe | AI Integration & Restaurant Consulting",
  description:
    "Built by João Filipe Catalão. AI integration and restaurant consulting focused on execution, operational optimization, systems, and profitability.",
};

const calendlyUrl = "https://calendly.com/galzuconsult";
const linkedInUrl =
  "https://www.linkedin.com/in/joao-filipe-catalao-784557226/";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

const services = [
  {
    title: "Galzu Builds for You - AI Integration",
    line: "AI Integration as Infrastructure",
    bestFor: "Best for: founders and ops teams",
    bullets: [
      "Custom workflow automation",
      "Internal AI agents",
      "Build landing pages",
      "AI-powered reporting dashboards",
      "Decision-support systems",
      "Process restructuring using AI",
      "Integration into existing teams",
    ],
    cta: "Book AI Integration Call",
    rich: {
      intro: [
        "AI is not a workshop. It is not a presentation. It is not ChatGPT prompts.",
        "It is infrastructure.",
      ],
      whatIDo:
        "I design and integrate AI systems directly into your business operations. This is done with your business, not delivered as theory.",
      whoFor: [
        "Founders scaling operations",
        "Companies drowning in repetitive tasks",
        "Teams stuck in manual processes",
        "Businesses ready to increase output without increasing headcount",
      ],
      process: [
        "Operational Diagnosis - We map friction and inefficiencies.",
        "System Architecture - We design the AI integration layer.",
        "Implementation - We build and deploy directly into your workflows.",
        "Optimization - We measure impact and refine.",
      ],
      positioning:
        "You are not buying AI consulting. You are installing an operational multiplier.",
    },
  },
  {
    title: "Restaurant Consulting",
    line: "Structure Protects Profit",
    bestFor: "Best for: restaurant owners and operators",
    bullets: [
      "Food cost control",
      "Menu engineering",
      "Contribution margin analysis",
      "Cost structure breakdown",
      "Kitchen workflow",
      "Service structure",
      "Standardization",
      "Process documentation",
      "Role clarity",
      "Performance structure",
      "Training flow",
      "Leadership alignment",
    ],
    cta: "Book Restaurant Strategy Call",
    rich: {
      intro: [
        "Restaurants do not fail from lack of passion.",
        "They fail from lack of operational clarity.",
      ],
      whatIDo:
        "This is about turning a reactive restaurant into a controlled business system.",
      optimizeGroups: [
        {
          title: "Financial Structure",
          items: [
            "Food cost control",
            "Menu engineering",
            "Contribution margin analysis",
            "Cost structure breakdown",
          ],
        },
        {
          title: "Operational Flow",
          items: [
            "Kitchen workflow",
            "Service structure",
            "Standardization",
            "Process documentation",
          ],
        },
        {
          title: "Team and Accountability",
          items: [
            "Role clarity",
            "Performance structure",
            "Training flow",
            "Leadership alignment",
          ],
        },
      ],
      whoFor: [
        "Independent restaurant owners",
        "Growing hospitality groups",
        "Operators with margin pressure",
        "Concepts preparing to scale",
      ],
      process: [
        "Diagnostic Review",
        "Financial and Operational Analysis",
        "System Redesign",
        "Implementation Support",
      ],
      positioning:
        "The goal is predictable margins, controlled costs, operational calm, and a scalable structure.",
    },
  },
];

const steps = [
  {
    title: "Diagnose",
    text: "Map constraints and opportunities with brutal clarity.",
  },
  {
    title: "Architect",
    text: "Design systems that match your team and real operations.",
  },
  {
    title: "Implement",
    text: "Deploy tools, routines, and accountability at execution level.",
  },
  {
    title: "Optimize",
    text: "Measure outcomes, tighten bottlenecks, and protect margin.",
  },
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(34,211,238,0.15),transparent_30%),radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.12),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.1),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-cover bg-center opacity-[0.16] mix-blend-screen"
        style={{ backgroundImage: "url('/branding/galzu-banner.png')" }}
      />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#top"
            className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white transition hover:text-cyan-200"
            aria-label="Go to top"
          >
            <span
              aria-hidden="true"
              className="h-8 w-8 rounded-full border border-white/20 bg-black/40 bg-contain bg-center bg-no-repeat mix-blend-screen"
              style={{ backgroundImage: "url('/branding/galzu-logo.png')" }}
            />
            GALZU
          </a>
          <nav aria-label="Primary navigation">
            <ul className="flex items-center gap-4 text-sm text-slate-300 sm:gap-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="galzu-float relative mx-auto mb-6 h-36 w-36 sm:h-44 sm:w-44">
              <div className="galzu-glow absolute inset-0 rounded-full bg-cyan-300/30 mix-blend-screen" />
              <div
                aria-hidden="true"
                className="galzu-spin absolute inset-0 rounded-full border border-cyan-200/25"
              />
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-full border border-cyan-300/10"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-full bg-contain bg-center bg-no-repeat mix-blend-screen"
                style={{ backgroundImage: "url('/branding/galzu-logo.png')" }}
              />
            </div>
            <p className="inline-flex rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-cyan-100">
              The Galzu Universe
            </p>
            <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              Strategy.
              <br />
              Systems.
              <br />
              Execution.
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-pretty text-base leading-relaxed text-slate-300 sm:text-lg">
              Built by Joao Filipe Catalao. AI integration and restaurant
              consulting focused on execution, operational optimization,
              systems, and profitability.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Book a Strategy Call
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-300/60 hover:bg-cyan-300/10"
              >
                View Services
              </a>
            </div>

            <div className="mt-10 grid gap-3 text-sm text-slate-300 sm:grid-cols-3">
              <p className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                Execution over theory.
              </p>
              <p className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                Systems over chaos.
              </p>
              <p className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                Profitability over noise.
              </p>
            </div>
          </div>
        </section>

        <section
          id="services"
          aria-labelledby="services-title"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="mb-8 flex items-end justify-between gap-4">
            <h2 id="services-title" className="text-2xl font-semibold sm:text-3xl">
              Services
            </h2>
            <span className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Built to perform
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.03] p-6 transition hover:border-cyan-300/35"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">
                  {service.bestFor}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-slate-300">{service.line}</p>
                {"rich" in service && service.rich ? (
                  <div className="mt-4 space-y-4 rounded-xl border border-cyan-300/20 bg-cyan-400/5 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                      What I Actually Do
                    </p>
                    <div className="space-y-2 text-sm text-slate-200">
                      {service.rich.intro.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-300">
                      {service.rich.whatIDo}
                    </p>
                    {"optimizeGroups" in service.rich &&
                    service.rich.optimizeGroups ? (
                      <div className="space-y-3 border-t border-white/10 pt-3">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                          What I Optimize
                        </p>
                        {service.rich.optimizeGroups.map((group) => (
                          <div key={group.title}>
                            <p className="text-sm font-semibold text-white">
                              {group.title}
                            </p>
                            <ul className="mt-1 space-y-1 text-sm text-slate-300">
                              {group.items.map((item) => (
                                <li key={item}>{item}</li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
                <ul className="mt-5 space-y-2 text-sm text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span
                        aria-hidden="true"
                        className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                {"rich" in service && service.rich ? (
                  <>
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                        Who This Is For
                      </p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-200">
                        {service.rich.whoFor.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span
                              aria-hidden="true"
                              className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300"
                            />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-100">
                        The Process
                      </p>
                      <ul className="mt-2 space-y-2 text-sm text-slate-300">
                        {service.rich.process.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-5 rounded-lg border border-amber-300/30 bg-amber-200/10 p-3">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100">
                        Positioning Layer
                      </p>
                      <p className="mt-1 text-sm text-amber-50/95">
                        {service.rich.positioning}
                      </p>
                    </div>
                  </>
                ) : null}
                <a
                  href={calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition group-hover:-translate-y-0.5 group-hover:bg-cyan-200"
                >
                  {service.cta}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section
          id="process"
          aria-labelledby="process-title"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <h2 id="process-title" className="text-2xl font-semibold sm:text-3xl">
            Process
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, idx) => (
              <article
                key={step.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-100">
                  Step {idx + 1}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          id="about"
          aria-labelledby="about-title"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <h2 id="about-title" className="text-2xl font-semibold sm:text-3xl">
            About
          </h2>
          <div className="mt-6 max-w-3xl rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <p className="leading-relaxed text-slate-300">
              Joao Filipe Catalao is a hard working man who combines systems
              thinking with creative execution. He helps teams build practical
              infrastructure, improve decisions, and turn strategy into
              measurable outcomes.
            </p>
            <a
              href={linkedInUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex rounded-lg border border-cyan-300/40 bg-cyan-400/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition hover:-translate-y-0.5 hover:bg-cyan-400/20"
            >
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <section className="mx-auto w-full max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <aside className="rounded-xl border border-amber-300/25 bg-amber-200/10 p-5">
            <h2 className="text-lg font-semibold text-amber-100">
              Estado Critico (Coming Soon)
            </h2>
            <p className="mt-1 text-sm text-amber-50/90">
              Cultural branch of the Galzu Universe.
            </p>
            <p className="text-sm text-amber-50/90">
              Live comedy and community, currently on standby.
            </p>
          </aside>
        </section>

        <section
          id="contact"
          aria-labelledby="contact-title"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <h2 id="contact-title" className="text-2xl font-semibold sm:text-3xl">
            Contact
          </h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6"
              aria-describedby="form-note"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-slate-200"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="How can we help?"
                    className="w-full rounded-lg border border-white/15 bg-slate-900/80 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-300/50"
                  />
                </div>
              </div>
              <p id="form-note" className="mt-4 text-xs text-slate-400">
                This form is a placeholder.
              </p>
              <button
                type="button"
                aria-disabled="true"
                className="mt-5 inline-flex cursor-not-allowed rounded-lg border border-white/20 bg-white/10 px-4 py-2.5 text-sm font-semibold text-slate-200"
              >
                Submit
              </button>
            </form>

            <aside className="relative overflow-hidden rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-6">
              <h3 className="relative text-xl font-semibold text-white">
                Ready to move with structure?
              </h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-200">
                Book directly on Calendly for AI integration or restaurant
                strategy. Start with priorities, constraints, and clear next
                actions.
              </p>
              <a
                href={calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="relative mt-6 inline-flex rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Book a Strategy Call
              </a>
            </aside>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto w-full max-w-7xl px-4 text-sm text-slate-400 sm:px-6 lg:px-8">
          &copy; {year} The Galzu Universe
        </div>
      </footer>
    </div>
  );
}
