import { notFound } from "next/navigation";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { EnhancedAmariProject } from "@/components/projects/EnhancedAmariProject";
import { EnhancedIvyProject } from "@/components/projects/EnhancedIvyProject";
import { projectPages, type ProjectSlug } from "@/lib/content";
import { projectImage } from "@/lib/media";
import { projectMedia } from "@/lib/project-media";
import { createMetadata, projectJsonLd } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(projectPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projectPages[slug as ProjectSlug];
  if (!project) return {};
  return createMetadata({
    title: project.name,
    description: project.copy[0],
    path: `/projects/${slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectPages[slug as ProjectSlug];
  if (!project) notFound();

  const cta =
    "lifestyle" in project
      ? project.lifestyle.cta
      : "cta" in project
        ? project.cta
        : { href: "/contact", label: "Contact Preston" };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectJsonLd(project.name, project.copy[0], slug)),
        }}
      />

      {/* Specialized Project Content */}
      {slug === 'amari' ? (
        <EnhancedAmariProject />
      ) : slug === 'ivy' ? (
        <EnhancedIvyProject />
      ) : (
        <>
          {/* Project Title and Overview */}
          <section className="relative py-32 md:py-48 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src={projectImage(slug as ProjectSlug)}
                alt={`${project.name} background`}
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-[var(--bg)]/75" />
            </div>
            
            <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
              {/* Title Section */}
              <div className="text-center mb-16" data-reveal>
                {project.subtitle && (
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">{project.subtitle}</p>
                )}
                <h1 className="font-display mt-4 text-4xl font-semibold text-[var(--fg)] md:text-6xl lg:text-7xl">
                  {project.name}
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl">
                  {project.copy[0]}
                </p>
              </div>

              {/* Call to Action Buttons */}
              <div className="flex flex-wrap justify-center gap-4" data-reveal>
                {"lifestyle" in project ? (
                  <ButtonLink href={project.lifestyle.cta.href} label={project.lifestyle.cta.label} variant="primary" />
                ) : (
                  <ButtonLink href={cta.href} label={cta.label} variant="primary" />
                )}
                <ButtonLink href="/contact" label="Get in Touch" variant="secondary" />
              </div>
            </div>
          </section>

          {/* Market Positioning (if available) */}
          {"marketPositioning" in project && (
            <section className="border-t border-[var(--line)] py-24 md:py-32">
              <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
                <SectionHeading title={project.marketPositioning.headline} align="center" />
                <p className="mt-6 max-w-3xl mx-auto text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                  {project.marketPositioning.context}
                </p>
              </div>
            </section>
          )}

          {/* Main Content */}
          <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
            <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-10">
              <div className="space-y-6 md:col-span-7" data-reveal>
                {project.copy.slice(1).map((p) => (
                  <p key={p.slice(0, 48)} className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
              <aside className="md:col-span-5" data-reveal>
                <SectionHeading title="Project Highlights" />
                <ul className="mt-6 space-y-3">
                  {project.highlights.map((h) => (
                    <li key={h} className="border-l-2 border-[var(--accent)] pl-4 text-sm text-[var(--fg-muted)]">
                      {h}
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </section>

          {/* Commercial Project Gallery */}
          {(slug === "prime" || slug === "coliseum") && (
            <section className="border-t border-[var(--line)] py-24 md:py-32">
              <div className="mx-auto max-w-[1400px] px-5 md:px-10">
                <div className="text-center" data-reveal>
                  <SectionHeading title="Project Gallery" align="center" />
                </div>
                {slug === "prime" ? (
                  <div className="mt-12 mx-auto max-w-4xl" data-reveal>
                    <div className="relative aspect-[16/10] overflow-hidden group">
                      <Image
                        src={projectMedia.prime.exterior}
                        alt={`${project.name} - Mall Elevation`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                        sizes="(min-width: 768px) 896px, 100vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-4 left-4">
                        <p className="text-sm font-semibold text-[var(--brand-teal)]">Mall Elevation</p>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="mt-12 grid gap-6 md:grid-cols-2" data-reveal>
                    {[
                      { src: projectMedia.coliseum.exterior, label: "Mall Elevation" },
                      { src: projectMedia.coliseum.interior, label: "Mall Interior" },
                    ].map((img) => (
                      <div key={img.src} className="relative aspect-[16/10] overflow-hidden group">
                        <Image
                          src={img.src}
                          alt={`${project.name} - ${img.label}`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.02]"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 left-4">
                          <p className="text-sm font-semibold text-[var(--brand-teal)]">{img.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </section>
          )}
        </>
      )}
    </PageShell>
  );
}