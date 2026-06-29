import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { home, type ProjectSlug } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Projects",
  description: home.projects.subtitle,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHero
        title={home.projects.title}
        subtitle="All Developments"
        copy={home.projects.subtitle}
        image={prestonMedia.projects.amari}
        imageAlt="Preston Developers projects across Hyderabad"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {home.projects.items.map((item, i) => (
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
