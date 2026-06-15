import Image from "next/image";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { HeroSlider } from "@/components/ui/HeroSlider";
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

      {/* Premium Projects Showcase */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              title="Our Portfolio in Focus"
              subtitle="Real project imagery showcasing completed developments across Hyderabad"
              align="center"
            />
          </div>
          <div className="mt-16" data-reveal>
            <HeroSlider
              images={[
                {
                  src: prestonMedia.amari.hero,
                  alt: "Preston Amari 45,000 sq ft clubhouse complex",
                  title: "Preston Amari Clubhouse",
                  subtitle: "45,000 SqFt Community Center"
                },
                {
                  src: prestonMedia.prime.hero,
                  alt: "Preston Prime commercial development in Gachibowli",
                  title: "Preston Prime Commercial",
                  subtitle: "Gachibowli Landmark"
                },
                {
                  src: prestonMedia.ivy.interior,
                  alt: "Preston Ivy luxury villa interior with Italian marble",
                  title: "Preston Ivy Premium Interiors",
                  subtitle: "Italian Marble & Smart Home"
                },
                {
                  src: prestonMedia.amari.theater,
                  alt: "Preston Amari multi-purpose theater with premium seating",
                  title: "Luxury Community Amenities",
                  subtitle: "Theater & Entertainment"
                },
                {
                  src: prestonMedia.amari.villaExterior,
                  alt: "Preston Amari G+1 villa architecture and landscaping",
                  title: "Premium Villa Living",
                  subtitle: "22-Acre Gated Community"
                }
              ]}
              autoPlay={true}
              interval={4000}
              className="max-w-6xl mx-auto"
            />
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

      {/* Villa Communities */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-48 md:py-64">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="BUILT BETTER"
              title="Premium Villa Communities"
              subtitle="Gated communities designed for elevated living in Hyderabad's growth corridors"
              align="center"
            />
          </div>
          <div className="mt-24 grid gap-16 md:grid-cols-2">
            {home.residential.projects.map((project) => (
              <div key={project.slug} className="group" data-reveal>
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg)]">
                  <Image
                    src={projectImage(project.slug)}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.02]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/90 to-transparent" />
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
                  <div className="mt-6">
                    <a 
                      href={`/projects/${project.slug}`}
                      className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--brand-teal)] transition hover:text-[var(--brand-teal-light)]"
                    >
                      Explore Villa Community →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Project Gallery Highlights */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              title="Built to Perfection"
              subtitle="Real imagery from our completed and ongoing developments"
              align="center"
            />
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4" data-reveal>
            <div className="group relative aspect-square overflow-hidden bg-[var(--bg-elevated)]">
              <Image
                src={prestonMedia.amari.banquet}
                alt="Preston Amari grand banquet hall"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Banquet Facilities</p>
              </div>
            </div>
            
            <div className="group relative aspect-square overflow-hidden bg-[var(--bg-elevated)]">
              <Image
                src={prestonMedia.ivy.interior}
                alt="Preston Ivy luxury villa interior"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Villa Interiors</p>
              </div>
            </div>
            
            <div className="group relative aspect-square overflow-hidden bg-[var(--bg-elevated)]">
              <Image
                src={prestonMedia.amari.sports}
                alt="Preston Amari professional sports facilities"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Sports Complex</p>
              </div>
            </div>
            
            <div className="group relative aspect-square overflow-hidden bg-[var(--bg-elevated)]">
              <Image
                src={prestonMedia.prime.hero}
                alt="Preston Prime commercial development"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.05]"
                sizes="(min-width: 768px) 25vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Commercial Hub</p>
              </div>
            </div>
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