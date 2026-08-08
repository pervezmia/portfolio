export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        About
      </h2>

      <p className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        I'm a self-taught full-stack developer based in Bangladesh, building
        products from scratch — frontend, backend, and deployment.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-5 text-neutral-600 dark:text-neutral-400">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              My journey
            </h3>
            <p className="mt-2 leading-relaxed">
              I taught myself to code without a formal CS background —
              starting with small static pages, then working through
              tutorials, and eventually forcing myself to build things
              tutorials don't cover: authentication that actually has to be
              secure, databases that have to handle edge cases, and
              deployments that have to survive contact with the real world.
              TutorBooking, Mentora, and Wanderlust each pushed me a level
              deeper — from "it works on localhost" to "it works after I
              hand it off."
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              What I enjoy building
            </h3>
            <p className="mt-2 leading-relaxed">
              I like systems with real logic underneath — booking flows,
              role-based dashboards, anything with state that has to stay
              consistent (a slot that's booked shouldn't also look
              available). I care less about chasing every new framework and
              more about shipping something that still works six months
              later.
            </p>
          </div>
        </div>

        <div className="space-y-5 text-neutral-600 dark:text-neutral-400">
          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              Outside of code
            </h3>
            <p className="mt-2 leading-relaxed">
              I run a small home-textile business on the side (gamcha, sold
              directly through Facebook) and help manage a local study
              center — both of which have taught me as much about talking to
              real customers and solving real problems as any programming
              tutorial has. I'm also working on improving my spoken English,
              and I read Bengali literature and Islamic scholarship in my
              downtime.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              How I work
            </h3>
            <p className="mt-2 leading-relaxed">
              I'm based in Sirajganj, Bangladesh, and comfortable working
              fully remote. I like owning a problem end to end rather than
              just my slice of it — from a rough idea to something live with
              a working link.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        {[
          "Next.js",
          "Express.js",
          "MongoDB",
          "Better Auth",
          "Tailwind CSS",
          "DaisyUI",
          "HeroUI",
        ].map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}