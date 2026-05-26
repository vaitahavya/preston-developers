"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src={prestonMedia.logo}
            alt="Preston Developers"
            width={36}
            height={36}
            className="h-8 w-8 object-contain brightness-0 invert"
            priority
          />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fg)] md:text-base">
            Preston
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {site.nav.map((item) =>
            item.label === "Projects" ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setProjectsOpen(true)}
                onMouseLeave={() => setProjectsOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:text-[var(--brand-teal)]",
                    pathname.startsWith("/projects")
                      ? "text-[var(--brand-teal)]"
                      : "text-[var(--fg-muted)]",
                  )}
                >
                  Projects
                </button>
                {projectsOpen ? (
                  <div className="absolute left-0 top-full min-w-[220px] border border-[var(--line)] bg-[var(--bg-elevated)] py-3 shadow-2xl">
                    {site.projectsNav.map((p) => (
                      <Link
                        key={p.href}
                        href={p.href}
                        className="block px-5 py-2.5 text-sm text-[var(--fg-muted)] transition hover:bg-[var(--bg)] hover:text-[var(--brand-teal)]"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:text-[var(--brand-teal)]",
                  pathname === item.href ? "text-[var(--brand-teal)]" : "text-[var(--fg-muted)]",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/contact"
          className="hidden border border-[var(--brand-teal)] px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)] transition hover:bg-[var(--brand-teal)] hover:text-[var(--bg)] lg:inline-flex"
        >
          Consult
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--fg)] lg:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open ? (
        <nav className="border-t border-[var(--line)] bg-[var(--bg)] px-5 py-6 lg:hidden">
          <ul className="space-y-4">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block text-sm font-medium uppercase tracking-[0.18em] text-[var(--fg-muted)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {site.projectsNav.map((p) => (
              <li key={p.href} className="pl-4">
                <Link
                  href={p.href}
                  className="block text-sm text-[var(--fg-muted)]"
                  onClick={() => setOpen(false)}
                >
                  {p.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
