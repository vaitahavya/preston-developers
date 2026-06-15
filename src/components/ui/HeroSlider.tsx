"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

type SlideImage = {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
};

type Props = {
  images: SlideImage[];
  autoPlay?: boolean;
  interval?: number;
  showDots?: boolean;
  showArrows?: boolean;
  className?: string;
};

export function HeroSlider({
  images,
  autoPlay = true,
  interval = 5000,
  showDots = true,
  showArrows = true,
  className,
}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, interval);

    return () => clearInterval(timer);
  }, [autoPlay, interval, images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  if (images.length === 0) return null;

  const currentImage = images[currentIndex];

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Main Image */}
      <div className="relative aspect-[16/10] md:aspect-[21/9]">
        <Image
          src={currentImage.src}
          alt={currentImage.alt}
          fill
          priority
          className="object-cover transition-opacity duration-1000"
          sizes="100vw"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)]/60 via-[var(--bg)]/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent" />
        
        {/* Content Overlay */}
        {(currentImage.title || currentImage.subtitle) && (
          <div className="absolute bottom-12 left-8 md:left-16">
            {currentImage.subtitle && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[var(--brand-teal)] mb-2">
                {currentImage.subtitle}
              </p>
            )}
            {currentImage.title && (
              <h2 className="font-display text-2xl font-semibold text-[var(--fg)] md:text-4xl max-w-2xl">
                {currentImage.title}
              </h2>
            )}
          </div>
        )}
      </div>

      {/* Navigation Arrows */}
      {showArrows && images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-[var(--bg)]/80 text-[var(--fg)] transition hover:bg-[var(--brand-teal)] hover:text-[var(--bg)] md:h-12 md:w-12"
            aria-label="Previous image"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M10 3L5 8l5 5V3z" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-[var(--bg)]/80 text-[var(--fg)] transition hover:bg-[var(--brand-teal)] hover:text-[var(--bg)] md:h-12 md:w-12"
            aria-label="Next image"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M6 3v10l5-5-5-5z" />
            </svg>
          </button>
        </>
      )}

      {/* Dots Navigation */}
      {showDots && images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
          <div className="flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition",
                  currentIndex === index
                    ? "bg-[var(--brand-teal)]"
                    : "bg-[var(--fg)]/30 hover:bg-[var(--fg)]/50"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* Slide Counter */}
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4">
          <span className="bg-[var(--bg)]/80 px-2 py-1 text-xs text-[var(--fg)]">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      )}
    </div>
  );
}