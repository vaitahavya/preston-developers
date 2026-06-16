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
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

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
          <div className="flex flex-col">
            <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fg)] md:text-base">
              Preston
            </span>
            <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[var(--accent)] hidden md:block">
              {site.tagline}
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {site.nav.map((item) => (
            'dropdown' in item && item.dropdown ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(item.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <button
                  type="button"
                  className={cn(
                    "flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.2em] transition hover:text-[var(--brand-teal)]",
                    (pathname.startsWith("/projects") && item.label === "Projects") ||
                    (pathname.startsWith("/insights") && item.label === "Insights") ||
                    (pathname.startsWith("/media") && item.label === "Insights")
                      ? "text-[var(--brand-teal)]"
                      : "text-[var(--fg-muted)]",
                  )}
                >
                  {item.label}
                  <svg 
                    className={cn("h-3 w-3 transition-transform duration-200", dropdownOpen === item.label ? "rotate-180" : "")} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div
                  className={cn(
                    "absolute left-0 top-full z-50 w-72 border border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-sm shadow-xl transition-all duration-200",
                    dropdownOpen === item.label ? "opacity-100 visible translate-y-2" : "opacity-0 invisible translate-y-0"
                  )}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.href}
                      href={subItem.href}
                      className="flex items-center justify-between border-b border-[var(--line)]/30 px-5 py-4 transition hover:bg-[var(--bg-elevated)] last:border-b-0"
                      onClick={() => setDropdownOpen(null)}
                    >
                      <span className="text-sm font-medium text-[var(--fg)] hover:text-[var(--brand-teal)]">
                        {subItem.label}
                      </span>
                      {subItem.tag && (
                        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--fg-muted)]">
                          {subItem.tag}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
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
            )
          ))}
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
          <ul className="space-y-5">
            {site.nav.map((item) => (
              <li key={item.href}>
                {'dropdown' in item && item.dropdown ? (
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--fg)] mb-3">
                      {item.label}
                    </p>
                    <ul className="space-y-3 pl-3">
                      {item.dropdown.map((subItem) => (
                        <li key={subItem.href}>
                          <Link
                            href={subItem.href}
                            className="block border-b border-[var(--line)]/20 pb-2 last:border-b-0"
                            onClick={() => setOpen(false)}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-[var(--fg-muted)]">{subItem.label}</span>
                              {subItem.tag && (
                                <span className="text-[9px] font-semibold uppercase tracking-[0.15em] text-[var(--brand-teal)]">
                                  {subItem.tag}
                                </span>
                              )}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-sm font-medium uppercase tracking-[0.18em] text-[var(--fg-muted)]"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
