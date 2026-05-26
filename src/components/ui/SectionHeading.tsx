import { cn } from "@/lib/utils";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[var(--brand-teal)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display mt-4 text-[clamp(2rem,4.5vw,3.5rem)] font-semibold leading-[1.08] text-[var(--fg)]">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-5 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
