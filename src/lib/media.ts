import type { ProjectSlug } from "./content";

export const prestonMedia = {
  logo: "/images/preston/preston-dev-logo.png",
  hero: "/images/preston/Up.jpg",
  aboutBg: "/images/preston/about-bg.jpg",
  founder: "/images/preston/founder-hero.png",
  founderOffice: "/images/preston/founder-office.png",
  hyderabad: "/images/preston/Up.jpg",
  contact: "/images/preston/contact.png",
  commercial: "/images/preston/commercial.jpg",
  residential: "/images/preston/residential.jpg",
  projects: {
    prime: "/images/preston/prime-pic1.jpg",
    coliseum: "/images/preston/tnr-mall.jpg",
    ivy: "/images/preston/ivy.jpg",
    amari: "/images/preston/amari-banner.jpg",
  } satisfies Record<ProjectSlug, string>,
} as const;

export function projectImage(slug: ProjectSlug): string {
  return prestonMedia.projects[slug];
}
