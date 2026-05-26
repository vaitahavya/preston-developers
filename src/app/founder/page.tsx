import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { founderPage } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Founder — Randhir Reddy",
  description: founderPage.hero.subtitle,
  path: "/founder",
});

export default function FounderPage() {
  return (
    <PageShell>
      <PageHero
        title={founderPage.hero.headline}
        subtitle={founderPage.hero.subtitle}
        image={prestonMedia.founder}
        imageAlt="Randhir Reddy, Founder of Preston Developers"
        size="large"
      />
      
      {/* Founder Story */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <div className="relative aspect-[3/4] overflow-hidden md:col-span-5" data-reveal>
            <Image
              src={prestonMedia.aboutBg}
              alt="Founder portrait environment"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="space-y-6 md:col-span-7" data-reveal>
            {founderPage.story.map((p) => (
              <p key={p.slice(0, 48)} className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Brand */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading 
            title={founderPage.personalBrand.headline} 
            subtitle={founderPage.personalBrand.subtitle}
            align="center" 
          />
        </div>
      </section>

      {/* Leadership Approach */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={founderPage.leadership.headline} />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {founderPage.leadership.points.map((point) => (
              <article
                key={point.title}
                className="border border-[var(--line)] bg-[var(--bg-elevated)] p-6 md:p-8"
                data-reveal
              >
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  {point.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {point.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Insights */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading 
            title={founderPage.video.headline} 
            subtitle={founderPage.video.subtitle}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {founderPage.video.topics.map((topic) => (
              <div 
                key={topic} 
                className="border border-[var(--line)] bg-[var(--bg-elevated)] px-6 py-5 text-sm text-[var(--fg-muted)]"
              >
                {topic}
              </div>
            ))}
          </div>
          <div className="mt-10">
            <ButtonLink href="/media" label="Watch Vision Films" />
          </div>
        </div>
      </section>
    </PageShell>
  );
}