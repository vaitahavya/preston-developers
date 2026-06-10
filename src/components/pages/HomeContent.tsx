import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { home } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import type { ProjectSlug } from "@/lib/content";

function projectCopy(slug: string) {
  return home.projects.items.find((item) => item.slug === slug)?.copy ?? "";
}

export function HomeContent() {
  return (
    <>
      <PageHero
        title={home.hero.headline}
        tagline={home.hero.tagline}
        copy={home.hero.subheadline}
        image={prestonMedia.hero}
        imageAlt="Hyderabad skyline and Preston developments"
        ctas={home.hero.ctas.map((c) => ({ href: c.href, label: c.label }))}
        size="large"
      />

      {/* Hero Stats */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-12">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-3 gap-8 text-center">
            {home.hero.stats.map((stat) => (
              <div key={stat.label} data-reveal>
                <p className="font-display text-2xl font-semibold text-[var(--brand-teal)] md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Section */}
      <section className="border-b border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-10">
          <div className="relative aspect-[4/5] overflow-hidden md:col-span-5" data-reveal>
            <Image
              src={prestonMedia.aboutBg}
              alt="Preston Developers company headquarters and vision"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="md:col-span-7" data-reveal>
            <SectionHeading title={home.company.headline} />
            <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
              {home.company.copy.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              {home.company.ctas.map((c, i) => (
                <ButtonLink
                  key={c.href}
                  href={c.href}
                  label={c.label}
                  variant={i === 0 ? "primary" : "secondary"}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Positioning with Market Data */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={home.positioning.headline} align="center" />
            <div className="mx-auto mt-10 max-w-3xl space-y-5 text-center text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
              {home.positioning.copy.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          
          {/* Market Data Section */}
          <div className="mt-16" data-reveal>
            <SectionHeading 
              title={home.positioning.marketData.headline} 
              align="center"
              className="mx-auto"
            />
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {home.positioning.marketData.metrics.map((metric) => (
                <div
                  key={metric.title}
                  className="border border-[var(--line)] bg-[var(--bg)] p-6 md:p-8"
                >
                  <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                    {metric.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                    {metric.data}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section className="border-b border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading
              title={home.projects.title}
              subtitle={home.projects.subtitle}
            />
          </div>
          <div className="mt-12">
            {home.projects.items.map((item, i) => (
              <div key={item.slug} data-reveal>
                <ProjectCard
                  slug={item.slug as ProjectSlug}
                  name={item.name}
                  tag={item.tag}
                  copy={item.copy}
                  index={i}
                />
                {/* Market Context for each project */}
                <div className="border-l-2 border-[var(--brand-teal)] bg-[var(--bg-elevated)] px-6 py-4 text-sm text-[var(--fg-muted)]">
                  <strong className="text-[var(--brand-teal)]">Market Context:</strong> {item.marketContext}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12" data-reveal>
            <ButtonLink href={home.projects.cta.href} label={home.projects.cta.label} />
          </div>
        </div>
      </section>

      {/* Why Preston - Enhanced */}
      <section className="border-b border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading 
              title={home.whyPreston.headline} 
              subtitle={home.whyPreston.subtitle}
            />
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {home.whyPreston.features.map((f) => (
              <article
                key={f.title}
                className="border border-[var(--line)] bg-[var(--bg-elevated)] p-8 md:p-10"
                data-reveal
              >
                <h3 className="font-display text-xl font-semibold text-[var(--fg)]">
                  {f.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)] md:text-base">
                  {f.copy}
                </p>
                <div className="mt-4 rounded bg-[var(--bg)] px-4 py-3">
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--brand-teal)]">
                    {f.data}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section className="border-b border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading
              eyebrow="Residential"
              title={home.residential.headline}
              subtitle={home.residential.copy}
            />
            <div className="mt-6 rounded border border-[var(--accent)]/20 bg-[var(--accent)]/5 p-4">
              <p className="text-sm text-[var(--fg-muted)]">
                <strong className="text-[var(--accent)]">Market Intelligence:</strong> {home.residential.marketInsight}
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {home.residential.projects.map((p) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug as ProjectSlug}
                name={p.name}
                tag={p.tag}
                copy={projectCopy(p.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Section */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading
              eyebrow="Commercial"
              title={home.commercial.headline}
              subtitle={home.commercial.copy}
            />
            <div className="mt-6 rounded border border-[var(--accent)]/20 bg-[var(--bg)]/60 p-4">
              <p className="text-sm text-[var(--fg-muted)]">
                <strong className="text-[var(--accent)]">Market Intelligence:</strong> {home.commercial.marketInsight}
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {home.commercial.projects.map((p) => (
              <ProjectCard
                key={p.slug}
                slug={p.slug as ProjectSlug}
                name={p.name}
                tag={p.tag}
                copy={projectCopy(p.slug)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Hyderabad Growth Story - Enhanced */}
      <section className="relative min-h-[60vh] border-b border-[var(--line)] py-24 md:py-32">
        <Image
          src={prestonMedia.hyderabad}
          alt="Hyderabad urban growth"
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={home.hyderabad.headline} />
            <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
              <p>{home.hyderabad.copy}</p>
              {home.hyderabad.expandedNarrative.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
          
          {/* Growth Data */}
          <div className="mt-12 grid gap-4 md:grid-cols-4" data-reveal>
            <div className="rounded border border-[var(--brand-teal)]/30 bg-[var(--bg)]/90 p-4">
              <p className="text-sm font-medium text-[var(--brand-teal)]">{home.hyderabad.data.employment}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">Employment Base</p>
            </div>
            <div className="rounded border border-[var(--brand-teal)]/30 bg-[var(--bg)]/90 p-4">
              <p className="text-sm font-medium text-[var(--brand-teal)]">{home.hyderabad.data.infrastructure}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">Infrastructure Investment</p>
            </div>
            <div className="rounded border border-[var(--brand-teal)]/30 bg-[var(--bg)]/90 p-4">
              <p className="text-sm font-medium text-[var(--brand-teal)]">{home.hyderabad.data.growth}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">Real Estate Growth</p>
            </div>
            <div className="rounded border border-[var(--brand-teal)]/30 bg-[var(--bg)]/90 p-4">
              <p className="text-sm font-medium text-[var(--brand-teal)]">{home.hyderabad.data.corporate}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">Global Centres</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media & Vision - Enhanced */}
      <section className="border-b border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading title={home.media.headline} subtitle={home.media.copy} />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {home.media.topics.map((topic) => (
              <div
                key={topic}
                className="border border-[var(--line)] bg-[var(--bg-elevated)] px-6 py-5 transition hover:border-[var(--brand-teal)]/40"
              >
                <p className="text-sm text-[var(--fg-muted)]">{topic}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/media" label="Visit Media Center" variant="secondary" />
          </div>
        </div>
      </section>

      {/* Enhanced CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10" data-reveal>
          <SectionHeading 
            title={home.cta.headline} 
            subtitle={home.cta.subtitle}
            align="center" 
          />
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {home.cta.ctas.map((c, i) => (
              <ButtonLink
                key={c.href}
                href={c.href}
                label={c.label}
                variant={i === 0 ? "primary" : "secondary"}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}