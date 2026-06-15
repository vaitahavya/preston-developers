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
    coliseum: "/images/projects/collousium/Photo-Album-1---0179.webp",
    ivy: "/images/projects/preston-ivy/preston-ivy-4.webp",
    amari: "/images/preston/amari-banner.jpg",
  } satisfies Record<ProjectSlug, string>,
  
  // Preston Prime commercial images
  prime: {
    hero: "/images/preston/prime-pic1.jpg",
    exterior: "/images/projects/preston-prime/Photo-Album-1---0011.webp",
    interior: "/images/preston/commercial.jpg",
    lifestyle: "/images/preston/tnr-mall.jpg",
  },
  
  // Preston Coliseum commercial images  
  coliseum: {
    hero: "/images/projects/collousium/Photo-Album-1---0179.webp",
    exterior: "/images/projects/collousium/Photo-Album-1---0177.webp",
    interior: "/images/preston/commercial.jpg",
  },
  
  // Preston Amari villa community images
  amari: {
    // Hero and main images
    hero: "/images/preston/amari-banner.jpg",
    aerial: "/images/projects/amari/Photo-Album-1---0037.webp",
    villas: "/images/projects/house/preston-amari-house1.webp",
    
    // Clubhouse amenity images
    clubhouse: "/images/projects/amari/preston-amari-clubhouse46.webp",
    theater: "/images/preston/amari-theater.jpg",
    banquet: "/images/preston/amari-banquet.jpg",
    sports: "/images/preston/amari-sports.jpg",
    
    // Additional clubhouse facilities
    spa: "/images/projects/amari/preston-amari-clubhouse88.webp",
    gym: "/images/projects/amari/preston-amari-clubhouse75.webp",
    pool: "/images/projects/amari/preston-amari-clubhouse72.webp",
    entertainment: "/images/projects/amari/preston-amari-clubhouse83.webp",
    
    // Villa interiors and exteriors
    villaExterior: "/images/projects/house/preston-amari-house10.webp",
    villaInterior: "/images/projects/house/preston-amari-house21.webp",
    villaLiving: "/images/projects/house/preston-amari-house15.webp",
    villaKitchen: "/images/projects/house/preston-amari-house28.webp",
    
    // Community views
    community: "/images/projects/amari/Photo-Album-1---0069.webp",
    landscape: "/images/projects/amari/Photo-Album-1---0103.webp",
    entrance: "/images/projects/amari/Photo-Album-1---0106.webp",
  },
  
  // Preston Ivy premium villa images
  ivy: {
    // Hero and main images
    hero: "/images/projects/preston-ivy/preston-ivy-4.webp",
    exterior: "/images/preston/ivy-exterior.jpg",
    interior: "/images/preston/ivy-interior.jpg",
    
    // Premium features
    smartHome: "/images/projects/preston-ivy/preston-ivy-5.webp",
    clubhouse: "/images/preston/ivy-clubhouse.jpg",
    lifestyle: "/images/preston/ivy.jpg",
  },
} as const;

export function projectImage(slug: ProjectSlug): string {
  return prestonMedia.projects[slug];
}
