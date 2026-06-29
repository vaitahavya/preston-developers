"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { ProjectGallery } from "@/components/ui/ProjectGallery";
import { projectMedia, mediaByCategory } from "@/lib/project-media";

const amenityCategories = [
  {
    id: "confirmed",
    name: "Confirmed Amari Facilities",
    description: "Actual amenities photographed at Preston Amari (verified images)",
    images: [
      {
        src: projectMedia.amari.basketballTennis,
        title: "Tennis & Basketball Court",
        description: "Multi-sport court at Preston Amari"
      },
      {
        src: projectMedia.amari.clubhouseHero,
        title: "Clubhouse & Swimming Pool",
        description: "45,000 sq ft clubhouse with resort-style pool"
      },
      {
        src: projectMedia.amari.banquetHall,
        title: "Grand Banquet Hall",
        description: "Elegant venue for celebrations and events"
      },
      {
        src: projectMedia.amari.library,
        title: "Ladies Library & Lounge",
        description: "Dedicated reading and study spaces"
      },
      {
        src: projectMedia.amari.saloonClubhouse,
        title: "Salon in Clubhouse",
        description: "Premium salon services within the clubhouse"
      },
      {
        src: projectMedia.amari.saloonMain,
        title: "Salon & Spa",
        description: "Professional grooming and spa services"
      }
    ]
  },
  {
    id: "sports",
    name: "Sports & Recreation",
    description: "Representative sports facilities reflecting Preston Amari's amenity standards",
    images: [
      {
        src: projectMedia.shared.pickleball,
        title: "Pickleball Court",
        description: "Dedicated pickleball court"
      },
      {
        src: projectMedia.shared.badminton,
        title: "Badminton Court",
        description: "Professional badminton court"
      },
      {
        src: projectMedia.shared.sandVolleyball,
        title: "Sand Volleyball Court",
        description: "Beach-style sand volleyball court"
      },
      {
        src: projectMedia.shared.tennisOutdoor,
        title: "Tennis Court",
        description: "Outdoor tennis court"
      },
      {
        src: projectMedia.shared.tennisIndoor,
        title: "Indoor Tennis Court",
        description: "All-weather indoor tennis court"
      },
      {
        src: projectMedia.amari.basketballTennis,
        title: "Basketball Court",
        description: "Multi-sport basketball & tennis complex"
      }
    ]
  },
  {
    id: "wellness",
    name: "Wellness & Fitness",
    description: "Representative wellness facilities reflecting Preston Amari's amenity standards",
    images: [
      {
        src: projectMedia.shared.gymWide,
        title: "Fitness Center",
        description: "State-of-the-art gym facilities"
      },
      {
        src: projectMedia.shared.gym,
        title: "Cardio & Strength Zone",
        description: "Modern cardio and strength equipment"
      },
      {
        src: projectMedia.shared.gymWide2,
        title: "Free-Weights Area",
        description: "Dedicated weight-training space"
      },
      {
        src: projectMedia.shared.yogaRoom,
        title: "Yoga & Meditation Studio",
        description: "Dedicated wellness and yoga space"
      }
    ]
  },
  {
    id: "indoor",
    name: "Entertainment & Indoor Games",
    description: "Representative entertainment facilities reflecting Preston Amari's amenity standards",
    images: [
      {
        src: projectMedia.shared.indoorGames1,
        title: "Indoor Games Room",
        description: "Table tennis, snooker & billiards"
      },
      {
        src: projectMedia.shared.indoorGames2,
        title: "Games Lounge",
        description: "Indoor recreation for all ages"
      },
      {
        src: projectMedia.shared.indoorGames3,
        title: "Game Zone",
        description: "Board games and leisure activities"
      },
      {
        src: projectMedia.shared.gameRoom,
        title: "Cards & Games Room",
        description: "Leisure gaming and cards room"
      },
      {
        src: projectMedia.shared.movieRoom,
        title: "Multi-Purpose Theater",
        description: "Private screenings and community events"
      },
      {
        src: projectMedia.shared.movieRoom2,
        title: "Mini Theater",
        description: "Intimate community entertainment room"
      }
    ]
  },
  {
    id: "family",
    name: "Family & Community",
    description: "Representative family amenities reflecting Preston Amari's amenity standards",
    images: [
      {
        src: projectMedia.shared.clubhouse,
        title: "Community Clubhouse",
        description: "Central clubhouse for residents"
      },
      {
        src: projectMedia.shared.clubhouse2,
        title: "Clubhouse Lounge",
        description: "Social and lounge spaces"
      },
      {
        src: projectMedia.shared.childrenPark,
        title: "Children's Park",
        description: "Safe outdoor play zone"
      },
      {
        src: projectMedia.shared.childrenPlayArea,
        title: "Kids Play Area",
        description: "Dedicated children's play area"
      }
    ]
  }
];

const villaFeatures = [
  {
    title: "174 G+1 Villas",
    description: "3-4 BHK configurations with servant quarters and toilets",
    icon: "🏗️"
  },
  {
    title: "45,000 Sq Ft Clubhouse",
    description: "Largest clubhouse in the corridor with comprehensive amenities",
    icon: "🏛️"
  },
  {
    title: "22-Acre Community",
    description: "Spacious villa community with extensive green spaces",
    icon: "🌿"
  },
  {
    title: "Premium Sports Complex",
    description: "Multiple courts including pickleball, basketball, tennis, badminton",
    icon: "🏆"
  }
];

export function EnhancedAmariProject() {
  const [activeCategory, setActiveCategory] = useState("confirmed");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categoryRefs = useRef<Record<string, HTMLDivElement | null>>({});

  // Scroll-spy: highlight the pill for whichever category block is just under the sticky bar.
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const id = visible[0]?.target.getAttribute("data-category-id");
        if (id) setActiveCategory(id);
      },
      { rootMargin: "-140px 0px -55% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    const nodes = Object.values(categoryRefs.current).filter(
      (node): node is HTMLDivElement => node !== null
    );
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const handlePillClick = (id: string) => {
    setActiveCategory(id);
    categoryRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* Key Stats with Title and CTAs */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={projectMedia.amari.aerialView}
            alt="Preston Amari aerial view background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[var(--bg)]/80" />
        </div>
        
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          {/* Title Section */}
          <div className="text-center mb-16" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">174 LUXURY VILLAS • 22 ACRES</p>
            <h1 className="font-display mt-4 text-4xl font-semibold text-[var(--fg)] md:text-6xl lg:text-7xl">
              Preston Amari
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl">
              A masterfully planned villa community featuring the largest clubhouse in the corridor - 45,000 sq ft of world-class amenities including sports complex, wellness center, and entertainment facilities.
            </p>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center mb-12">
            <div data-reveal>
              <p className="font-display text-3xl font-semibold text-[var(--brand-teal)] md:text-4xl">174</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">Luxury Villas</p>
            </div>
            <div data-reveal>
              <p className="font-display text-3xl font-semibold text-[var(--brand-teal)] md:text-4xl">22</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">Acres</p>
            </div>
            <div data-reveal>
              <p className="font-display text-3xl font-semibold text-[var(--brand-teal)] md:text-4xl">45K</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">Sq Ft Clubhouse</p>
            </div>
            <div data-reveal>
              <p className="font-display text-3xl font-semibold text-[var(--brand-teal)] md:text-4xl">15+</p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[var(--fg-muted)]">Amenities</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12" data-reveal>
            <ButtonLink
              href="/contact"
              label="Schedule Site Visit"
              variant="primary"
            />
            <ButtonLink
              href="#amenities"
              label="Explore Amenities"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Location & Connectivity */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <SectionHeading
                eyebrow="STRATEGIC LOCATION"
                title="Kollur's ORR Exit 2 Growth Corridor"
                subtitle="A 22-acre gated villa community in Kollur with seamless connectivity to Hyderabad's business districts via the Outer Ring Road and upcoming metro & RRR infrastructure."
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">Gachibowli - 12 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">HITEC City - 18 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">Financial District - 35 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">ORR Exit 2 - Direct access</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">Upcoming Metro & Regional Ring Road connectivity</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2" data-reveal>
              <div className="relative aspect-[3/4] overflow-hidden md:row-span-2">
                <Image
                  src={projectMedia.amari.streetView}
                  alt="Preston Amari street view during day"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projectMedia.amari.nightView}
                  alt="Preston Amari illuminated street view at night"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projectMedia.amari.streetView2}
                  alt="Preston Amari landscaped community street view"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Configurations */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="VILLA DESIGNS"
              title="Contemporary Architecture, Premium Living"
              subtitle="G+1 villa configurations designed for modern families with spacious layouts, private gardens, and smart home integration."
              align="center"
            />
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {villaFeatures.map((feature, index) => (
              <div key={index} className="text-center" data-reveal>
                <div className="mb-4 text-4xl">{feature.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2" data-reveal>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projectMedia.amari.villaElevation}
                  alt="Preston Amari villa elevation showcasing modern architecture"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={projectMedia.shared.villaExterior}
                  alt="Representative villa exterior design"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
            </div>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section id="amenities" className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="45,000 SQ FT CLUBHOUSE"
              title="Unparalleled Amenity Experience"
              subtitle="The largest clubhouse in the corridor featuring world-class sports, wellness, and entertainment facilities."
              align="center"
            />
          </div>
        </div>

        {/* Sticky category navigation (pins under the 72px global header) */}
        <div className="sticky top-[72px] z-30 mt-12 border-b border-[var(--line)] bg-[var(--bg)]/90 py-3 backdrop-blur">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <div
              className="flex gap-3 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-center"
              role="tablist"
              aria-label="Amenity categories"
            >
              {amenityCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handlePillClick(category.id)}
                  aria-current={activeCategory === category.id ? "true" : undefined}
                  className={`shrink-0 rounded-full px-6 py-3 text-sm font-medium transition ${
                    activeCategory === category.id
                      ? "bg-[var(--brand-teal)] text-[var(--bg)]"
                      : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] hover:text-[var(--fg)]"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stacked category blocks with scroll-spy */}
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="mt-16 space-y-24">
            {amenityCategories.map((category) => (
              <div
                key={category.id}
                id={`amenity-${category.id}`}
                data-category-id={category.id}
                ref={(node) => {
                  categoryRefs.current[category.id] = node;
                }}
                className="scroll-mt-[140px]"
              >
                <div className="text-center mb-12" data-reveal>
                  <h3 className="font-display text-2xl font-semibold text-[var(--fg)] md:text-3xl">
                    {category.name}
                  </h3>
                  <p className="mt-2 text-[var(--fg-muted)]">{category.description}</p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.images.map((image, index) => (
                    <div
                      key={index}
                      className="group cursor-pointer"
                      data-reveal
                      onClick={() => setSelectedImage(image.src)}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-[1.05]"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                          <h4 className="font-display text-lg font-semibold text-[var(--fg)]">{image.title}</h4>
                          <p className="text-sm text-[var(--fg-muted)]">{image.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Architecture & Design */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="VILLA ARCHITECTURE"
              title="Contemporary G+1 Villa Design"
              subtitle="174 thoughtfully designed villas with modern architecture and premium finishes."
              align="center"
            />
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden group" data-reveal>
              <Image
                src={projectMedia.amari.villaElevation}
                alt="Preston Amari villa elevation showcasing modern architecture"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">Villa Elevation</p>
                <p className="text-xs text-[var(--fg-muted)]">G+1 Contemporary Design</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group" data-reveal>
              <Image
                src={projectMedia.shared.livingRoom}
                alt="Representative villa living room with modern furnishing"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">Sample Interior</p>
                <p className="text-xs text-[var(--fg-muted)]">Representative Design</p>
              </div>
            </div>
          </div>

          {/* Additional Villa Views */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4" data-reveal>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={projectMedia.shared.kitchen}
                alt="Representative premium kitchen design"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Kitchen Design</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={projectMedia.shared.bedroom1}
                alt="Representative master bedroom design"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Master Bedroom</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={projectMedia.shared.bedroom2}
                alt="Representative secondary bedroom design"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Guest Bedroom</p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={projectMedia.shared.villaExterior}
                alt="Representative villa exterior architecture"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute bottom-3 left-3">
                <p className="text-xs font-semibold text-[var(--brand-teal)]">Villa Exterior</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--line)] py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10" data-reveal>
          <SectionHeading
            title="Experience Preston Amari"
            subtitle="Schedule a private site visit to explore the 45,000 sq ft clubhouse and villa configurations."
            align="center"
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contact"
              label="Schedule Site Visit"
              variant="primary"
            />
            <ButtonLink
              href="tel:+919876543210"
              label="Call Now"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Lightbox for full-screen images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-h-full max-w-full">
            <Image
              src={selectedImage}
              alt="Full size amenity image"
              width={1200}
              height={800}
              className="max-h-full max-w-full object-contain"
            />
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-[var(--brand-teal)]"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}