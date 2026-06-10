import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { home } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import type { ProjectSlug } from "@/lib/content";

function projectImage(slug: string): string {
  const projectMap = {
    prime: prestonMedia.projects.prime,
    coliseum: prestonMedia.projects.coliseum,
    ivy: prestonMedia.projects.ivy,
    amari: prestonMedia.projects.amari,
  };
  return projectMap[slug as keyof typeof projectMap] || prestonMedia.projects.prime;
}

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
        ctas={[{ href: "/projects", label: "Explore Projects" }]}
        size="large"
      />

      {/* Hero Stats - Improved Spacing */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-20">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-3 gap-12 text-center">
            {home.hero.stats.map((stat) => (
              <div key={stat.label} data-reveal>
                <p className="font-display text-3xl font-semibold text-[var(--brand-teal)] md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects - Only 2 Projects */}
      <section className="py-48 md:py-64">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              title="Featured Projects"
              subtitle="Landmark developments across Hyderabad's growth corridors"
              align="center"
            />
          </div>
          <div className="mt-24 grid gap-16 md:grid-cols-2">
            {home.projects.items.slice(0, 2).map((project) => (
              <div key={project.slug} className="group" data-reveal>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
                  <Image
                    src={projectImage(project.slug)}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent" />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">
                      {project.tag}
                    </p>
                    <h2 className="font-display mt-3 text-3xl font-semibold text-[var(--fg)] md:text-4xl">
                      {project.name}
                    </h2>
                  </div>
                </div>
                <div className="mt-8">
                  <p className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                    {projectCopy(project.slug)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Clear CTA */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10" data-reveal>
          <SectionHeading 
            title={home.cta.headline} 
            subtitle={home.cta.subtitle}
            align="center" 
          />
          <div className="mt-12">
            <ButtonLink
              href="/projects"
              label="Explore All Projects"
              variant="primary"
            />
          </div>
        </div>
      </section>
    </>
  );
}