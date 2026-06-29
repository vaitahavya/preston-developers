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
    prime: "/images/preston images/preston prime mall elivation.png",
    coliseum: "/images/preston images/coliseummall elivation.png", 
    ivy: "/images/preston images/ivy.png",
    amari: "/images/preston images/preston amari view.png",
  } satisfies Record<ProjectSlug, string>,
  
  // Preston Prime commercial images
  prime: {
    hero: "/images/preston images/preston prime mall elivation.png",
    exterior: "/images/preston images/preston prime mall elivation 2.png",
    interior: "/images/preston images/collosium mall interior.png",
    lifestyle: "/images/preston/tnr-mall.jpg",
  },
  
  // Preston Coliseum commercial images  
  coliseum: {
    hero: "/images/preston images/coliseummall elivation.png",
    exterior: "/images/preston images/coliseummall elivation.png",
    interior: "/images/preston images/collosium mall interior.png",
  },
  
  // Preston Amari villa community images - Updated with new project images
  amari: {
    // Hero and main images
    hero: "/images/preston images/preston amari view.png",
    streetView: "/images/preston images/amari street.png",
    nightView: "/images/preston images/amari night view street.png",
    streetView2: "/images/preston images/amari street2.png",
    
    // Sports and recreation facilities
    basketballTennis: "/images/preston images/amari basketball and tennis court.png",
    
    // Confirmed Amari amenities
    clubhouseHero: "/images/projects/amari-clubhouse-hero.png",
    banquetHall: "/images/preston images/banquithall amari.png",
    library: "/images/preston images/amari library.png",
    saloonMain: "/images/preston images/amari saloon.JPG",
    saloonClubhouse: "/images/preston images/amari saloon in clubhouse.png",
    
    // Villa architecture
    villaElevation: "/images/preston images/preston amari villa elivation .png",
  },
  
  // Preston Ivy premium villa images
  ivy: {
    // Hero and main images
    hero: "/images/preston images/ivy.png",
    villa1: "/images/preston images/ivy1.png",
    villa2: "/images/preston images/ivy2.png",
    villa3: "/images/preston images/ivy3.png",
    villa4: "/images/preston images/ivy4.png",
    villaMain: "/images/preston images/prestonivy villa.png",
    elevation: "/images/preston images/prestonivyvilla elivation.png",
    
    // Premium features
    interior: "/images/preston images/kitchen.png",
    smartHome: "/images/preston images/kitchen.png",
    clubhouse: "/images/preston images/clubhouse.png",
    lifestyle: "/images/preston/ivy.jpg",
  },
} as const;

export function projectImage(slug: ProjectSlug): string {
  return prestonMedia.projects[slug];
}
