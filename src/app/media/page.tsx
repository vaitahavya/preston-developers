import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { mediaPage } from "@/lib/content";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Media",
  description: mediaPage.hero.copy,
  path: "/media",
});

export default function MediaPage() {
  return (
    <PageShell>
      <PageHero title={mediaPage.hero.headline} copy={mediaPage.hero.copy} />
      
      {/* Media Categories */}
      {mediaPage.categories.map((category) => (
        <section key={category.title} className="border-b border-[var(--line)] py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div data-reveal>
              <SectionHeading 
                title={category.title} 
                subtitle={category.description}
              />
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {category.topics.map((topic) => (
                <article
                  key={topic}
                  className="border border-[var(--line)] bg-[var(--bg-elevated)] p-6 transition hover:border-[var(--accent)]/30"
                  data-reveal
                >
                  <h3 className="font-display text-base font-semibold text-[var(--fg)]">
                    {topic}
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </PageShell>
  );
}