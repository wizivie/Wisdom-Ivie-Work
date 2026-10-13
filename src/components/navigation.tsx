"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const items = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Writing", href: "/writing" },
  { label: "CV", href: "/cv" },
  { label: "Contact", href: "/#contact" },
];

export function Navigation({ overDark = false }: { overDark?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const dark = overDark && !scrolled && !open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        dark
          ? "border-b border-transparent bg-transparent text-ink-text"
          : "border-b border-line bg-bg/90 text-text backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-page items-center justify-between px-5 md:px-8"
      >
        <Link href="/" className="font-serif text-2xl leading-none">
          {profile.name}
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {items.map((it) => (
            <li key={it.href}>
              <Link
                href={it.href}
                className={`text-sm transition-colors ${
                  dark ? "text-ink-muted hover:text-ink-text" : "text-text-muted hover:text-text"
                }`}
              >
                {it.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((o) => !o)}
          className="md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {open ? (
        <div
          id="mobile-nav"
          className="h-[calc(100dvh-4rem)] border-t border-line bg-bg md:hidden"
          onClick={() => setOpen(false)}
        >
          <ul className="mx-auto flex max-w-page flex-col px-5 py-2">
            {items.map((it) => (
              <li key={it.href} className="border-b border-line last:border-0">
                <Link href={it.href} className="block py-4 font-serif text-3xl">
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
