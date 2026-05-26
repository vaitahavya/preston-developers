export const site = {
  name: "Preston Developers",
  founder: "Randhir Reddy",
  domain: "https://prestondevelopers.com",
  email: "info@prestondevelopers.com",
  phones: ["+91 91007 77066", "+91 72070 86678"],
  address: [
    "Plot no. 32, Lumbini Avenue",
    "Flat #401, Indra Prastha Building, 4th Floor",
    "Opp. CARE Hospital, Gachibowli",
    "Hyderabad, Telangana",
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/founder", label: "Founder" },
    { href: "/residential", label: "Residential" },
    { href: "/commercial", label: "Commercial" },
    { href: "/projects/prime", label: "Projects" },
    { href: "/media", label: "Media" },
    { href: "/insights", label: "Insights" },
    { href: "/contact", label: "Contact" },
  ],
  projectsNav: [
    { href: "/projects/prime", label: "Preston Prime" },
    { href: "/projects/coliseum", label: "Preston Coliseum" },
    { href: "/projects/ivy", label: "Preston Ivy" },
    { href: "/projects/amari", label: "Preston Amari" },
  ],
  seo: {
    keywords: [
      "Hyderabad real estate developer",
      "Premium developers Hyderabad",
      "Luxury villas Hyderabad",
      "Commercial spaces Hyderabad",
      "Luxury gated communities Hyderabad",
      "Kollur villas",
      "Gachibowli commercial property",
      "Premium real estate Hyderabad",
      "Hyderabad luxury living",
      "Future-ready developments Hyderabad",
    ],
  },
} as const;

export const home = {
  hero: {
    headline: "Hyderabad is Growing. Preston is Building What Comes Next.",
    subheadline:
      "Preston Developers creates landmark residential and commercial destinations designed for the future of Hyderabad — led by vision, driven by design, and built for long-term value.",
    ctas: [
      { href: "/projects/prime", label: "Explore Projects" },
      { href: "/founder", label: "Meet Randhir Reddy" },
    ],
  },
  founder: {
    headline: "A New Generation of Real Estate Leadership",
    copy: [
      "Randhir Reddy is building Preston Developers into one of Hyderabad’s most ambitious real estate brands — focused on creating landmark destinations across premium residential and commercial spaces.",
      "Driven by long-term vision, design-led thinking, and strategic development planning, Preston is shaping projects that reflect the scale, confidence, and future of modern Hyderabad.",
      "As the city evolves into a global urban destination, Preston Developers is focused on building spaces that define what comes next.",
    ],
    ctas: [
      { href: "/founder", label: "Read Founder Story" },
      { href: "/media", label: "Watch Vision Film" },
    ],
  },
  positioning: {
    headline: "Built Around Vision. Backed by Execution.",
    copy: [
      "Preston Developers combines strategic land thinking, premium design, modern planning, and execution excellence to create developments that stand apart in Hyderabad’s evolving real estate landscape.",
      "From luxury gated villa communities to destination commercial developments, every Preston project is designed around location strength, user experience, future growth, and lasting value creation.",
    ],
  },
  projects: {
    title: "Landmark Projects Across Hyderabad",
    subtitle:
      "Residential communities and commercial destinations designed to shape the next chapter of Hyderabad.",
    cta: { href: "/projects/prime", label: "Explore All Projects" },
    items: [
      {
        slug: "prime",
        name: "Preston Prime",
        tag: "Commercial Destination",
        copy: "A next-generation retail and entertainment landmark located in the heart of Gachibowli — designed for visibility, footfall, and modern urban experiences.",
      },
      {
        slug: "coliseum",
        name: "Preston Coliseum",
        tag: "Commercial Landmark",
        copy: "A bold new commercial destination envisioned to redefine large-format retail, entertainment, and lifestyle experiences in Hyderabad’s high-growth urban corridor.",
      },
      {
        slug: "ivy",
        name: "Preston Ivy",
        tag: "Boutique Villa Community",
        copy: "A refined gated villa address designed around privacy, architecture, elegance, and timeless residential living.",
      },
      {
        slug: "amari",
        name: "Preston Amari",
        tag: "22-Acre Gated Community",
        copy: "A large-format villa development in Kollur combining spacious living, connectivity, greenery, and future-ready community planning.",
      },
    ],
  },
  whyPreston: {
    headline: "Why Preston Leads",
    features: [
      {
        title: "Strategic Growth Corridors",
        copy: "Projects positioned within Hyderabad’s highest-potential development zones.",
      },
      {
        title: "Design-Led Development",
        copy: "Modern architecture and intelligent planning focused on experience and functionality.",
      },
      {
        title: "Premium Community Thinking",
        copy: "Spaces designed around lifestyle, connectivity, comfort, and long-term relevance.",
      },
      {
        title: "Founder-Led Vision",
        copy: "A brand driven by long-term ambition, execution discipline, and future-focused thinking.",
      },
    ],
  },
  residential: {
    headline: "Residential Communities for Modern Hyderabad",
    copy: "Boutique villa communities and large-format gated developments designed around space, planning, comfort, and long-term lifestyle value.",
    projects: [
      { slug: "ivy", name: "Preston Ivy", tag: "Boutique Villa Community" },
      { slug: "amari", name: "Preston Amari", tag: "22-Acre Gated Community" },
    ],
  },
  commercial: {
    headline: "Commercial Destinations Built for Growth",
    copy: "Premium retail, entertainment, and business environments in strategic growth corridors — designed for visibility, footfall, and urban energy.",
    projects: [
      { slug: "prime", name: "Preston Prime", tag: "Commercial Destination" },
      { slug: "coliseum", name: "Preston Coliseum", tag: "Commercial Landmark" },
    ],
  },
  hyderabad: {
    headline: "Built for Hyderabad’s Next Era",
    copy: "Hyderabad is rapidly emerging as one of India’s most dynamic urban economies — driven by technology, infrastructure, business growth, and global investment. Preston Developers is building for this transformation through premium residential communities and landmark commercial destinations located within the city’s strongest growth corridors.",
  },
  media: {
    headline: "Media & Vision",
    copy: "Explore the latest news, project announcements, founder insights, and development updates from Preston Developers.",
    topics: [
      "Future of Hyderabad Real Estate",
      "Why Location Defines Value",
      "How Premium Communities Are Evolving",
      "The Vision Behind Preston",
      "The Future of Commercial Spaces",
    ],
  },
  cta: {
    headline: "Discover the Future of Hyderabad Living",
    ctas: [
      { href: "/contact", label: "Schedule a Consultation" },
      { href: "/projects/prime", label: "Explore Projects" },
    ],
  },
} as const;

export const aboutPage = {
  hero: {
    headline: "Building the Next Generation of Hyderabad",
    copy: "Preston Developers is a Hyderabad-focused real estate brand creating premium residential and commercial destinations designed around long-term value, modern urban lifestyles, and future-ready development thinking.",
  },
  philosophy: {
    headline: "Thoughtful Development Creates Lasting Value",
    copy: [
      "At Preston Developers, every project begins with a simple principle: great development is never accidental.",
      "It comes from understanding location dynamics, planning intelligently, designing for human experience, and building with a long-term vision for the future.",
      "This philosophy shapes every Preston development across residential communities, retail destinations, and commercial spaces.",
    ],
  },
  vision: {
    headline: "Our Vision",
    copy: "To create landmark developments that contribute to Hyderabad’s growth while elevating how people live, work, and experience urban spaces.",
  },
  mission: {
    headline: "Our Mission",
    copy: "To build premium residential and commercial destinations defined by strategic planning, design excellence, and enduring value.",
  },
} as const;

export const founderPage = {
  hero: {
    headline: "Randhir Reddy",
    subtitle: "Founder-led vision shaping the future of Hyderabad real estate.",
  },
  story: [
    "Randhir Reddy represents a new generation of Hyderabad real estate leadership — focused on design, long-term value creation, strategic development, and future-ready urban growth.",
    "Under his leadership, Preston Developers is building premium residential communities and large-scale commercial destinations designed for the next era of Hyderabad.",
    "With a clear focus on quality, planning, architecture, and execution excellence, Randhir’s vision is centered around creating developments that stand apart not only today, but for decades to come.",
    "As Hyderabad evolves into a global city, Preston Developers aims to play a defining role in shaping its next landmarks.",
  ],
  personalBrand: {
    headline: "Vision. Scale. Execution.",
  },
  video: {
    headline: "Founder Insights",
    topics: [
      "Future of Hyderabad Real Estate",
      "Why Location Defines Value",
      "How Premium Communities Are Evolving",
      "The Vision Behind Preston",
      "The Future of Commercial Spaces",
    ],
  },
} as const;

export const residentialPage = {
  hero: {
    headline: "Residential Communities Designed for Modern Hyderabad",
    copy: "Preston residential developments are built around space, planning, comfort, connectivity, and long-term lifestyle value. From boutique villa communities to large-format gated developments, every project is designed to elevate modern living experiences.",
  },
  projects: ["ivy", "amari"] as const,
} as const;

export const commercialPage = {
  hero: {
    headline: "Commercial Destinations Built for Visibility and Growth",
    copy: "Preston commercial developments are designed to serve Hyderabad’s evolving urban economy through premium retail, entertainment, and business environments located in strategic growth corridors.",
  },
  projects: ["prime", "coliseum"] as const,
} as const;

export const projectPages = {
  prime: {
    name: "Preston Prime",
    subtitle: "The New Commercial Landmark of West Hyderabad.",
    type: "commercial" as const,
    copy: [
      "Located in the heart of Gachibowli, Preston Prime is envisioned as a next-generation retail and entertainment destination positioned within one of Hyderabad’s most dynamic urban growth corridors.",
      "Designed to integrate shopping, dining, entertainment, and high-visibility commercial experiences into one destination ecosystem, Preston Prime reflects Preston Developers’ vision for future-ready urban spaces.",
      "Its strategic location places it at the center of Hyderabad’s IT and business landscape — surrounded by HITEC City, Financial District, Kondapur, Madhapur, and premium residential catchments.",
      "With strong connectivity, modern planning, and destination-scale visibility, Preston Prime is positioned to become a defining commercial address in West Hyderabad.",
    ],
    highlights: [
      "Prime Gachibowli location",
      "High-visibility commercial frontage",
      "Retail + dining + entertainment ecosystem",
      "Strong surrounding catchment",
      "Modern urban commercial planning",
      "Excellent connectivity",
    ],
    lifestyle: {
      headline: "Designed Around Movement, Experience, and Visibility",
      cta: { href: "/contact", label: "Explore Commercial Opportunities" },
    },
  },
  coliseum: {
    name: "Preston Coliseum",
    subtitle: "A New Destination for Retail, Lifestyle, and Entertainment.",
    type: "commercial" as const,
    copy: [
      "Preston Coliseum represents Preston Developers’ ambition to create large-scale commercial environments designed for the future of Hyderabad’s urban lifestyle ecosystem.",
      "Envisioned as a landmark mixed-use commercial destination, Preston Coliseum is planned to bring together premium retail experiences, entertainment, dining, leisure, and modern consumer engagement within a high-energy urban environment.",
      "Driven by strategic location planning and contemporary architectural thinking, Preston Coliseum is positioned to become a major lifestyle and commercial destination serving Hyderabad’s rapidly expanding urban population.",
      "With a focus on accessibility, scale, visibility, and experiential design, the project reflects Preston’s larger vision of building iconic destinations that shape the city’s future.",
    ],
    highlights: [
      "Large-format commercial destination",
      "Retail and entertainment ecosystem",
      "Designed for high urban engagement",
      "Strategic growth corridor positioning",
      "Future-ready mixed-use vision",
      "Landmark architectural identity",
    ],
    cta: { href: "/contact", label: "Discover Preston Coliseum" },
  },
  ivy: {
    name: "Preston Ivy",
    subtitle: "A Boutique Villa Community Designed Around Elegance and Privacy.",
    type: "residential" as const,
    copy: [
      "Preston Ivy is a premium gated villa community created for families who value refined architecture, thoughtful planning, and timeless residential living.",
      "Designed as an intimate residential environment, Preston Ivy combines privacy, premium community planning, and elegant design language into a distinctive villa experience.",
      "Every aspect of the development is planned around comfort, openness, functionality, and a slower, more elevated lifestyle experience.",
      "The project reflects Preston Developers’ commitment to creating residential spaces that remain desirable, relevant, and valuable for years to come.",
    ],
    highlights: [
      "Boutique gated villa community",
      "Elegant architectural character",
      "Privacy-focused planning",
      "Premium lifestyle environment",
      "Timeless residential design",
    ],
    cta: { href: "/contact", label: "Schedule a Site Visit" },
  },
  amari: {
    name: "Preston Amari",
    subtitle: "Spacious Villa Living Connected to Hyderabad’s Future.",
    type: "residential" as const,
    copy: [
      "Spread across 22 acres in Kollur, Preston Amari is designed as a large-format gated villa community focused on spacious living, future connectivity, and elevated residential experiences.",
      "Positioned near the ORR and Hyderabad’s Financial District corridor, Preston Amari combines accessibility, greenery, planning efficiency, and community living into one integrated residential destination.",
      "The project is envisioned for families seeking larger living environments while remaining connected to the city’s expanding economic and lifestyle ecosystem.",
      "With expansive layouts, lifestyle amenities, and future-ready planning, Preston Amari reflects Preston Developers’ vision for modern community living in Hyderabad’s next major growth corridor.",
    ],
    highlights: [
      "22-acre gated villa development",
      "Large-format community planning",
      "Close to ORR and Financial District",
      "Lifestyle clubhouse amenities",
      "Spacious villa layouts",
      "Future-focused location",
    ],
    cta: { href: "/contact", label: "Schedule a Site Visit" },
  },
} as const;

export type ProjectSlug = keyof typeof projectPages;

export const mediaPage = {
  hero: {
    headline: "Preston in the Spotlight",
    copy: "Explore the latest news, project announcements, founder insights, development updates, and media features from Preston Developers.",
  },
} as const;

export const insightsPage = {
  hero: {
    headline: "Insights on Hyderabad Growth, Real Estate, and Urban Living",
  },
  topics: [
    "Future of Hyderabad Real Estate",
    "Why Kollur Is Emerging Fast",
    "Commercial Growth Corridors in Hyderabad",
    "Luxury Living Trends",
    "Founder Perspectives",
    "Urban Development Trends",
  ],
} as const;

export const contactPage = {
  hero: {
    headline: "Let’s Build the Future Together",
    copy: "Whether you are exploring a premium home, evaluating commercial opportunities, or looking to learn more about Preston Developers, our team is here to assist you.",
  },
  ctas: [
    { href: "mailto:info@prestondevelopers.com", label: "Schedule a Consultation" },
    { href: "/contact#visit", label: "Book a Site Visit" },
    { href: "tel:+919100777066", label: "Speak With Our Team" },
  ],
} as const;
