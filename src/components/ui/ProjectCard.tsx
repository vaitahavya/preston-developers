import Image from "next/image";
import Link from "next/link";
import type { ProjectSlug } from "@/lib/content";
import { projectImage } from "@/lib/media";

type Props = {
  slug: ProjectSlug;
  name: string;
  tag: string;
  copy?: string;
  index?: number;
};

export function ProjectCard({ slug, name, tag, copy, index = 0 }: Props) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group grid gap-6 border-t border-[var(--line)] py-10 transition hover:border-t-[var(--brand-teal)]/40 md:grid-cols-12 md:items-center md:gap-10 md:py-14"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-[var(--bg-elevated)] md:col-span-5">
        <Image
          src={projectImage(slug)}
          alt={name}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 40vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/70 via-transparent to-transparent" />
      </div>
      <div className="md:col-span-7">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">
          {tag}
        </p>
        <h3 className="font-display mt-3 text-3xl font-semibold tracking-tight text-[var(--fg)] md:text-4xl">
          {name}
        </h3>
        {copy ? (
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--fg-muted)] md:text-base">
            {copy}
          </p>
        ) : null}
        <p className="mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--fg-muted)] transition group-hover:text-[var(--brand-teal)]">
          View project — {String(index + 1).padStart(2, "0")}
        </p>
      </div>
    </Link>
  );
}
