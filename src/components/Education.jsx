// Fill in your actual institution name, degree/group, and years below.
const education = [
  {
    level: "Higher Secondary Certificate (HSC)",
    institution: "R I M Degree College",
    detail: "Humanity",
    period: "2018-2020",
  },
  // Add another entry here if you have education above HSC, e.g.:
  {
    level: "B.A. in Political Science",
    institution: "Abdullah Al Mahmud Degree College",
    detail: "Ongoing",
    period: "2021-Present",
  },
];

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        Education
      </h2>

      <p className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        Academic background.
      </p>

      <div className="mt-10 space-y-4">
        {education.map((item) => (
          <div
            key={item.level}
            className="flex flex-col justify-between gap-2 rounded-2xl border border-neutral-200 p-6 sm:flex-row sm:items-center dark:border-neutral-800"
          >
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">
                {item.level}
              </p>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {item.institution} · {item.detail}
              </p>
            </div>
            <p className="shrink-0 text-sm text-neutral-500 dark:text-neutral-500">
              {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}