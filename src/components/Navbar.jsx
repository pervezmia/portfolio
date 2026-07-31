import Link from "next/link";
import { NavbarMobileMenu } from "./NavbarMobileMenu";
import { ThemeSwitcher } from "./ThemeSwitcher";



const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-semibold tracking-tight">
          Pervez
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <ThemeSwitcher></ThemeSwitcher>
        </div>

        <NavbarMobileMenu></NavbarMobileMenu>
      </nav>
    </header>
  );
}