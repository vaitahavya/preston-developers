import Link from "next/link";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
      <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div>
            <p className="font-display text-2xl font-semibold text-[var(--fg)]">
              {site.name}
            </p>
            <p className="text-[11px] font-bold uppercase tracking-[0.3em] text-[var(--accent)] mt-1">
              {site.tagline}
            </p>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--fg-muted)]">
            Preston is not just selling projects. Preston is shaping the future
            identity of Hyderabad.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {site.nav.slice(1).map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-[var(--fg-muted)] transition hover:text-[var(--brand-teal)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">
            Contact
          </p>
          <address className="mt-4 space-y-2 not-italic text-sm text-[var(--fg-muted)]">
            {site.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <a href={`mailto:${site.email}`} className="block pt-2 hover:text-[var(--accent)]">
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-[var(--line)] px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-[1400px] flex-col justify-between gap-3 text-[11px] text-[var(--fg-muted)] md:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Hyderabad · Premium residential & commercial development</p>
        </div>
      </div>
    </footer>
  );
}
