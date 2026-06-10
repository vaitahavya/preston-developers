import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { companyPage, aboutPage } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Preston Developers",
  description: companyPage.hero.subtitle,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title={companyPage.hero.headline}
        tagline="BUILT BETTER"
        subtitle={companyPage.hero.subtitle}
        image={prestonMedia.founder}
        imageAlt="Preston Developers company leadership and vision"
        size="large"
      />
      
      {/* Company Story */}
      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-10">
          <div className="relative aspect-[3/4] overflow-hidden md:col-span-5" data-reveal>
            <Image
              src={prestonMedia.founderOffice}
              alt="Preston Developers office and leadership team"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="space-y-6 md:col-span-7" data-reveal>
            {companyPage.story.map((p) => (
              <p key={p.slice(0, 48)} className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Company Philosophy */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading eyebrow="BUILT BETTER" title={aboutPage.philosophy.headline} />
            <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
              {aboutPage.philosophy.copy.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand Identity */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading 
            title={companyPage.brandIdentity.headline} 
            subtitle={companyPage.brandIdentity.subtitle}
            align="center" 
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <article className="border border-[var(--line)] bg-[var(--bg-elevated)] p-8 md:p-10" data-reveal>
              <SectionHeading title={aboutPage.vision.headline} />
              <p className="mt-6 text-base leading-relaxed text-[var(--fg-muted)]">
                {aboutPage.vision.copy}
              </p>
            </article>
            <article className="border border-[var(--line)] bg-[var(--bg-elevated)] p-8 md:p-10" data-reveal>
              <SectionHeading title={aboutPage.mission.headline} />
              <p className="mt-6 text-base leading-relaxed text-[var(--fg-muted)]">
                {aboutPage.mission.copy}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Company Approach */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={companyPage.approach.headline} />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {companyPage.approach.points.map((point) => (
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

      {/* Core Values */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={aboutPage.values.headline} />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {aboutPage.values.items.map((value) => (
              <article
                key={value.title}
                className="border border-[var(--line)] bg-[var(--bg)] p-6 md:p-8"
                data-reveal
              >
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  {value.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {value.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Company Insights */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading 
            title={companyPage.insights.headline} 
            subtitle={companyPage.insights.subtitle}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {companyPage.insights.topics.map((topic) => (
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