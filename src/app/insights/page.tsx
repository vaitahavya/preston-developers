import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { insightsPage } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Insights",
  description: insightsPage.hero.headline,
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <PageShell>
      <PageHero 
        title={insightsPage.hero.headline} 
        subtitle={insightsPage.hero.subtitle}
      />
      
      {/* Insights Topics */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title="Market Intelligence & Strategic Analysis" />
          </div>
          <div className="mt-12 space-y-8">
            {insightsPage.topics.map((topic) => (
              <article
                key={topic.title}
                className="border border-[var(--line)] bg-[var(--bg-elevated)] p-6 md:p-8 transition hover:border-[var(--accent)]/30"
                data-reveal
              >
                <h2 className="font-display text-xl font-semibold text-[var(--fg)] md:text-2xl">
                  {topic.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--fg-muted)]">
                  {topic.preview}
                </p>
                <div className="mt-4 inline-flex items-center text-sm font-medium text-[var(--accent)]">
                  Read Full Analysis →
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}