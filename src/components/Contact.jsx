import Link from "next/link";
import {
  ArrowUpRight,
  LogoGithub,
  LogoLinkedin,
  Briefcase,
} from "@gravity-ui/icons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

const EMAIL = "ahmedpervezkabir@gmail.com";

const socials = [
  {
    label: "GitHub",
    detail: "@pervezmia",
    href: "https://github.com/pervezmia",
    icon: LogoGithub,
  },
  {
    label: "LinkedIn",
    detail: "Connect with me",
    href: "https://linkedin.com/in/pervez-mia",
    icon: LogoLinkedin,
  },
  {
    label: "Fiverr",
    detail: "Hire me for a project",
    href: "https://www.fiverr.com/ahmedpervez23",
    icon: Briefcase,
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <h2 className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1 text-xs font-medium uppercase tracking-wide text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
        Contact
      </h2>

      <p className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
        Have a project in mind, or an opening on your team? I'd like to hear
        about it.
      </p>

      <p className="mt-5 max-w-2xl text-base text-neutral-600 dark:text-neutral-400">
        The fastest way to reach me is email — I usually reply within a day.
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${EMAIL}`}
          className="text-lg font-medium text-neutral-900 hover:underline dark:text-white"
        >
          {EMAIL}
        </a>
        <CopyEmailButton email={EMAIL} />
      </div>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {socials.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                <social.icon className="size-4.5" />
              </div>
              <ArrowUpRight className="size-4 text-neutral-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-neutral-900 dark:group-hover:text-white" />
            </div>

            <div>
              <p className="font-medium text-neutral-900 dark:text-white">
                {social.label}
              </p>
              <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                {social.detail}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
