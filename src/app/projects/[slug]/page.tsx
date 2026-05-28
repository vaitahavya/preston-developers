import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { AmariProject } from "@/components/projects/AmariProject";
import { IvyProject } from "@/components/projects/IvyProject";
import { projectPages, type ProjectSlug } from "@/lib/content";
import { projectImage } from "@/lib/media";
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
      <PageHero
        title={project.name}
        subtitle={project.subtitle}
        image={projectImage(slug as ProjectSlug)}
        imageAlt={project.name}
        size="large"
      />

      {/* Specialized Project Content */}
      {slug === 'amari' ? (
        <AmariProject />
      ) : slug === 'ivy' ? (
        <IvyProject />
      ) : (
        <>
          {/* Market Positioning (if available) */}
          {"marketPositioning" in project && (
            <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-16">
              <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
                <SectionHeading title={project.marketPositioning.headline} />
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                  {project.marketPositioning.context}
                </p>
              </div>
            </section>
          )}

          {/* Main Content */}
          <section className="py-24 md:py-32">
            <div className="mx-auto grid max-w-[1400px] gap-16 px-5 md:grid-cols-12 md:px-10">
              <div className="space-y-6 md:col-span-7" data-reveal>
                {project.copy.map((p) => (
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

          {/* Lifestyle Section or CTA */}
          {"lifestyle" in project ? (
            <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
              <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
                <SectionHeading title={project.lifestyle.headline} align="center" />
                <div className="mt-10 flex justify-center">
                  <ButtonLink href={project.lifestyle.cta.href} label={project.lifestyle.cta.label} />
                </div>
              </div>
            </section>
          ) : (
            <section className="border-t border-[var(--line)] py-24 md:py-32">
              <div className="mx-auto flex max-w-[1400px] justify-center px-5 md:px-10" data-reveal>
                <ButtonLink href={cta.href} label={cta.label} />
              </div>
            </section>
          )}
        </>
      )}
    </PageShell>
  );
}