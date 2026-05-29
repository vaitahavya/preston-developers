import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { projectPages } from "@/lib/content";
import { prestonMedia } from "@/lib/media";

export function IvyProject() {
  const ivy = projectPages.ivy;

  return (
    <>
      {/* Market Positioning */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-16">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10" data-reveal>
          <SectionHeading title={ivy.marketPositioning.headline} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
            {ivy.marketPositioning.context}
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {ivy.marketPositioning.keyDifferentiators.map((diff, index) => (
              <div key={index} className="border-l-2 border-[var(--brand-teal)] bg-[var(--bg)]/60 p-4">
                <p className="text-sm font-medium text-[var(--brand-teal)]">{diff}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content with Villa Exterior */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden md:col-span-5" data-reveal>
              <Image
                src={prestonMedia.ivy.exterior}
                alt="Preston Ivy premium villa exterior with teakwood doors and solar panels"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
            <div className="space-y-6 md:col-span-7" data-reveal>
              {ivy.copy.map((p, index) => (
                <p key={index} className="text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                  {p}
                </p>
              ))}
              <div className="mt-8">
                <ButtonLink href={ivy.cta.href} label={ivy.cta.label} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Specifications */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading 
              eyebrow="Preston Is Built Better"
              title={ivy.specifications.headline}
              subtitle="Italian marble, smart technology, and premium European fittings"
              align="center"
            />
          </div>
          
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {/* Flooring & Finishes */}
            <div className="border border-[var(--line)] bg-[var(--bg)] p-6" data-reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏛️</span>
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Premium Flooring
                </h3>
              </div>
              <ul className="space-y-2">
                {ivy.specifications.flooring.map((item, idx) => (
                  <li key={idx} className="text-sm text-[var(--fg-muted)] flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-[var(--brand-teal)] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Home Features */}
            <div className="border border-[var(--line)] bg-[var(--bg)] p-6" data-reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🏠</span>
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Smart Home Tech
                </h3>
              </div>
              <ul className="space-y-2">
                {ivy.specifications.smartHome.map((item, idx) => (
                  <li key={idx} className="text-sm text-[var(--fg-muted)] flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-[var(--brand-teal)] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Features */}
            <div className="border border-[var(--line)] bg-[var(--bg)] p-6" data-reveal>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⭐</span>
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Premium Features
                </h3>
              </div>
              <ul className="space-y-2">
                {ivy.specifications.premiumFeatures.map((item, idx) => (
                  <li key={idx} className="text-sm text-[var(--fg-muted)] flex items-start">
                    <span className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-[var(--brand-teal)] flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Home Showcase */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-7" data-reveal>
              <SectionHeading title="B.ONE Smart Home Integration" />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--fg-muted)]">
                <p>
                  Every Preston Ivy villa comes equipped with B.ONE Hub — the world's most powerful home automation system. Control your entire home through a mobile app, with advanced features including video door bell, motion sensors, climate control, and comprehensive security monitoring.
                </p>
                <p>
                  The system integrates seamlessly with VRF air conditioning, biometric locks, and media systems, allowing residents to monitor and control their home environment from anywhere in the world.
                </p>
              </div>
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="border-l-2 border-[var(--brand-teal)] bg-[var(--bg-elevated)] p-4">
                  <h4 className="font-semibold text-[var(--fg)] mb-2">Security Features</h4>
                  <p className="text-sm text-[var(--fg-muted)]">Biometric locks, motion sensors, video door bell, CCTV integration</p>
                </div>
                <div className="border-l-2 border-[var(--brand-teal)] bg-[var(--bg-elevated)] p-4">
                  <h4 className="font-semibold text-[var(--fg)] mb-2">Climate Control</h4>
                  <p className="text-sm text-[var(--fg-muted)]">VRF AC system, automated lighting, energy management</p>
                </div>
              </div>
            </div>
            
            <div className="relative aspect-[4/3] overflow-hidden md:col-span-5" data-reveal>
              <Image
                src={prestonMedia.ivy.smartHome}
                alt="B.ONE smart home automation system interface and mobile app"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Interior Showcase */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden md:col-span-6" data-reveal>
              <Image
                src={prestonMedia.ivy.interior}
                alt="Italian marble flooring with wooden bedroom areas and premium finishes"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">PREMIUM MATERIALS</p>
                <h4 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Italian Marble & Teakwood
                </h4>
              </div>
            </div>

            <div className="relative aspect-[4/3] overflow-hidden md:col-span-6" data-reveal>
              <Image
                src={prestonMedia.ivy.clubhouse}
                alt="Four-level clubhouse banquet hall for 150 guests"
                fill
                className="object-cover"
                sizes="(min-width: 768px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <p className="text-sm font-semibold text-[var(--brand-teal)]">15,000 SQ FT</p>
                <h4 className="font-display text-lg font-semibold text-[var(--fg)]">
                  Four-Level Clubhouse
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clubhouse Features */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading 
              title={ivy.clubhouseFeatures.headline}
              subtitle="Premium amenities including banquet hall, spa, and guest accommodations"
              align="center"
            />
          </div>
          
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {ivy.clubhouseFeatures.facilities.map((facility, index) => (
              <div key={index} className="border border-[var(--line)] bg-[var(--bg-elevated)] p-6" data-reveal>
                <h3 className="font-display text-lg font-semibold text-[var(--fg)] mb-4">
                  {facility.category}
                </h3>
                <ul className="space-y-3">
                  {facility.amenities.map((amenity, idx) => (
                    <li key={idx} className="text-sm text-[var(--fg-muted)] flex items-start">
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)] flex-shrink-0"></span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Highlights & CTA */}
      <section className="border-t border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid gap-16 md:grid-cols-12">
            <div className="md:col-span-8" data-reveal>
              <SectionHeading title="Why Choose Preston Ivy?" />
              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {ivy.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start">
                    <span className="mr-3 mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-teal)] flex-shrink-0"></span>
                    <span className="text-sm text-[var(--fg-muted)]">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <aside className="md:col-span-4" data-reveal>
              <div className="border border-[var(--line)] bg-[var(--bg)] p-8">
                <h3 className="font-display text-lg font-semibold text-[var(--fg)] mb-4">
                  Technical Specifications
                </h3>
                <ul className="space-y-3 text-sm text-[var(--fg-muted)] mb-6">
                  <li>• Earthquake-resistant RCC structure (IS certified)</li>
                  <li>• 10-12 KVA power supply with 100% DG backup</li>
                  <li>• VRF air conditioning (Daikin/Mitsubishi)</li>
                  <li>• Premium European bathroom fittings</li>
                  <li>• Solar power integration throughout</li>
                  <li>• Treated water through pneumatic system</li>
                </ul>
                <ButtonLink href="/contact" label="Schedule Technical Tour" variant="primary" />
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}