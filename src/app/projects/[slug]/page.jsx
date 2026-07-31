import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "@gravity-ui/icons";
import { projects, getProject } from "@/lib/projects-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
      >
        <ArrowLeft className="size-4" />
        Back to projects
      </Link>

      <h1 className="mt-6 text-3xl font-semibold text-neutral-900 dark:text-white">
        {project.title}
      </h1>
      <p className="mt-2 text-lg text-neutral-600 dark:text-neutral-400">
        {project.tagline}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-4">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:underline dark:text-white"
        >
          Live site
          <ArrowUpRight className="size-3.5" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-neutral-900 hover:underline dark:text-white"
        >
          GitHub
          <ArrowUpRight className="size-3.5" />
        </a>
      </div>

      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          The problem
        </h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          {project.problem}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Key decisions
        </h2>
        <div className="mt-4 space-y-6">
          {project.decisions.map((decision) => (
            <div key={decision.title}>
              <h3 className="font-medium text-neutral-900 dark:text-white">
                {decision.title}
              </h3>
              <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                {decision.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          A challenge along the way
        </h2>
        <p className="mt-3 text-neutral-700 dark:text-neutral-300">
          {project.challenge}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-sm font-medium uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
          Stack
        </h2>
        <dl className="mt-4 space-y-2 text-sm">
          {Object.entries(project.stack).map(([key, value]) => (
            <div key={key} className="flex gap-2">
              <dt className="w-24 shrink-0 capitalize text-neutral-500 dark:text-neutral-400">
                {key}
              </dt>
              <dd className="text-neutral-700 dark:text-neutral-300">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </article>
  );
}