import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-[var(--accent)] text-[var(--bg)] hover:brightness-110 border border-transparent",
  secondary:
    "border border-[var(--line)] text-[var(--fg)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
  ghost: "text-[var(--fg-muted)] hover:text-[var(--accent)] border border-transparent",
} as const;

type Props = {
  href: string;
  label: string;
  variant?: keyof typeof variants;
  className?: string;
};

export function ButtonLink({
  href,
  label,
  variant = "primary",
  className,
}: Props) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.22em] transition duration-300",
        variants[variant],
        className,
      )}
    >
      {label}
    </Link>
  );
}
