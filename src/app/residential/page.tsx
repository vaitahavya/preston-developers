import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { residentialPage, home, type ProjectSlug } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Residential",
  description: residentialPage.hero.copy,
  path: "/residential",
});

export default function ResidentialPage() {
  const items = home.projects.items.filter((p) =>
    residentialPage.projects.includes(p.slug as "ivy" | "amari"),
  );

  return (
    <PageShell>
      <PageHero
        title={residentialPage.hero.headline}
        copy={residentialPage.hero.copy}
        image={prestonMedia.residential}
        imageAlt="Preston residential communities"
      />

      {/* Market Context */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading 
            title={residentialPage.marketContext.headline}
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {residentialPage.marketContext.data.map((dataPoint) => (
              <div 
                key={dataPoint}
                className="rounded border border-[var(--accent)]/20 bg-[var(--bg)]/60 p-4"
              >
                <p className="text-sm text-[var(--fg-muted)]">{dataPoint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="border-b border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={residentialPage.approach.headline} />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {residentialPage.approach.principles.map((principle) => (
              <article
                key={principle.title}
                className="border border-[var(--line)] p-6 md:p-8"
                data-reveal
              >
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  {principle.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {principle.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {items.map((item, i) => (
            <div key={item.slug} data-reveal>
              <ProjectCard
                slug={item.slug as ProjectSlug}
                name={item.name}
                tag={item.tag}
                copy={item.copy}
                index={i}
              />
              <div className="border-l-2 border-[var(--accent)] bg-[var(--bg-elevated)] px-6 py-4 text-sm text-[var(--fg-muted)]">
                <strong className="text-[var(--accent)]">Market Context:</strong> {item.marketContext}
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}