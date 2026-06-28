"use client";

import Image from "next/image";
import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projectMedia } from "@/lib/project-media";

const villaCollection = [
  {
    src: projectMedia.ivy.villa1,
    title: "Contemporary Villa Design",
    description: "Modern architecture with clean lines and premium materials"
  },
  {
    src: projectMedia.ivy.villa2,
    title: "Garden Villa Collection",
    description: "Spacious layouts with private landscaped gardens"
  },
  {
    src: projectMedia.ivy.villa3,
    title: "Executive Villa Series",
    description: "Premium configurations with enhanced amenities"
  },
  {
    src: projectMedia.ivy.villa4,
    title: "Signature Villa Edition",
    description: "Exclusive designs with luxury finishes"
  }
];

const ivyFeatures = [
  {
    title: "Smart Home Ready",
    description: "Pre-wired for home automation and IoT integration",
    icon: "🏠"
  },
  {
    title: "Italian Marble",
    description: "Premium imported marble flooring throughout",
    icon: "💎"
  },
  {
    title: "Solar Integration",
    description: "Sustainable energy solutions with solar backup",
    icon: "☀️"
  },
  {
    title: "Madhapur Location",
    description: "Heart of HITEC City with metro connectivity",
    icon: "🚗"
  }
];

const specifications = [
  {
    category: "Structure & Design",
    items: [
      "RCC framed structure with seismic-resistant design",
      "Contemporary elevation with premium facade materials",
      "Double-height entrance lobbies in select villas",
      "Private parking for 2-4 cars per villa"
    ]
  },
  {
    category: "Interior Finishes",
    items: [
      "Italian marble flooring in living and dining areas",
      "Vitrified tiles in bedrooms with anti-skid bathroom tiles",
      "Teak wood main doors with premium hardware",
      "UPVC windows with double glazing for energy efficiency"
    ]
  },
  {
    category: "Kitchen & Utilities",
    items: [
      "Modular kitchen with granite countertops",
      "Stainless steel sink with premium fixtures",
      "Provision for built-in appliances",
      "Utility area with washing machine and storage space"
    ]
  },
  {
    category: "Technology & Security",
    items: [
      "Smart home pre-wiring for automation systems",
      "Video door phone and intercom facility",
      "CCTV surveillance in common areas",
      "High-speed fiber optic internet connectivity"
    ]
  }
];

const clubhouseAmenities = [
  {
    src: projectMedia.shared.clubhouse,
    title: "Four-Level Clubhouse",
    description: "15,000 sq ft clubhouse complex"
  },
  {
    src: projectMedia.shared.indoorGames1,
    title: "Indoor Games Room",
    description: "Table tennis, snooker & billiards"
  },
  {
    src: projectMedia.shared.gameRoom,
    title: "Cards & Games Lounge",
    description: "Leisure gaming for residents"
  },
  {
    src: projectMedia.shared.gymWide,
    title: "Fitness Center",
    description: "Modern gym with premium equipment"
  },
  {
    src: projectMedia.shared.yogaRoom,
    title: "Yoga & Wellness Studio",
    description: "Dedicated yoga and stretching area"
  },
  {
    src: projectMedia.shared.movieRoom,
    title: "Home Theater",
    description: "Private screening and media room"
  },
  {
    src: projectMedia.shared.indoorGames2,
    title: "Recreation Lounge",
    description: "Indoor leisure and social space"
  },
  {
    src: projectMedia.shared.childrenPlayArea,
    title: "Kids Play Area",
    description: "Dedicated children's play zone"
  }
];

export function EnhancedIvyProject() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [expandedSpec, setExpandedSpec] = useState<string | null>(null);

  return (
    <>
      {/* Key Features with Title and CTAs */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={projectMedia.ivy.hero}
            alt="Preston Ivy hero background"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[var(--bg)]/75" />
        </div>
        
        <div className="relative mx-auto max-w-[1400px] px-5 md:px-10">
          {/* Title Section */}
          <div className="text-center mb-16" data-reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--brand-teal)]">EXCLUSIVE VILLA COMMUNITY • MADHAPUR</p>
            <h1 className="font-display mt-4 text-4xl font-semibold text-[var(--fg)] md:text-6xl lg:text-7xl">
              Preston Ivy
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-[var(--fg-muted)] md:text-xl">
              Thoughtfully designed luxury villas featuring contemporary architecture, smart home integration, and Italian marble finishes in the heart of Madhapur, Hyderabad's established IT and lifestyle corridor.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center mb-12">
            {ivyFeatures.map((feature, index) => (
              <div key={index} data-reveal>
                <div className="mb-3 text-3xl">{feature.icon}</div>
                <h3 className="font-display text-lg font-semibold text-[var(--brand-teal)]">{feature.title}</h3>
                <p className="mt-2 text-sm text-[var(--fg-muted)]">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-12" data-reveal>
            <ButtonLink
              href="/contact"
              label="Schedule Visit"
              variant="primary"
            />
            <ButtonLink
              href="#villas"
              label="Explore Villas"
              variant="secondary"
            />
          </div>
        </div>
      </section>

      {/* Location Advantage */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div data-reveal>
              <SectionHeading
                eyebrow="MADHAPUR ADVANTAGE"
                title="At the Heart of Hyderabad's IT Corridor"
                subtitle="Positioned in Madhapur, the epicentre of Hyderabad's IT economy, with direct access to HITEC City, operational metro connectivity, and premium lifestyle destinations."
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">HITEC City - 5 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">Durgam Cheruvu Metro Station - 5 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">Gachibowli - 12 minutes</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-[var(--brand-teal)]" />
                  <span className="text-[var(--fg-muted)]">Rajiv Gandhi International Airport - 35 minutes</span>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
              <Image
                src={projectMedia.ivy.masterView}
                alt="Preston Ivy community masterplan view"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Villa Collection */}
      <section id="villas" className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="VILLA COLLECTION"
              title="Contemporary Design Meets Luxury Living"
              subtitle="Explore our range of thoughtfully designed villa configurations, each offering unique architectural elements and premium finishes."
              align="center"
            />
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {villaCollection.map((villa, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                data-reveal
                onClick={() => setSelectedImage(villa.src)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg)]">
                  <Image
                    src={villa.src}
                    alt={villa.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="font-display text-xl font-semibold text-[var(--fg)] md:text-2xl">
                      {villa.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--fg-muted)]">{villa.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Villa Elevation Hero */}
          <div className="mt-16" data-reveal>
            <div className="relative aspect-[21/9] overflow-hidden">
              <Image
                src={projectMedia.ivy.elevation}
                alt="Preston Ivy villa architectural elevation"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)]/60 to-transparent" />
              <div className="absolute left-8 top-1/2 -translate-y-1/2 max-w-md">
                <h3 className="font-display text-2xl font-semibold text-[var(--fg)] md:text-3xl">
                  Architectural Excellence
                </h3>
                <p className="mt-4 text-[var(--fg-muted)]">
                  Contemporary villa elevations designed for modern living with emphasis on natural light, ventilation, and premium aesthetics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="DETAILED SPECIFICATIONS"
              title="Premium Materials & Finishes"
              subtitle="Comprehensive specifications covering structure, interiors, utilities, and technology integration."
              align="center"
            />
          </div>

          <div className="mt-16 space-y-6">
            {specifications.map((spec, index) => (
              <div
                key={index}
                className="border border-[var(--line)] bg-[var(--bg-elevated)] overflow-hidden"
                data-reveal
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[var(--bg)]/50 transition-colors"
                  onClick={() => setExpandedSpec(expandedSpec === spec.category ? null : spec.category)}
                >
                  <h3 className="font-display text-lg font-semibold text-[var(--fg)]">{spec.category}</h3>
                  <span className={`text-[var(--brand-teal)] transition-transform ${expandedSpec === spec.category ? 'rotate-180' : ''}`}>
                    ↓
                  </span>
                </button>
                {expandedSpec === spec.category && (
                  <div className="px-6 pb-6">
                    <ul className="space-y-3">
                      {spec.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)] mt-2 flex-shrink-0" />
                          <span className="text-sm text-[var(--fg-muted)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubhouse & Lifestyle Amenities */}
      <section className="border-t border-[var(--line)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="15,000 SQ FT CLUBHOUSE"
              title="Clubhouse & Lifestyle Amenities"
              subtitle="A four-level clubhouse with indoor games, wellness facilities, home theater, and family recreation. Images are representative of the amenity standards provided at Preston Ivy."
              align="center"
            />
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {clubhouseAmenities.map((amenity, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                data-reveal
                onClick={() => setSelectedImage(amenity.src)}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
                  <Image
                    src={amenity.src}
                    alt={amenity.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 transition-transform opacity-0 group-hover:opacity-100">
                    <h4 className="font-display text-base font-semibold text-[var(--fg)]">{amenity.title}</h4>
                    <p className="text-xs text-[var(--fg-muted)]">{amenity.description}</p>
                  </div>
                </div>
                <div className="mt-3 group-hover:opacity-0 transition-opacity">
                  <h4 className="font-display text-sm font-semibold text-[var(--fg)]">{amenity.title}</h4>
                  <p className="text-xs text-[var(--fg-muted)]">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Villa Showcase */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="text-center" data-reveal>
            <SectionHeading
              eyebrow="MODEL VILLA"
              title="Experience Premium Villa Living"
              subtitle="Visit our model villa to experience the quality of construction, premium finishes, and thoughtful design."
              align="center"
            />
          </div>

          <div className="mt-16 relative aspect-[16/9] overflow-hidden" data-reveal>
            <Image
              src={projectMedia.ivy.villaMain}
              alt="Preston Ivy model villa showcasing premium architecture"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-md">
              <p className="text-sm font-semibold text-[var(--brand-teal)] uppercase tracking-wider">Model Villa Available</p>
              <h3 className="font-display mt-2 text-2xl font-semibold text-[var(--fg)] md:text-3xl">
                Schedule Your Private Tour
              </h3>
              <p className="mt-3 text-[var(--fg-muted)]">
                Experience the luxury finishes, smart home features, and architectural excellence firsthand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-[var(--line)] py-32 md:py-48">
        <div className="mx-auto max-w-[1400px] px-5 text-center md:px-10" data-reveal>
          <SectionHeading
            title="Discover Preston Ivy"
            subtitle="Schedule a visit to explore our model villa and experience the luxury of contemporary villa living in Madhapur."
            align="center"
          />
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <ButtonLink
              href="/contact"
              label="Book Villa Tour"
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
              alt="Full size villa image"
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