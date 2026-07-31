"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function NavbarMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <Button
        variant="ghost"
        size="md"
        onPress={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <Xmark /> : <Bars />}
      </Button>

      {isOpen && (
        <div className="absolute left-0 right-0 top-full flex flex-col gap-1 border-b border-neutral-200 bg-white px-6 py-4 dark:border-neutral-800 dark:bg-neutral-950">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-3 py-2 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}