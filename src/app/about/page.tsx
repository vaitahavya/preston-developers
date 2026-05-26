import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutPage } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About",
  description: aboutPage.hero.copy,
  path: "/about",
});

export default function AboutPage() {
  return (
    <PageShell>
      <PageHero
        title={aboutPage.hero.headline}
        copy={aboutPage.hero.copy}
        image={prestonMedia.aboutBg}
        imageAlt="Preston Developers about"
      />
      
      {/* Philosophy Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={aboutPage.philosophy.headline} />
            <div className="mt-8 max-w-4xl space-y-6 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
              {aboutPage.philosophy.copy.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <article className="border border-[var(--line)] bg-[var(--bg)] p-8 md:p-10" data-reveal>
              <SectionHeading title={aboutPage.vision.headline} />
              <p className="mt-6 text-base leading-relaxed text-[var(--fg-muted)]">
                {aboutPage.vision.copy}
              </p>
            </article>
            <article className="border border-[var(--line)] bg-[var(--bg)] p-8 md:p-10" data-reveal>
              <SectionHeading title={aboutPage.mission.headline} />
              <p className="mt-6 text-base leading-relaxed text-[var(--fg-muted)]">
                {aboutPage.mission.copy}
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={aboutPage.values.headline} />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {aboutPage.values.items.map((value) => (
              <article
                key={value.title}
                className="border border-[var(--line)] p-6 md:p-8"
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
    </PageShell>
  );
}