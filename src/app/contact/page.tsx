import { PageShell } from "@/components/layout/PageShell";
import { PageHero } from "@/components/ui/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactPage, site } from "@/lib/content";
import { prestonMedia } from "@/lib/media";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact",
  description: contactPage.hero.copy,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        title={contactPage.hero.headline}
        copy={contactPage.hero.copy}
        image={prestonMedia.contact}
        imageAlt="Contact Preston Developers"
      />

      {/* Services Section */}
      <section className="border-b border-[var(--line)] bg-[var(--bg-elevated)] py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div data-reveal>
            <SectionHeading title={contactPage.services.headline} />
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {contactPage.services.offerings.map((service) => (
              <article
                key={service.title}
                className="border border-[var(--line)] bg-[var(--bg)] p-6 md:p-8"
                data-reveal
              >
                <h3 className="font-display text-lg font-semibold text-[var(--fg)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-[var(--fg-muted)]">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 md:py-32" id="visit">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 md:grid-cols-2 md:px-10">
          <div data-reveal>
            <h2 className="font-display text-2xl font-semibold text-[var(--fg)]">Get in Touch</h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[var(--fg-muted)]">
              Ready to explore Hyderabad's premier real estate opportunities? Our team provides strategic consultation and personalized service.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              {contactPage.ctas.map((c, i) => (
                <ButtonLink
                  key={c.label}
                  href={c.href}
                  label={c.label}
                  variant={i === 0 ? "primary" : "secondary"}
                />
              ))}
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-1" data-reveal>
            {/* Office Address */}
            <div>
              <h3 className="font-display text-lg font-semibold text-[var(--fg)]">Office Location</h3>
              <address className="mt-4 not-italic text-sm leading-relaxed text-[var(--fg-muted)]">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-display text-lg font-semibold text-[var(--fg)]">Direct Contact</h3>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">Phone</p>
                  <ul className="mt-1 space-y-1">
                    {site.phones.map((phone) => (
                      <li key={phone}>
                        <a 
                          href={`tel:${phone.replace(/\s/g, "")}`} 
                          className="text-sm text-[var(--fg)] hover:text-[var(--accent)]"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--fg-muted)]">Email</p>
                  <a 
                    href={`mailto:${site.email}`} 
                    className="mt-1 inline-block text-sm text-[var(--fg)] hover:text-[var(--accent)]"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="font-display text-lg font-semibold text-[var(--fg)]">Business Hours</h3>
              <div className="mt-4 text-sm text-[var(--fg-muted)]">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}