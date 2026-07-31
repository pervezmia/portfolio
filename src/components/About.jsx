const stack = [
  "Next.js",
  "Express.js",
  "MongoDB",
  "Better Auth",
  "Tailwind CSS",
  "DaisyUI",
  "HeroUI",
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      {" "}
      <h2 className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        About
      </h2>
      <p className="mt-4 text-2xl font-medium leading-snug text-neutral-900 dark:text-white">
        I'm a self-taught full-stack developer based in Bangladesh, building
        products from scratch — frontend, backend, and deployment.
      </p>
      <div className="mt-6 space-y-4 text-neutral-600 dark:text-neutral-400">
        <p>
          Over the past year I've shipped three full-stack applications on my
          own — a tutor booking platform, an online course marketplace, and a
          travel booking app — each one taking me deeper into authentication,
          database design, and real deployment problems that tutorials don't
          cover.
        </p>
        <p>
          I care about code that actually works in production, not just in a
          local dev server. That means handling edge cases, fixing
          environment-variable headaches, and making sure the thing I built
          still works after I hand it off.
        </p>
      </div>
      <div className="mt-8 flex flex-wrap gap-2">
        {stack.map((item) => (
          <span
            key={item}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
