import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projectPages } from "@/lib/content";
import { prestonMedia } from "@/lib/media";

export function AmariProject() {
  const amari = projectPages.amari;

  return (
    <>
      {/* Market Positioning */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading title={amari.marketPositioning.headline} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
            {amari.marketPositioning.context}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {amari.marketPositioning.keyDifferentiators.map((diff, index) => (
              <div key={index} className="border-l-2 border-[var(--brand-teal)] bg-[var(--bg)]/60 p-4">
                <p className="text-sm font-medium text-[var(--brand-teal)]">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Visual */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden md:col-span-5" data-reveal>
              <Image
                src={prestonMedia.amari.aerial}
                alt="Preston Amari aerial view showing 174 villas and clubhouse"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="space-y-6 md:col-span-7" data-reveal>
              {amari.copy.map((p, index) => (
                <p key={index} className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                  {p}
                </p>
              ))}
              <div className="mt-8">
                <ButtonLink href={amari.cta.href} label={amari.cta.label} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubhouse Features */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading 
              eyebrow="Preston Is Built Better"
              title={amari.clubhouseFeatures.headline}
              subtitle="45,000 sq ft of world-class amenities designed for luxury community living"
              align="center"
            />
          </div>
          
          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {amari.clubhouseFeatures.facilities.map((facility, index) => (
              <div key={index} className="border border-[var(--line)] bg-[var(--bg)] p-6" data-reveal>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{facility.icon}</span>
                  <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                    {facility.category}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {facility.amenities.map((amenity, idx) => (
                    <li key={idx} className="text-sm text-[var(--fg-muted)] flex items-start">
                      <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-[var(--brand-teal)] flex-shrink-0"></span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenity Gallery */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading 
              title="Premium Amenity Showcase"
              subtitle="Experience luxury living with resort-style facilities"
              align="center"
            />
          </div>
          
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
              <Image
                src={prestonMedia.amari.pickleball}
                alt="Double-height pickleball court"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">PREMIUM FACILITY</p>
                <h4 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Dedicated Pickleball Court
                </h4>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
              <Image
                src={prestonMedia.amari.spa}
                alt="Luxury spa and wellness center"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">WELLNESS</p>
                <h4 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Luxury Spa & Wellness Center
                </h4>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
              <Image
                src={prestonMedia.amari.theater}
                alt="Multi-purpose theater"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">ENTERTAINMENT</p>
                <h4 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Multi-Purpose Theater
                </h4>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
              <Image
                src={prestonMedia.amari.sports}
                alt="Professional sports courts"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">SPORTS</p>
                <h4 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Professional Sports Courts
                </h4>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden" data-reveal>
              <Image
                src={prestonMedia.amari.banquet}
                alt="Banquet hall and party lawn"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">CELEBRATIONS</p>
                <h4 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Banquet Hall & Party Lawn
                </h4>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden border border-[var(--line)] bg-[var(--bg-elevated)] p-8 flex flex-col justify-center" data-reveal>
              <p className="text-sm font-semibold text-[var(--brand-teal)] mb-2">MORE AMENITIES</p>
              <h4 className="font-display text-lg font-semibold text-[var(--fg)] mb-4">
                15+ Community Facilities
              </h4>
              <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
                <li>Swimming pool with changing rooms</li>
                <li>3 guest bedrooms</li>
                <li>Children's play area</li>
                <li>Community temple</li>
                <li>Professional concierge</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Villa Features */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7" data-reveal>
              <SectionHeading title={amari.villaFeatures.headline} />
              <div className="mt-8 space-y-8">
                <div>
                  <h4 className="font-display text-lg font-semibold text-[var(--fg)] mb-4">
                    Villa Configurations
                  </h4>
                  <div className="grid gap-4 md:grid-cols-2">
                    {amari.villaFeatures.configurations.map((config, index) => (
                      <div key={index} className="border-l-2 border-[var(--brand-teal)] bg-[var(--bg)]/60 p-4">
                        <p className="text-sm font-medium text-[var(--fg)]">{config}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-display text-lg font-semibold text-[var(--fg)] mb-4">
                    Premium Features & Specifications
                  </h4>
                  <div className="grid gap-3 md:grid-cols-2">
                    {amari.villaFeatures.premiumFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="mr-3 mt-2 h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)] flex-shrink-0"></span>
                        <span className="text-sm text-[var(--fg-muted)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <aside className="md:col-span-5" data-reveal>
              <div className="border border-[var(--line)] bg-[var(--bg)] p-8">
                <SectionHeading title="Project Highlights" />
                <ul className="mt-6 space-y-3">
                  {amari.highlights.map((highlight, index) => (
                    <li key={index} className="border-l-2 border-[var(--accent)] pl-4 text-sm text-[var(--fg-muted)]">
                      {highlight}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <ButtonLink href="/contact" label="Schedule a Site Visit" variant="primary" />
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}