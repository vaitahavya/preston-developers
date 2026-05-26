import type { Metadata } from "next";
import { site } from "./content";

type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export function createMetadata({ title, description, path }: PageMeta): Metadata {
  const fullTitle =
    title === site.name ? `${site.name} | Premium Real Estate Hyderabad` : `${title} | ${site.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...site.seo.keywords],
    alternates: { canonical: `${site.domain}${path}` },
    openGraph: {
      title: fullTitle,
      description,
      url: `${site.domain}${path}`,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.name,
    url: site.domain,
    email: site.email,
    telephone: site.phones[0],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.slice(0, 2).join(", "),
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
    areaServed: "Hyderabad",
    founder: {
      "@type": "Person",
      name: site.founder,
    },
  };
}

export function projectJsonLd(name: string, description: string, slug: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name,
    description,
    url: `${site.domain}/projects/${slug}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      addressCountry: "IN",
    },
  };
}
