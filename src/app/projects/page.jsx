import Link from "next/link";
import { ArrowUpRight } from "@gravity-ui/icons";

const projects = [
  {
    slug: "tutorbooking",
    title: "TutorBooking",
    description:
      "A tutor booking platform where students can search, filter, and book tutors by subject and availability, with a full booking-management dashboard.",
    tags: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    live: "https://client-tutor-booking-system.vercel.app/",
    github: "https://github.com/pervezmia/client_tutor_booking_system",
  },
  {
    slug: "mentora",
    title: "Mentora",
    description:
      "An online course marketplace with separate instructor and student roles, course management, and enrollment — deployed and running on Vercel.",
    tags: ["Next.js", "Express.js", "MongoDB", "Better Auth"],
    live: "https://mentora-client-six.vercel.app/",
    github: "https://github.com/pervezmia/mentora-client",
  },
  {
    slug: "wanderlust",
    title: "Wanderlust",
    description:
      "A travel and destination booking app for browsing trips and reserving spots, built to explore booking flows outside the tutoring/course space.",
    tags: ["Next.js", "Express.js", "MongoDB"],
    live: "https://wanderlust-lilac-three.vercel.app/",
    github: "https://github.com/pervezmia/wanderlust",
  },
];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        Projects
      </h2>
      <p className="mt-4 text-2xl font-medium text-neutral-900 dark:text-white">
        A few things I have built end to end.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="group flex flex-col justify-between rounded-2xl border border-neutral-200 p-6 transition hover:border-neutral-400 dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                  {project.title}
                </h3>
                <ArrowUpRight className="size-4 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900 dark:group-hover:text-white" />
              </div>

              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </Link>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-4 flex gap-4 border-t border-neutral-100 pt-4 dark:border-neutral-800">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                Live site ↗
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}