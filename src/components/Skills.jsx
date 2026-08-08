const skillGroups = [
  {
    category: "Frontend",
    skills: [
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "React.js / Next.js", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HeroUI / DaisyUI", level: 75 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js / Express.js", level: 80 },
      { name: "RESTful APIs", level: 80 },
      { name: "Better Auth (JWT)", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git / GitHub", level: 80 },
      { name: "Vercel", level: 80 },
      { name: "Postman / RapidAPI", level: 70 },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        Skills
      </h2>

      <p className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        What I build with.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {skillGroups.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <h3 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-500">
              {group.category}
            </h3>

            <div className="mt-5 space-y-4">
              {group.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-neutral-800 dark:text-neutral-200">
                      {skill.name}
                    </span>
                    <span className="text-neutral-400 dark:text-neutral-600">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-900">
                    <div
                      className="h-full rounded-full bg-neutral-900 dark:bg-white"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}