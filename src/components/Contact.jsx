import Link from "next/link";
import {
  ArrowUpRight,
  LogoGithub,
  LogoLinkedin,
  Briefcase,
} from "@gravity-ui/icons";
import { CopyEmailButton } from "@/components/CopyEmailButton";

const EMAIL = "ahmedpervezkabir@gmail.com";
const PHONE_DISPLAY = "+880 1762-435084";
const PHONE_TEL = "+8801762435084";
const WHATSAPP_LINK = "https://wa.me/8801762435084";

// Inline icons — @gravity-ui/icons doesn't ship Phone/WhatsApp glyphs,
// so these avoid depending on a name that doesn't exist in the package.
function PhoneIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.5 1.34 5.02L2 22l5.12-1.34A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15c-1.6 0-3.16-.43-4.53-1.24l-.32-.19-3.04.8.81-2.96-.21-.3a8.15 8.15 0 0 1-1.25-4.36c0-4.51 3.67-8.18 8.19-8.18 4.51 0 8.18 3.67 8.18 8.18 0 4.51-3.67 8.25-8.83 8.25Zm4.48-6.13c-.25-.12-1.45-.71-1.67-.79-.22-.08-.39-.12-.55.12-.16.25-.63.79-.78.95-.14.16-.29.18-.53.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42-.14-.01-.31-.01-.47-.01-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.04 0 1.2.88 2.37 1 2.53.12.16 1.73 2.64 4.19 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.45-.59 1.65-1.16.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.47-.28Z" />
    </svg>
  );
}

function EmailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

// Direct-contact cards — same visual language as the social cards below
const contactCards = [
  {
    label: "Email",
    detail: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: EmailIcon,
    external: false,
    withCopy: true,
  },
  {
    label: "Phone",
    detail: PHONE_DISPLAY,
    href: `tel:${PHONE_TEL}`,
    icon: PhoneIcon,
    external: false,
  },
  {
    label: "WhatsApp",
    detail: "Message me",
    href: WHATSAPP_LINK,
    icon: WhatsAppIcon,
    external: true,
  },
];

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

      {/* Direct contact cards: Email, Phone, WhatsApp */}
      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {contactCards.map((item) => (
          <div
            key={item.label}
            className="group relative flex flex-col gap-4 rounded-2xl border border-neutral-200 p-5 transition hover:-translate-y-0.5 hover:border-neutral-400 hover:shadow-sm dark:border-neutral-800 dark:hover:border-neutral-600"
          >
            <a
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="absolute inset-0 rounded-2xl"
              aria-label={item.label}
            />

            <div className="flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
                <item.icon className="size-4.5" />
              </div>
              {item.withCopy && (
                <span className="relative z-10">
                  <CopyEmailButton email={EMAIL} />
                </span>
              )}
            </div>

            <div>
              <p className="font-medium text-neutral-900 dark:text-white">
                {item.label}
              </p>
              <p className="mt-1 truncate text-sm text-neutral-500 dark:text-neutral-400">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Social cards: GitHub, LinkedIn, Fiverr */}
      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
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