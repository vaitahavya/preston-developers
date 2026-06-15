"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
  category?: string;
  title?: string;
};

type Props = {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  className?: string;
};

export function ProjectGallery({ images, title, subtitle, className }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(images.map((img) => img.category).filter(Boolean))
  ) as string[];

  const filteredImages = selectedCategory
    ? images.filter((img) => img.category === selectedCategory)
    : images;

  const selectedImage = filteredImages[selectedIndex];

  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {title && (
          <div className="text-center" data-reveal>
            <h2 className="font-display text-2xl font-semibold text-[var(--fg)] md:text-3xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Category Filter */}
        {categories.length > 0 && (
          <div className="mt-12 flex justify-center" data-reveal>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedIndex(0);
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] transition",
                  selectedCategory === null
                    ? "bg-[var(--brand-teal)] text-[var(--bg)]"
                    : "border border-[var(--line)] text-[var(--fg-muted)] hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
                )}
              >
                All
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedIndex(0);
                  }}
                  className={cn(
                    "px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] transition",
                    selectedCategory === category
                      ? "bg-[var(--brand-teal)] text-[var(--bg)]"
                      : "border border-[var(--line)] text-[var(--fg-muted)] hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Gallery */}
        <div className="mt-16 grid gap-8 lg:grid-cols-12">
          {/* Large Selected Image */}
          <div className="lg:col-span-8" data-reveal>
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-cover transition duration-500"
                sizes="(min-width: 1024px) 66vw, 100vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/20 to-transparent" />
              {selectedImage.title && (
                <div className="absolute bottom-6 left-6">
                  <h3 className="font-display text-xl font-semibold text-[var(--fg)] md:text-2xl">
                    {selectedImage.title}
                  </h3>
                  {selectedImage.category && (
                    <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[var(--brand-teal)]">
                      {selectedImage.category}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Thumbnail Grid */}
          <div className="lg:col-span-4" data-reveal>
            <div className="grid grid-cols-2 gap-4">
              {filteredImages.slice(0, 6).map((image, index) => (
                <button
                  key={`${image.src}-${index}`}
                  onClick={() => setSelectedIndex(index)}
                  className={cn(
                    "group relative aspect-square overflow-hidden bg-[var(--bg-elevated)] transition",
                    selectedIndex === index
                      ? "ring-2 ring-[var(--brand-teal)]"
                      : "hover:ring-1 hover:ring-[var(--brand-teal)]/50"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 50vw"
                  />
                  <div
                    className={cn(
                      "absolute inset-0 transition",
                      selectedIndex === index
                        ? "bg-[var(--brand-teal)]/10"
                        : "bg-[var(--bg)]/20 group-hover:bg-[var(--brand-teal)]/20"
                    )}
                  />
                </button>
              ))}
            </div>
            
            {/* Show more indicator */}
            {filteredImages.length > 6 && (
              <div className="mt-4 text-center">
                <p className="text-sm text-[var(--fg-muted)]">
                  +{filteredImages.length - 6} more images
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        {filteredImages.length > 1 && (
          <div className="mt-8 flex justify-center gap-4" data-reveal>
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev > 0 ? prev - 1 : filteredImages.length - 1
                )
              }
              className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--fg-muted)] transition hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
            >
              ←
            </button>
            <span className="flex h-10 items-center px-4 text-sm text-[var(--fg-muted)]">
              {selectedIndex + 1} of {filteredImages.length}
            </span>
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev < filteredImages.length - 1 ? prev + 1 : 0
                )
              }
              className="flex h-10 w-10 items-center justify-center border border-[var(--line)] text-[var(--fg-muted)] transition hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
            >
              →
            </button>
          </div>
        )}
      </div>
    </section>
  );
}