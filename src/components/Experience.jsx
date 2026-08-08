const experience = [
  {
    role: "Full-Stack Developer",
    org: "Fiverr / Self-employed",
    period: "2025 — Present",
    points: [
      "Designed and shipped full-stack web applications (booking systems, marketplaces) for clients end to end — from requirements to deployment.",
      "Handled authentication, database design, and production deployment issues that don't show up in local development.",
    ],
  },
  {
    role: "Co-founder / Operator",
    org: "AramKuthir — Home Textile Business",
    period: "2025 — Present",
    points: [
      "Run a Facebook-based home-textile brand end to end: product sourcing, order management, and customer communication.",
      "Applied a product-development mindset to a real small business — narrowing product focus, testing demand, and iterating on the order flow based on customer feedback.",
    ],
  },
  {
    role: "Instructor / Coordinator",
    org: "PSC (Prottaborton Study Care)",
    period: "Ongoing",
    points: [
      "Help run a local study center, coordinating classes and student progress.",
      "Sharpened the same communication and problem-breakdown skills that carry over into explaining technical decisions clearly.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        Experience
      </h2>

      <p className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        What I've been doing.
      </p>

      <div className="mt-10 space-y-6">
        {experience.map((item) => (
          <div
            key={item.role}
            className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
              <h3 className="font-medium text-neutral-900 dark:text-white">
                {item.role}{" "}
                <span className="font-normal text-neutral-500 dark:text-neutral-400">
                  · {item.org}
                </span>
              </h3>
              <span className="shrink-0 text-sm text-neutral-500 dark:text-neutral-500">
                {item.period}
              </span>
            </div>

            <ul className="mt-3 list-disc space-y-1.5 pl-4 text-sm text-neutral-600 dark:text-neutral-400">
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}