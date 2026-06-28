// Preston Developers Project Media Library
// Organized by project with ACCURACY-VERIFIED categorization

export const projectMedia = {
  // Amari Villa Community Project - ONLY CONFIRMED AMARI IMAGES
  amari: {
    // CONFIRMED Amari Images (11 images with "amari" in filename)
    hero: "/images/preston images/preston amari view.png", 
    aerialView: "/images/preston images/preston amari_01_03_41_21 2.png",
    streetView: "/images/preston images/amari street.png",
    nightView: "/images/preston images/amari night view street.png",
    streetView2: "/images/preston images/amari street2.png",
    villaElevation: "/images/preston images/preston amari villa elivation .png",
    
    // CONFIRMED Amari Amenities
    basketballTennis: "/images/preston images/amari basketball and tennis court.png", // CONFIRMED Amari
    banquetHall: "/images/preston images/banquithall amari.png", // CONFIRMED Amari
    library: "/images/preston images/amari library.png", // CONFIRMED Amari
    saloonMain: "/images/preston images/amari saloon.JPG", // CONFIRMED Amari  
    saloonClubhouse: "/images/preston images/amari saloon in clubhouse.png", // CONFIRMED Amari
    
    // Pool Hero (User provided specifically for Amari)
    clubhouseHero: "/images/projects/amari-clubhouse-hero.png", // User confirmed for Amari
  },

  // Ivy Premium Villas - CONFIRMED IVY IMAGES (8 images)
  ivy: {
    hero: "/images/preston images/ivy.png",
    villa1: "/images/preston images/ivy1.png",
    villa2: "/images/preston images/ivy2.png", 
    villa3: "/images/preston images/ivy3.png",
    villa4: "/images/preston images/ivy4.png",
    villaMain: "/images/preston images/prestonivy villa.png",
    elevation: "/images/preston images/prestonivyvilla elivation.png",
    masterView: "/images/preston images/prestonivy.png",
  },

  // Prime Commercial Development - CONFIRMED PRIME IMAGES
  prime: {
    exterior: "/images/preston images/preston prime mall elivation.png",
    exterior2: "/images/preston images/preston prime mall elivation 2.png",
  },

  // Coliseum Mixed-Use Development - CONFIRMED COLISEUM IMAGES
  coliseum: {
    exterior: "/images/preston images/coliseummall elivation.png",
    interior: "/images/preston images/collosium mall interior.png",
  },

  // SHARED/REPRESENTATIVE Amenities - Generic images for reference
  // NOTE: These are NOT project-specific, use with appropriate disclaimers
  shared: {
    // Sports Facilities (Representative)
    pickleball: "/images/preston images/Pickleball Court.png",
    badminton: "/images/preston images/batminton court.png",
    sandVolleyball: "/images/preston images/sand vollyball.png",
    tennisOutdoor: "/images/preston images/tenniscourt.png",
    tennisIndoor: "/images/preston images/tenniscourtindoor.png",
    
    // Clubhouse Facilities (Representative)
    clubhouse: "/images/preston images/clubhouse.png",
    clubhouse2: "/images/preston images/clubhouse1.png",
    childrenPark: "/images/preston images/children park.png",
    childrenPlayArea: "/images/preston images/childrens play area.png",
    
    // Wellness (Representative)
    gym: "/images/preston images/gym.jpg",
    gymWide: "/images/preston images/gym wide view.JPG", // Main gym image
    gymWide2: "/images/preston images/gymwide.JPG", // Alternative gym view
    yogaRoom: "/images/preston images/yogaroom.JPG",
    
    // Entertainment (Representative)  
    movieRoom: "/images/preston images/movie room.png",
    movieRoom2: "/images/preston images/movieroom.png", // Alternative
    gameRoom: "/images/preston images/game room .jpg",
    indoorGames1: "/images/preston images/indoorgame1.png",
    indoorGames2: "/images/preston images/indoorgames.png",
    indoorGames3: "/images/preston images/indoorgames2.png",
    
    // Villa Interiors (Representative)
    livingRoom: "/images/preston images/villa living room .png",
    bedroom1: "/images/preston images/villa bedroom1.png",
    bedroom2: "/images/preston images/villa bedroom 2.png",
    kitchen: "/images/preston images/kitchen.png",
    villaExterior: "/images/preston images/villa elivation.png",
    
    // General
    streetView: "/images/preston images/street view day.png",
    communityPhoto: "/images/preston images/Photo Album 1 - 0167.jpg",
  }
} as const;

// Category-based access - ACCURACY VERIFIED
export const mediaByCategory = {
  // Project Heroes (Confirmed)
  hero: [
    projectMedia.amari.hero,
    projectMedia.amari.aerialView,
    projectMedia.ivy.hero,
    projectMedia.prime.exterior,
    projectMedia.coliseum.exterior,
  ],
  
  // Confirmed Amari Assets ONLY
  amariConfirmed: [
    projectMedia.amari.hero,
    projectMedia.amari.aerialView,
    projectMedia.amari.streetView,
    projectMedia.amari.nightView,
    projectMedia.amari.streetView2,
    projectMedia.amari.villaElevation,
    projectMedia.amari.basketballTennis,
    projectMedia.amari.banquetHall,
    projectMedia.amari.library,
    projectMedia.amari.saloonMain,
    projectMedia.amari.saloonClubhouse,
    projectMedia.amari.clubhouseHero,
  ],
  
  // Confirmed Ivy Collection
  ivyConfirmed: [
    projectMedia.ivy.hero,
    projectMedia.ivy.villa1,
    projectMedia.ivy.villa2,
    projectMedia.ivy.villa3,
    projectMedia.ivy.villa4,
    projectMedia.ivy.villaMain,
    projectMedia.ivy.elevation,
    projectMedia.ivy.masterView,
  ],
  
  // Representative Sports Facilities (Generic - use with disclaimers)
  representativeSports: [
    projectMedia.shared.pickleball,
    projectMedia.shared.badminton,
    projectMedia.shared.sandVolleyball,
    projectMedia.shared.tennisOutdoor,
    projectMedia.shared.tennisIndoor,
  ],
  
  // Representative Wellness (Generic - use with disclaimers)
  representativeWellness: [
    projectMedia.shared.gymWide, // Primary gym image
    projectMedia.shared.yogaRoom,
  ],
  
  // Representative Entertainment (Generic - use with disclaimers)
  representativeEntertainment: [
    projectMedia.shared.movieRoom, // Primary movie room
    projectMedia.shared.gameRoom,
    projectMedia.shared.indoorGames2, // Primary indoor games
    projectMedia.shared.childrenPark,
  ],
  
  // Representative Interiors (Generic - use with disclaimers)
  representativeInteriors: [
    projectMedia.shared.livingRoom,
    projectMedia.shared.bedroom1,
    projectMedia.shared.kitchen,
    projectMedia.shared.villaExterior,
  ],
  
  // Commercial Confirmed
  commercial: [
    projectMedia.prime.exterior,
    projectMedia.prime.exterior2,
    projectMedia.coliseum.exterior,
    projectMedia.coliseum.interior,
  ],
} as const;

// Image metadata for SEO and accessibility
export const imageMetadata = {
  // Confirmed Amari Project Images
  [projectMedia.amari.hero]: {
    alt: "Preston Amari luxury villa community showcasing modern architecture and landscaping",
    title: "Preston Amari - Premium Villa Community in Kollur", 
    category: "architecture"
  },
  [projectMedia.amari.aerialView]: {
    alt: "Aerial perspective of Preston Amari villa community showing masterplan layout and green spaces",
    title: "Preston Amari Community Masterplan - 174 Luxury Villas",
    category: "architecture"
  },
  [projectMedia.amari.basketballTennis]: {
    alt: "Preston Amari basketball and tennis courts with professional lighting and premium surfaces",
    title: "World-Class Sports Facilities at Preston Amari",
    category: "sports"
  },
  [projectMedia.amari.clubhouseHero]: {
    alt: "Preston Amari luxury clubhouse with swimming pool and families enjoying premium facilities",
    title: "45,000 sq ft Luxury Clubhouse with Resort-Style Pool at Preston Amari",
    category: "amenities"
  },
  [projectMedia.amari.banquetHall]: {
    alt: "Elegant banquet hall at Preston Amari clubhouse with premium interiors and lighting",
    title: "Premium Banquet Facilities for Community Events",
    category: "amenities"
  },
  [projectMedia.amari.library]: {
    alt: "Elegant library and reading room with comfortable seating at Preston Amari",
    title: "Community Library - Preston Amari Clubhouse",
    category: "entertainment"
  },
  [projectMedia.amari.saloonClubhouse]: {
    alt: "Premium salon and spa facilities at Preston Amari clubhouse",
    title: "Luxury Salon & Spa - Preston Amari Wellness Center",
    category: "wellness"
  },
  
  // Representative/Shared Images
  [projectMedia.shared.pickleball]: {
    alt: "Professional pickleball court with premium lighting and surfaces",
    title: "Pickleball Court - Premium Sports Amenity",
    category: "sports"
  },
  [projectMedia.shared.gymWide]: {
    alt: "State-of-the-art fitness center with modern equipment and premium interiors",
    title: "Premium Fitness Center Facilities",
    category: "wellness"
  },
  [projectMedia.shared.movieRoom]: {
    alt: "Premium home theater room with comfortable seating",
    title: "Multi-Purpose Theater - Entertainment Facility",
    category: "entertainment"
  },
  [projectMedia.shared.livingRoom]: {
    alt: "Elegant villa living room with modern furnishing and premium finishes",
    title: "Premium Villa Living Room Design",
    category: "interiors"
  },
  
  // Ivy Project Images
  [projectMedia.ivy.hero]: {
    alt: "Preston Ivy luxury villa community showcasing premium residential architecture",
    title: "Preston Ivy - Exclusive Villa Community in Madhapur",
    category: "architecture"
  },
  [projectMedia.ivy.villa1]: {
    alt: "Preston Ivy individual villa with modern architecture and premium landscaping",
    title: "Preston Ivy Villa - Contemporary Design & Premium Living",
    category: "architecture"
  },
  [projectMedia.ivy.villaMain]: {
    alt: "Preston Ivy villa elevation showcasing architectural excellence and modern design",
    title: "Preston Ivy Villa Architecture - Luxury Redefined",
    category: "architecture"
  },
  
  // Commercial Projects
  [projectMedia.prime.exterior]: {
    alt: "Preston Prime commercial mall elevation with contemporary facade design in Gachibowli",
    title: "Preston Prime - Modern Commercial Development in Gachibowli",
    category: "commercial"
  },
  [projectMedia.coliseum.exterior]: {
    alt: "Preston Coliseum mixed-use development with modern commercial architecture",
    title: "Preston Coliseum - Premium Mixed-Use Development",
    category: "commercial"
  },
  [projectMedia.coliseum.interior]: {
    alt: "Modern commercial interior spaces with premium retail design",
    title: "Premium Mall Interior - Retail Spaces",
    category: "commercial"
  },
} as const;

// Responsive image configurations
export const imageConfigs = {
  hero: {
    sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw",
    priority: true
  },
  gallery: {
    sizes: "(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw",
    priority: false
  },
  showcase: {
    sizes: "(max-width: 768px) 100vw, 50vw",
    priority: false
  }
} as const;