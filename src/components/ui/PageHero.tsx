import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  tagline?: string;
  subtitle?: string;
  copy?: string;
  image?: string;
  imageAlt?: string;
  ctas?: { href: string; label: string }[];
  align?: "left" | "center";
  size?: "default" | "large";
  className?: string;
};

export function PageHero({
  title,
  tagline,
  subtitle,
  copy,
  image,
  imageAlt = "",
  ctas,
  align = "left",
  size = "default",
  className,
}: Props) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-[var(--line)]",
        size === "large" ? "min-h-[88vh]" : "min-h-[55vh]",
        className,
      )}
    >
      {image ? (
        <>
          <Image src={image} alt={imageAlt} fill priority className="object-cover opacity-35" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/85 to-[var(--bg)]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--brand-teal)]/5" />
        </>
      ) : null}
      <div
        className={cn(
          "relative mx-auto flex max-w-[1400px] flex-col justify-end px-5 pb-24 pt-40 md:px-10 md:pb-32",
          size === "large" && "min-h-[inherit] justify-center pb-32 pt-48",
          align === "center" && "items-center text-center",
        )}
      >
        {tagline ? (
          <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-[var(--accent)] mb-2">
            {tagline}
          </p>
        ) : null}
        {subtitle ? (
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--brand-teal)]">
            {subtitle}
          </p>
        ) : null}
        <h1
          className={cn(
            "font-display font-semibold leading-[1.05] tracking-tight text-[var(--fg)]",
            size === "large"
              ? "mt-4 max-w-5xl text-[clamp(2.5rem,6vw,4.75rem)]"
              : "mt-3 max-w-4xl text-[clamp(2rem,4vw,3.25rem)]",
          )}
        >
          {title}
        </h1>
        {copy ? (
          <p className="mt-10 max-w-2xl text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
            {copy}
          </p>
        ) : null}
        {ctas && ctas.length > 0 ? (
          <div className="mt-12 flex flex-wrap gap-4">
            {ctas.map((cta, i) => (
              <ButtonLink
                key={cta.href}
                href={cta.href}
                label={cta.label}
                variant={i === 0 ? "primary" : "secondary"}
              />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
