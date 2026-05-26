import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { commercialPage, home, type ProjectSlug } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Commercial",
  description: commercialPage.hero.copy,
  path: "/commercial",
});

export default function CommercialPage() {
  const items = home.projects.items.filter((p) =>
    commercialPage.projects.includes(p.slug as "prime" | "coliseum"),
  );

  return (
    <PageShell>
      <PageHero
        title={commercialPage.hero.headline}
        copy={commercialPage.hero.copy}
        image={prestonMedia.commercial}
        imageAlt="Preston commercial destinations"
      />
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {items.map((item, i) => (
            <ProjectCard
              key={item.slug}
              slug={item.slug as ProjectSlug}
              name={item.name}
              tag={item.tag}
              copy={item.copy}
              index={i}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}
