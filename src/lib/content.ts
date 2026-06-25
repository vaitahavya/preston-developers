type NavItem = {
  href: string;
  label: string;
  tag?: string;
};

type NavItemWithDropdown = NavItem & {
  dropdown?: NavItem[];
};

export const site = {
  name: "Preston Developers",
  tagline: "BUILT BETTER",
  founder: "Randhir Reddy",
  domain: "https://prestondevelopers.com",
  email: "info@prestondevelopers.com",
  phones: ["+91 91007 77066", "+91 72070 86678"],
  address: [
    "2nd Floor, Preston Prime",
    "Gachibowli, Hyderabad",
    "Telangana - 500032",
  ],
  nav: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { 
      href: "/projects/prime", 
      label: "Projects",
      dropdown: [
        { href: "/projects/amari", label: "Preston Amari", tag: "Villa Community" },
        { href: "/projects/ivy", label: "Preston Ivy", tag: "Boutique Villas" },
        { href: "/projects/prime", label: "Preston Prime", tag: "Commercial" },
        { href: "/projects/coliseum", label: "Preston Coliseum", tag: "Mixed-Use" },
        { href: "/residential", label: "All Residential", tag: "Villas" },
        { href: "/commercial", label: "All Commercial", tag: "Retail & Office" },
      ]
    },
    { 
      href: "/insights", 
      label: "Insights",
      dropdown: [
        { href: "/insights", label: "Market Analysis", tag: "Research" },
        { href: "/media", label: "Media Center", tag: "News & Updates" },
      ]
    },
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
      "HITEC City real estate",
      "Financial District properties",
      "ORR corridor development",
      "Cyberabad real estate",
      "Telangana real estate investment",
    ],
  },
} as const;

export const home = {
  hero: {
    tagline: "BUILT BETTER",
    headline: "Hyderabad is Growing. Preston is Building What Comes Next.",
    subheadline:
      "Preston Developers creates landmark residential and commercial destinations designed for the future of Hyderabad — led by vision, driven by design, and built for long-term value in India's fastest-growing metropolitan economy.",
    ctas: [
      { href: "/projects/prime", label: "Explore Projects" },
      { href: "/about", label: "About Preston Developers" },
    ],
    stats: [
      { label: "Growth Corridors", value: "4+" },
      { label: "Years Experience", value: "25+" },
      { label: "Projects Pipeline", value: "₹2000+ Cr" },
    ],
  },
  company: {
    headline: "A New Generation of Real Estate Leadership",
    copy: [
      "Preston Developers has established itself as one of Hyderabad's most ambitious real estate brands — focused on creating landmark destinations across premium residential and commercial spaces that define the city's transformation into a global economic hub.",
      "With deep understanding of Hyderabad's evolution from a regional center to India's second-largest IT destination, hosting 200+ Global Capability Centres and driving 18-25% property appreciation across key corridors, Preston's strategy capitalizes on infrastructure-led growth patterns.",
      "As Telangana targets a $1 trillion economy by 2035 through massive infrastructure investments including the 340km Regional Ring Road, metro expansions, and AI City developments, Preston Developers is positioned to shape spaces that define what comes next.",
    ],
    ctas: [
      { href: "/about", label: "Learn About Preston" },
      { href: "/media", label: "Watch Vision Films" },
    ],
  },
  positioning: {
    headline: "Built Around Vision. Backed by Execution.",
    copy: [
      "Preston Developers combines strategic land acquisition in high-growth corridors, premium architectural design, and disciplined execution to create developments that capitalize on Hyderabad's structural transformation into India's most dynamic real estate market.",
      "From luxury gated villa communities in emerging ORR corridors to destination commercial developments in established IT zones, every Preston project leverages deep market intelligence, infrastructure timing, and location fundamentals that drive sustained value creation.",
    ],
    marketData: {
      headline: "Positioned in Hyderabad's Strongest Growth Engine",
      metrics: [
        {
          title: "Office Market Leadership",
          data: "3.15 MSF gross leasing in Q1 2026, with Grade A rents rising 11.6% YoY to ₹92.23/sqft",
        },
        {
          title: "Residential Momentum",
          data: "9,541 units launched Q1 2026, with West Zone capturing 65% driven by IT employment concentration",
        },
        {
          title: "Infrastructure Acceleration", 
          data: "₹50,000+ Cr committed to metro expansions, ORR upgrades, and Regional Ring Road development",
        },
        {
          title: "Corporate Expansion",
          data: "200+ Global Capability Centres established, with Madhapur vacancy at just 7.5% for premium assets",
        },
      ],
    },
  },
  projects: {
    title: "Landmark Projects Across Hyderabad's Growth Spine",
    subtitle:
      "Residential communities and commercial destinations strategically positioned within corridors driving 15-25% annual appreciation — from HITEC City's mature premium market to Kollur's emerging connectivity advantage.",
    cta: { href: "/projects/prime", label: "Explore All Projects" },
    items: [
      {
        slug: "prime",
        name: "Preston Prime",
        tag: "Commercial Destination",
        copy: "A next-generation retail and entertainment landmark positioned at the heart of Gachibowli's ₹12,500/sqft growth corridor — designed for maximum visibility, footfall optimization, and integration with Hyderabad's expanding IT and financial services ecosystem.",
        marketContext: "Gachibowli logged 12.1% 5-year CAGR, driven by Financial District expansion and continued IT campus development, with metro-walkable properties trading at 12-18% premiums.",
      },
      {
        slug: "coliseum",
        name: "Preston Coliseum",
        tag: "Commercial Landmark",
        copy: "A bold mixed-use commercial destination envisioned to redefine large-format retail and lifestyle experiences along Hyderabad's high-growth western urban corridor, positioned to capture spill-over demand from saturated core markets.",
        marketContext: "Strategic positioning leverages infrastructure investments including Metro Phase 2 alignments and planned Regional Ring Road extensions creating new accessibility patterns.",
      },
      {
        slug: "ivy",
        name: "Preston Ivy",
        tag: "Boutique Villa Community",
        copy: "A refined gated villa address designed around privacy, architectural excellence, and timeless residential living — positioned within Hyderabad's premium residential belt for families seeking elevated lifestyle experiences.",
        marketContext: "Targets the luxury segment driving ₹8,562 crore in FY26 transactions, with buyers seeking larger formats and premium community planning in established corridors.",
      },
      {
        slug: "amari",
        name: "Preston Amari",
        tag: "22-Acre Gated Community",
        copy: "A large-format villa development in Kollur combining spacious living, ORR connectivity, and future-ready community planning — strategically positioned along Exit 2 of the 158km growth spine connecting IT hubs, airport, and emerging employment centers.",
        marketContext: "Kollur offers 30-40 minute access to Financial District and Gachibowli while providing larger homes at comparative value, benefiting from upcoming metro extensions and Regional Ring Road development.",
      },
    ],
  },
  whyPreston: {
    headline: "Why Preston Leads in Hyderabad's Transformation",
    subtitle: "Four pillars of competitive advantage in India's most dynamic real estate market",
    features: [
      {
        title: "Strategic Growth Corridor Intelligence",
        copy: "Projects positioned within Hyderabad's highest-appreciation zones — from HITEC City's ₹13,200/sqft premium market to Kollur's emerging ORR advantage. Deep understanding of infrastructure timing, employment patterns, and demographic shifts driving 18-25% market appreciation.",
        data: "Positioned across 4 growth corridors with combined employment of 1M+ professionals",
      },
      {
        title: "Design-Led Development Philosophy",
        copy: "Modern architecture and intelligent master planning focused on user experience, operational efficiency, and long-term relevance. Every project designed to capitalize on Hyderabad's evolution toward global city standards and international lifestyle expectations.",
        data: "Award-winning architectural partnerships and sustainable development practices",
      },
      {
        title: "Premium Community Ecosystem Thinking",
        copy: "Integrated developments designed around lifestyle connectivity, social infrastructure, and community experiences that enhance long-term value. Focus on creating destinations rather than developments, building brand equity through resident satisfaction and market positioning.",
        data: "95%+ resident satisfaction scores across delivered projects",
      },
      {
        title: "Leadership-Driven Vision and Execution Discipline",
        copy: "Preston Developers combines 25+ years collective delivery experience with deep market intelligence and long-term strategic thinking. Disciplined capital allocation, construction excellence, and market timing expertise proven across multiple real estate cycles and growth phases.",
        data: "₹2000+ Cr project pipeline with zero delays in delivery commitments",
      },
    ],
  },
  residential: {
    headline: "Residential Communities Designed for Modern Hyderabad",
    copy: "Premium villa communities and large-format gated developments positioned across Hyderabad's strongest growth corridors — from boutique luxury addresses to expansive family-oriented townships designed around space, connectivity, and long-term lifestyle value.",
    marketInsight: "Hyderabad's residential market is witnessing unprecedented momentum with 9,541 unit launches in Q1 2026 alone, concentrated 65% in the western corridors where Preston's residential portfolio is strategically positioned.",
    projects: [
      { slug: "ivy", name: "Preston Ivy", tag: "Boutique Villa Community" },
      { slug: "amari", name: "Preston Amari", tag: "22-Acre Gated Community" },
    ],
  },
  commercial: {
    headline: "Commercial Destinations Built for Hyderabad's Economic Expansion",
    copy: "Premium retail, entertainment, and mixed-use environments positioned in strategic growth corridors — designed to capitalize on rising office rents (11.6% YoY growth), expanding corporate presence (200+ GCCs), and evolving lifestyle demands of Hyderabad's knowledge economy workforce.",
    marketInsight: "With Madhapur Grade A+ vacancy at just 4.8% and office rents reaching ₹92.23/sqft, commercial real estate demand is driving complementary retail and lifestyle development across the western IT corridor.",
    projects: [
      { slug: "prime", name: "Preston Prime", tag: "Commercial Destination" },
      { slug: "coliseum", name: "Preston Coliseum", tag: "Commercial Landmark" },
    ],
  },
  hyderabad: {
    headline: "Built for Hyderabad's Emergence as India's Next Global City",
    copy: "Hyderabad is witnessing unprecedented transformation — emerging as India's second-largest IT destination, home to 200+ Global Capability Centres, and the epicenter of infrastructure investments exceeding ₹50,000 crores. The city's strategic positioning as a technology and innovation hub, combined with pro-business policies and world-class connectivity infrastructure, is driving real estate appreciation of 18-25% across key corridors.",
    expandedNarrative: [
      "The Telangana government's vision of a $1 trillion economy by 2035 is backed by massive infrastructure commitments including the 340km Regional Ring Road project, comprehensive metro network expansions, and development of specialized economic zones including the AI City and Bharat Future City initiatives.",
      "Corporate India's expansion into Hyderabad continues accelerating, with major technology, financial services, and pharmaceutical companies establishing significant operations. This employment growth is creating sustained demand across residential and commercial real estate segments, particularly in the western growth corridor where Preston's projects are strategically positioned.",
      "Infrastructure development is unlocking new growth patterns — the 158km Outer Ring Road has transformed accessibility, while planned metro extensions and highway improvements are creating opportunities in emerging corridors like Kollur and strengthening established markets like Gachibowli and HITEC City.",
    ],
    data: {
      employment: "1M+ IT professionals across HITEC City, Gachibowli, and Financial District",
      infrastructure: "₹50,000+ Cr committed across metro, roads, and urban development",
      growth: "18-25% real estate appreciation in strategic corridors",
      corporate: "200+ Global Capability Centres with continued expansion",
    },
  },
  media: {
    headline: "Preston's Vision: Shaping Hyderabad's Future Landscape",
    copy: "Explore the latest insights, project announcements, leadership perspectives, and market intelligence from Preston Developers — positioning at the forefront of Hyderabad's transformation into a global real estate destination.",
    topics: [
      "Hyderabad's $1 Trillion Economy Vision: Real Estate Implications",
      "Why Strategic Location Intelligence Defines Premium Real Estate",
      "The Evolution of Luxury Community Living in Cyberabad",
      "Company Insights: Building for Hyderabad's Next Decade",
      "Commercial Real Estate: Capturing the GCC Expansion Wave",
      "Infrastructure-Led Growth: Understanding ORR Corridor Dynamics",
      "Sustainable Development: Preston's Environmental Leadership",
      "Investment Perspective: Timing Hyderabad's Growth Cycles",
    ],
  },
  cta: {
    headline: "Discover the Future of Hyderabad Living",
    subtitle: "Partner with Preston Developers to access Hyderabad's most strategic real estate opportunities — from luxury residential communities to landmark commercial destinations.",
    ctas: [
      { href: "/contact", label: "Schedule a Consultation" },
      { href: "/projects/prime", label: "Explore Projects" },
    ],
  },
} as const;

export const aboutPage = {
  hero: {
    headline: "Building the Next Generation of Hyderabad",
    copy: "Preston Developers is a Hyderabad-focused real estate brand creating premium residential and commercial destinations designed around long-term value, modern urban lifestyles, and strategic positioning within India's most dynamic metropolitan economy.",
  },
  philosophy: {
    headline: "Thoughtful Development Creates Lasting Value",
    copy: [
      "At Preston Developers, every project begins with deep market intelligence and strategic location analysis. Great development isn't accidental — it emerges from understanding Hyderabad's economic transformation, infrastructure development patterns, demographic shifts, and the evolving needs of a globally-connected workforce.",
      "Our approach combines comprehensive site selection within high-growth corridors, architectural excellence that enhances user experience, and construction discipline that delivers on promises. We build for the long term, focusing on projects that will remain relevant and valuable through multiple market cycles.",
      "This philosophy shapes every Preston development — from residential communities that anticipate future lifestyle needs to commercial destinations that serve Hyderabad's expanding knowledge economy. We don't just build structures; we create environments that contribute to the city's evolution while generating sustained returns for stakeholders.",
    ],
  },
  vision: {
    headline: "Our Vision",
    copy: "To establish Preston Developers as the definitive brand for premium real estate development in Hyderabad — creating landmark destinations that contribute to the city's transformation into a global urban center while setting new benchmarks for design, execution, and long-term value creation.",
  },
  mission: {
    headline: "Our Mission", 
    copy: "To build exceptional residential and commercial destinations through strategic location intelligence, architectural excellence, and disciplined execution — delivering superior experiences for residents, tenants, and investors while contributing to Hyderabad's emergence as India's most livable and economically dynamic metropolitan region.",
  },
  values: {
    headline: "Our Core Values",
    items: [
      {
        title: "Strategic Intelligence",
        copy: "Deep market research and location analysis drive every investment decision, ensuring projects are positioned for sustained appreciation and relevance.",
      },
      {
        title: "Design Excellence",
        copy: "Architectural innovation and user-centric planning create environments that enhance daily life while building long-term asset value.",
      },
      {
        title: "Execution Discipline",
        copy: "Rigorous project management, quality construction, and timeline adherence ensure promises made are promises delivered.",
      },
      {
        title: "Stakeholder Focus",
        copy: "Success measured through resident satisfaction, investor returns, and positive contribution to Hyderabad's urban development.",
      },
    ],
  },
} as const;

export const companyPage = {
  hero: {
    headline: "Preston Developers",
    subtitle: "Visionary leadership and strategic expertise driving Preston Developers' emergence as Hyderabad's next landmark real estate brand.",
  },
  story: [
    "Preston Developers represents a new generation of Indian real estate leadership — combining deep market intelligence with long-term strategic vision to establish itself as one of Hyderabad's most ambitious and disciplined development brands.",
    "With over two decades of collective experience across Hyderabad's real estate evolution — from the city's emergence as an IT destination through its current transformation into a global business hub — Preston Developers brings unique insight into the infrastructure, demographic, and economic patterns driving sustained property appreciation.",
    "The company focuses on strategic positioning within high-growth corridors, architectural excellence that enhances user experience, and construction discipline that builds market reputation. Their approach emphasizes quality over quantity, with each project designed to set new standards while generating superior returns for stakeholders.",
    "As Hyderabad evolves toward its $1 trillion economy vision through massive infrastructure investments and corporate expansion, Preston Developers' strategy positions the company to play a defining role in shaping the city's next landmarks — from premium residential communities to destination commercial developments that serve the needs of a globally-connected economy.",
  ],
  brandIdentity: {
    headline: "Vision. Intelligence. Execution.",
    subtitle: "Company philosophy built on strategic market insight, architectural excellence, and disciplined delivery.",
  },
  approach: {
    headline: "Our Development Approach",
    points: [
      {
        title: "Market Intelligence Leadership",
        copy: "Preston Developers maintains deep understanding of Hyderabad's growth patterns, infrastructure development cycles, and demographic evolution to drive strategic positioning decisions across all projects.",
      },
      {
        title: "Design-First Philosophy",
        copy: "The company's belief that exceptional architecture and thoughtful planning create environments that enhance daily life while building long-term asset value guides every development decision.",
      },
      {
        title: "Execution Excellence",
        copy: "Preston Developers' commitment to construction quality, timeline adherence, and stakeholder communication has built strong market reputation and established repeat business relationships.",
      },
      {
        title: "Long-Term Value Creation",
        copy: "The company focuses on projects that remain relevant and valuable through multiple market cycles, creating sustained returns for all stakeholders including residents, investors, and partners.",
      },
    ],
  },
  insights: {
    headline: "Company Insights & Market Intelligence",
    subtitle: "Deep perspectives on Hyderabad's real estate transformation and Preston's strategic positioning across key growth corridors.",
    topics: [
      "Hyderabad's Evolution: From IT Hub to Global Business Destination",
      "Strategic Location Intelligence: Why Geography Drives Real Estate Returns",
      "The Future of Premium Community Living in Indian Metropolitan Markets",
      "Infrastructure-Led Growth: Understanding Hyderabad's Next Development Phase",
      "Building for the Knowledge Economy: Commercial Real Estate Strategy",
      "Sustainable Development: Environmental Leadership in Real Estate",
      "Investment Perspective: Timing Market Cycles for Maximum Value Creation",
      "Preston's Vision: Creating Hyderabad's Next Landmark Destinations",
    ],
  },
} as const;

export const residentialPage = {
  hero: {
    headline: "Residential Communities Designed for Modern Hyderabad",
    copy: "Preston residential developments combine strategic location selection within high-appreciation corridors, architectural excellence, and comprehensive community planning to create environments that enhance daily living while building long-term asset value for discerning families and investors.",
  },
  marketContext: {
    headline: "Positioned Within Hyderabad's Strongest Residential Growth Engine",
    data: [
      "9,541 residential units launched in Q1 2026, with 65% concentrated in western corridors",
      "Capital values rising 3% YoY with premium corridors like Narsingi-Kokapet achieving 12% appreciation",
      "Strong demand for larger villa formats and integrated community living among knowledge economy professionals",
      "Metro Phase 2 and Regional Ring Road development unlocking new accessibility patterns",
    ],
  },
  approach: {
    headline: "Our Residential Development Philosophy",
    principles: [
      {
        title: "Strategic Corridor Positioning",
        copy: "Projects located within established and emerging growth corridors that benefit from infrastructure development, employment concentration, and demographic evolution patterns driving sustained appreciation.",
      },
      {
        title: "Architectural Excellence",
        copy: "Design partnerships with leading architectural firms create environments that blend contemporary aesthetics with functional efficiency, establishing distinctive project identities that enhance market positioning.",
      },
      {
        title: "Comprehensive Community Planning",
        copy: "Integrated development approach includes social infrastructure, recreational amenities, and lifestyle services that create complete living environments rather than standalone housing.",
      },
      {
        title: "Long-Term Value Engineering",
        copy: "Construction quality, material selection, and infrastructure planning focused on durability and relevance that protects and enhances asset values over time.",
      },
    ],
  },
  projects: ["ivy", "amari"] as const,
} as const;

export const commercialPage = {
  hero: {
    headline: "Commercial Destinations Built for Hyderabad's Economic Expansion",
    copy: "Preston commercial developments capitalize on Hyderabad's emergence as India's second-largest IT destination and home to 200+ Global Capability Centres — creating retail, entertainment, and mixed-use environments positioned within strategic growth corridors to serve the expanding knowledge economy workforce.",
  },
  marketContext: {
    headline: "Capturing Hyderabad's Commercial Real Estate Momentum",
    data: [
      "3.15 MSF gross office leasing in Q1 2026 with Grade A rents rising 11.6% YoY to ₹92.23/sqft",
      "Madhapur Grade A+ vacancy at just 4.8%, indicating strong demand for complementary retail and lifestyle services",
      "200+ Global Capability Centres driving expansion of high-income professional demographics",
      "IT-BPM leading demand at 36%, with BFSI sector growing to 23% of commercial leasing activity",
    ],
  },
  strategy: {
    headline: "Commercial Development Strategy",
    approach: [
      {
        title: "Employment-Centric Positioning",
        copy: "Located within or adjacent to major employment hubs to capture daily consumption patterns, lifestyle service demand, and entertainment spending of knowledge economy professionals.",
      },
      {
        title: "Mixed-Use Integration",
        copy: "Comprehensive developments that combine retail, dining, entertainment, and business services create destination appeal while diversifying revenue streams and tenant mix.",
      },
      {
        title: "Experience-Driven Design",
        copy: "Architecture and space planning focused on customer journey, operational efficiency, and tenant success — creating environments that drive footfall and commercial performance.",
      },
      {
        title: "Future-Ready Infrastructure",
        copy: "Technology integration, sustainability features, and flexible space configurations ensure long-term relevance as commercial real estate needs evolve.",
      },
    ],
  },
  projects: ["prime", "coliseum"] as const,
} as const;

// Project pages with expanded content
export const projectPages = {
  prime: {
    name: "Preston Prime",
    subtitle: "The New Commercial Landmark of West Hyderabad's Growth Corridor.",
    type: "commercial" as const,
    copy: [
      "Located at the epicenter of Gachibowli's transformation into Hyderabad's premier mixed-use district, Preston Prime represents a next-generation retail and entertainment destination designed to serve the expanding knowledge economy workforce across HITEC City, Financial District, and emerging corporate corridors.",
      "The project capitalizes on Gachibowli's strategic positioning within Hyderabad's highest-appreciation residential and commercial corridor — an area that has logged 12.1% five-year CAGR driven by Financial District expansion, continued IT campus development, and infrastructure investments including metro connectivity and ORR accessibility.",
      "Preston Prime integrates shopping, dining, entertainment, and lifestyle services into a comprehensive destination ecosystem that serves daily consumption patterns while creating evening and weekend entertainment appeal. The development leverages foot traffic from surrounding residential communities and office complexes to create sustainable commercial performance.",
      "Strategic location advantages include direct visibility from major arterial roads, metro-walkable positioning (properties within 1.5km of stations trade at 12-18% premiums), and integration with the broader western corridor that houses Microsoft, Amazon, Deloitte, and other major corporate anchors driving sustained demand for premium commercial services.",
    ],
    highlights: [
      "Prime Gachibowli location within 2km of Financial District",
      "High-visibility commercial frontage on major arterial road",
      "Comprehensive retail + dining + entertainment ecosystem",
      "Metro-walkable positioning with premium accessibility",
      "Surrounded by ₹12,500/sqft residential catchment",
      "Integration with established corporate and IT corridor",
      "Future-ready infrastructure and technology integration",
      "Flexible space configurations for diverse tenant mix",
    ],
    marketPositioning: {
      headline: "Positioned at the Heart of Hyderabad's Economic Engine",
      context: "Gachibowli represents the intersection of Hyderabad's residential and commercial growth — home to established IT campuses, emerging Financial District expansion, and premium residential communities driving sustained demand for lifestyle and retail services.",
    },
    lifestyle: {
      headline: "Designed Around Movement, Experience, and Community",
      cta: { href: "/contact", label: "Explore Commercial Opportunities" },
    },
  },
  coliseum: {
    name: "Preston Coliseum",
    subtitle: "A Landmark Mixed-Use Destination for Hyderabad's Urban Lifestyle Evolution.",
    type: "commercial" as const,
    copy: [
      "Preston Coliseum represents Preston Developers' vision for large-scale commercial environments designed to serve Hyderabad's rapidly evolving urban lifestyle ecosystem — a landmark mixed-use destination that integrates premium retail, entertainment, dining, business services, and community spaces within a high-energy metropolitan environment.",
      "Positioned to capitalize on spillover demand from saturated core markets like HITEC City and Gachibowli, Preston Coliseum leverages strategic location planning and contemporary architectural thinking to create a major lifestyle and commercial hub serving Hyderabad's expanding professional demographics and growing consumer sophistication.",
      "The development reflects broader market trends including the shift toward experiential retail, demand for integrated entertainment and dining destinations, and the need for flexible commercial spaces that can adapt to evolving business models and consumer preferences in a rapidly changing urban economy.",
      "With focus on accessibility, scale, visibility, and experiential design, Preston Coliseum embodies Preston's larger vision of building iconic destinations that contribute to Hyderabad's urban development while generating superior returns through strategic positioning and operational excellence.",
    ],
    highlights: [
      "Large-format mixed-use commercial destination",
      "Integrated retail, entertainment, and dining ecosystem",
      "Designed for high urban engagement and footfall generation",
      "Strategic growth corridor positioning with infrastructure access",
      "Future-ready mixed-use vision with flexible space planning",
      "Landmark architectural identity and destination appeal",
      "Technology-integrated operations and customer experience",
      "Comprehensive parking and accessibility infrastructure",
    ],
    marketPositioning: {
      headline: "Creating Hyderabad's Next Urban Lifestyle Destination",
      context: "Positioned to capture the growing demand for integrated commercial and entertainment experiences among Hyderabad's expanding professional workforce and increasingly sophisticated consumer demographics.",
    },
    cta: { href: "/contact", label: "Discover Preston Coliseum" },
  },
  ivy: {
    name: "Preston Ivy",
    subtitle: "Premium Villa Community with Italian Marble, Smart Home Technology & 15,000 SqFt Clubhouse",
    type: "residential" as const,
    copy: [
      "Preston Ivy represents sophisticated villa living with Italian marble flooring, wooden bedroom floors, and premium Villeroy & Boch fittings throughout. Each villa features smart home automation with B.ONE hub technology, VRF air conditioning, and comprehensive security systems including biometric locks and CCTV monitoring.",
      "The community centers around a magnificent 15,000 sq ft four-level clubhouse featuring a banquet hall for 150 guests, spa with massage rooms and jacuzzi, indoor games room, association office, and 4 guest bedrooms. The facility includes outdoor swimming pool with gender-specific changing rooms and dedicated kids play area.",
      "Built with earthquake-resistant RCC framework compliant with IS codes for Hyderabad's seismic zone, featuring 8-feet height teakwood doors, UPVC windows with mosquito mesh, and solar power integration. Every villa receives 10-12 KVA power supply with 100% DG backup and treated water through pneumatic systems.",
    ],
    specifications: {
      headline: "Premium Construction & Smart Home Features",
      flooring: [
        "Italian marble in foyer, drawing, living & dining areas",
        "Wooden flooring in bedrooms, living & home theater",
        "Premium Pamesa Ceramica tiles in toilets", 
        "Vitrified tiles in balconies and lobbies",
        "Granite/marble staircase with premium finishes",
      ],
      smartHome: [
        "B.ONE smart home automation hub (world's most powerful)",
        "Mobile app control for lights, AC, and security",
        "Video door bell with visitor monitoring",
        "Motion sensors and alarm system integration",
        "Media control (audio and video systems)",
        "Biometric lock system on main entrance",
      ],
      premiumFeatures: [
        "VRF air conditioning (Daikin/Mitsubishi compatible)",
        "Villeroy & Boch / Duravit sanitary fittings",
        "Teakwood frames with 8-feet height doors",
        "Granite kitchen countertops with premium sink",
        "Solar power street lights & water heating",
        "Schindler automatic passenger lifts",
      ]
    },
    clubhouseFeatures: {
      headline: "Four-Level 15,000 SqFt Clubhouse Complex",
      facilities: [
        {
          category: "Entertainment & Events",
          amenities: [
            "Grand banquet hall (100-150 guests capacity)",
            "Terrace floor for private mini parties",
            "Indoor games room (table tennis & snooker/billiards)",
            "Cards room for leisure activities",
            "Association office for community management",
          ]
        },
        {
          category: "Wellness & Spa",
          amenities: [
            "Mini spa with professional massage rooms",
            "Steam rooms for relaxation therapy",
            "Jacuzzi for luxury wellness experience",
            "Yoga and stretching area",
            "Gym with modern fitness equipment",
          ]
        },
        {
          category: "Hospitality & Services",
          amenities: [
            "4 fully-equipped guest bedrooms",
            "Outdoor swimming pool with premium deck",
            "Separate gender-specific changing rooms",
            "Children's dedicated play area",
            "Servant rooms for maintenance staff",
          ]
        }
      ]
    },
    highlights: [
      "Italian marble flooring with wooden bedrooms",
      "B.ONE smart home automation as standard",
      "15,000 sq ft four-level clubhouse complex",
      "Banquet hall for 150+ guests with full catering",
      "VRF air conditioning and 100% DG backup",
      "Premium Villeroy & Boch bathroom fittings",
      "Earthquake-resistant RCC structure (IS certified)",
      "Solar power integration and treated water systems",
    ],
    marketPositioning: {
      headline: "Hyderabad's Most Technologically Advanced Villa Community",
      context: "Preston Ivy combines traditional luxury (Italian marble, teakwood) with cutting-edge technology (smart home automation, VRF systems) to create Hyderabad's most sophisticated residential community for tech-savvy affluent families.",
      keyDifferentiators: [
        "Only community with B.ONE smart home automation standard",
        "Italian marble flooring throughout living areas",
        "Four-level clubhouse with banquet facilities",
        "Premium European bathroom fittings",
        "Solar-integrated sustainable living",
        "Earthquake-resistant certified construction",
      ]
    },
    cta: { href: "/contact", label: "Experience Smart Luxury Living" },
  },
  amari: {
    name: "Preston Amari",
    subtitle: "174 Premium Villas with Comprehensive 45,000 SqFt Clubhouse in Kollur's Growth Corridor",
    type: "residential" as const,
    copy: [
      "Preston Amari offers thoughtfully planned community living with 174 G+1 villas (3-4BHK with quarters) across 22 acres in Kollur's strategic ORR Exit 2 location. This well-designed development combines spacious villa living with a comprehensive 45,000 sq ft clubhouse featuring quality sports, wellness, and entertainment facilities.",
      "Designed for Hyderabad's growing professional community, Preston Amari offers residents extensive amenities including a dedicated pickleball court, multiple sports facilities, spa and wellness services, and entertainment options — all within a secure, gated environment perfect for family living.",
      "The strategic Kollur location provides optimal connectivity to Gachibowli (12 minutes), HITEC City (18 minutes), and the Financial District (35 minutes), while benefiting from upcoming metro connectivity and Regional Ring Road infrastructure investments that position this corridor as Hyderabad's next premium residential destination.",
    ],
    highlights: [
      "174 G+1 luxury villas (3-4BHK) with quarters on 22 acres",
        "45,000 sq ft comprehensive clubhouse with 15+ quality amenities",
        "Dedicated pickleball court with proper specifications",
      "Separate men's & women's spa with saloon, steam, sauna, massage",
      "Multi-purpose theater, banquet hall, and party lawn facilities",
      "Professional sports courts: Tennis, basketball, sand volleyball",
      "Strategic Kollur location with metro and RRR connectivity",
      "Premium construction with VRF AC, home automation, and luxury finishes",
    ],
    clubhouseFeatures: {
      headline: "Comprehensive Villa Community Clubhouse",
      facilities: [
        {
          category: "Sports & Recreation",
          icon: "🏓",
          amenities: [
            "Dedicated pickleball court",
            "Professional badminton court", 
            "2 squash courts (basement level)",
            "Tennis/basketball court",
            "Sand volleyball court",
            "Open-air gym",
          ]
        },
        {
          category: "Wellness & Spa",
          icon: "🧘",
          amenities: [
            "Separate men's & women's luxury spa",
            "Steam rooms & sauna facilities",
            "Professional massage therapy rooms",
            "Premium salon services",
            "Yoga & meditation room",
            "State-of-the-art fitness center",
          ]
        },
        {
          category: "Entertainment & Social",
          icon: "🎭",
          amenities: [
            "Multi-purpose theater with stadium seating",
            "Grand banquet hall (150+ capacity)",
            "Landscaped party lawn",
            "Indoor games room",
            "Cards & association room",
            "Ladies library & lounge",
          ]
        },
        {
          category: "Hospitality",
          icon: "🏨",
          amenities: [
            "3 fully-equipped guest bedrooms",
            "Swimming pool with changing rooms",
            "Underground parking (B1 level)",
            "Children's dedicated play area",
            "Community temple",
            "Professional concierge services",
          ]
        }
      ]
    },
    villaFeatures: {
      headline: "Premium Villa Specifications & Smart Home Integration",
      configurations: [
        "3BHK Villas: 2,400-2,800 sq ft + quarters",
        "4BHK Villas: 3,200-3,600 sq ft + quarters", 
        "G+1 structure with spacious layouts",
        "Private gardens and car parking",
      ],
      premiumFeatures: [
        "Italian marble flooring (ground level)",
        "Wooden flooring in bedrooms & living areas",
        "VRF air conditioning system (Daikin/Mitsubishi)",
        "Home automation with B.ONE smart hub",
        "Premium CP fittings (Villeroy & Boch)",
        "Teakwood doors with biometric locks",
        "Granite kitchen countertops with premium appliances",
        "100% DG backup with solar integration",
      ]
    },
    marketPositioning: {
      headline: "Kollur's Premier Villa Community with Unmatched Amenity Density",
      context: "Preston Amari delivers the highest amenity-per-villa ratio in Hyderabad's villa segment, combining luxury residential living with resort-style facilities in Kollur's rapidly appreciating ORR Exit 2 corridor — strategically positioned for Hyderabad's next growth phase.",
      keyDifferentiators: [
        "45,000 sq ft comprehensive clubhouse facility",
        "Dedicated pickleball court for community residents",
        "Comprehensive spa & wellness facilities",
        "Professional-grade sports infrastructure",
        "Premium location with metro connectivity",
        "Smart home integration as standard",
      ]
    },
    cta: { href: "/contact", label: "Book Your Villa Today" },
  },
} as const;

export type ProjectSlug = keyof typeof projectPages;

export const mediaPage = {
  hero: {
    headline: "Preston in the Spotlight: Insights, Analysis & Vision",
    copy: "Explore comprehensive market intelligence, leadership perspectives, project updates, and strategic insights from Preston Developers — positioned at the forefront of research and analysis driving Hyderabad's real estate transformation.",
  },
  categories: [
    {
      title: "Market Intelligence",
      description: "Data-driven analysis of Hyderabad's real estate trends, growth corridors, and investment opportunities",
      topics: [
        "Hyderabad Q1 2026 Market Analysis: Growth Corridor Performance",
        "ORR Exit Strategy: Understanding Infrastructure-Led Appreciation", 
        "Commercial Real Estate Momentum: GCC Expansion Impact Analysis",
        "Residential Market Dynamics: Supply, Demand & Price Trajectory",
      ],
    },
    {
      title: "Leadership Perspectives",
      description: "Strategic insights and vision from Preston Developers on real estate development and market evolution",
      topics: [
        "Building for Hyderabad's $1 Trillion Economy Vision",
        "Strategic Location Intelligence: The Foundation of Premium Development",
        "Architecture as Value Creation: Design Philosophy in Real Estate",
        "Long-Term Vision: Creating Landmarks That Define Cities",
      ],
    },
    {
      title: "Project Updates",
      description: "Latest developments, construction progress, and milestone achievements across Preston's portfolio",
      topics: [
        "Preston Prime: Construction Milestones & Commercial Leasing Progress",
        "Preston Amari: Community Development & Infrastructure Completion",
        "Preston Ivy: Architectural Excellence & Resident Experience Updates",
        "Preston Coliseum: Design Evolution & Market Positioning Strategy",
      ],
    },
    {
      title: "Industry Leadership",
      description: "Thought leadership on sustainable development, innovation, and real estate industry evolution",
      topics: [
        "Sustainable Development: Environmental Leadership in Real Estate",
        "Technology Integration: Smart Communities & Future-Ready Infrastructure",
        "Community Building: Social Infrastructure & Lifestyle Experience",
        "Investment Strategy: Risk Management & Value Creation in Real Estate",
      ],
    },
  ],
} as const;

export const insightsPage = {
  hero: {
    headline: "Deep Insights on Hyderabad Growth, Real Estate Evolution & Urban Development",
    subtitle: "Comprehensive analysis and strategic perspectives on market trends, infrastructure development, and investment opportunities shaping Hyderabad's transformation.",
  },
  topics: [
    {
      title: "Hyderabad's Economic Transformation: Real Estate Implications",
      preview: "Analysis of how the city's evolution toward a $1 trillion economy drives real estate demand, infrastructure investment, and development opportunities across residential and commercial segments.",
    },
    {
      title: "Why Kollur is Emerging as Hyderabad's Next High-Growth Corridor",
      preview: "Detailed examination of infrastructure development, connectivity improvements, and demographic patterns positioning Kollur for sustained real estate appreciation.",
    },
    {
      title: "Commercial Growth Corridors: Understanding the GCC Expansion Wave",
      preview: "Market intelligence on how 200+ Global Capability Centres are reshaping office demand, residential patterns, and commercial real estate opportunities across Hyderabad.",
    },
    {
      title: "Luxury Living Evolution: Premium Community Trends in Cyberabad",
      preview: "Analysis of changing preferences among high-net-worth families and the evolution of luxury residential development in Hyderabad's knowledge economy centers.",
    },
    {
      title: "Infrastructure-Led Growth: Decoding ORR Corridor Dynamics", 
      preview: "Strategic analysis of how the 158km Outer Ring Road is creating new development patterns and unlocking value across Hyderabad's peripheral growth areas.",
    },
    {
      title: "Investment Perspective: Timing Hyderabad's Real Estate Cycles",
      preview: "Market timing intelligence and strategic insights for investors seeking to capitalize on Hyderabad's sustained growth trajectory across multiple asset classes.",
    },
    {
      title: "Sustainable Development: Environmental Leadership in Real Estate",
      preview: "Examination of sustainable development practices, green building standards, and environmental considerations shaping the future of responsible real estate development.",
    },
    {
      title: "Urban Development Trends: Metro Impact on Property Values",
      preview: "Analysis of how metro network expansion, particularly Phase 2 development, is influencing property values, accessibility patterns, and development opportunities.",
    },
  ],
} as const;

export const contactPage = {
  hero: {
    headline: "Let's Build the Future of Hyderabad Together",
    copy: "Whether you're exploring premium residential opportunities, evaluating commercial real estate investments, or seeking strategic development partnerships, Preston Developers offers the market intelligence, execution expertise, and vision to create exceptional outcomes.",
  },
  services: {
    headline: "How We Can Help",
    offerings: [
      {
        title: "Residential Investment Consultation",
        description: "Strategic guidance on villa communities and luxury residential opportunities within Hyderabad's highest-appreciation corridors.",
      },
      {
        title: "Commercial Real Estate Advisory",
        description: "Market intelligence and investment analysis for retail, office, and mixed-use commercial properties across growth corridors.",
      },
      {
        title: "Development Partnership",
        description: "Joint venture and strategic partnership opportunities for land development and premium project execution.",
      },
      {
        title: "Market Intelligence Services",
        description: "Comprehensive research and analysis on Hyderabad's real estate trends, growth patterns, and investment opportunities.",
      },
    ],
  },
  ctas: [
    { href: "mailto:info@prestondevelopers.com", label: "Schedule a Strategic Consultation" },
    { href: "/contact#visit", label: "Book a Private Site Visit" },
    { href: "tel:+919100777066", label: "Speak With Our Investment Team" },
  ],
} as const;