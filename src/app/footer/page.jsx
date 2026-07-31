import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { href: "https://github.com/pervezmia", label: "GitHub" },
  { href: "https://linkedin.com/in/pervez-mia", label: "LinkedIn" },
  { href: "https://www.fiverr.com/ahmedpervez23", label: "Fiverr" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Link
            href="/"
            className="font-semibold tracking-tight text-neutral-900 dark:text-white"
          >
            Pervez
          </Link>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            Full-stack developer, Bangladesh.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-8">
        <p className="text-xs text-neutral-400 dark:text-neutral-600">
          © {year} Pervez. All rights reserved.
        </p>
      </div>
    </footer>
  );
}