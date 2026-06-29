"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type GalleryImage = {
  src: string;
  alt: string;
  category?: string;
  title?: string;
  description?: string;
  aspectRatio?: number;
  priority?: 'high' | 'medium' | 'low';
  hotspots?: Array<{
    x: number;
    y: number;
    title: string;
    description: string;
  }>;
};

type Props = {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  layout?: 'masonry' | 'grid' | 'justified';
  enableHotspots?: boolean;
  enable360?: boolean;
  className?: string;
};

export function EnhancedProjectGallery({ 
  images, 
  title, 
  subtitle, 
  layout = 'masonry',
  enableHotspots = false,
  enable360 = false,
  className 
}: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [hoveredHotspot, setHoveredHotspot] = useState<number | null>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const categories = Array.from(
    new Set(images.map((img) => img.category).filter(Boolean))
  ) as string[];

  const filteredImages = selectedCategory
    ? images.filter((img) => img.category === selectedCategory)
    : images;

  const selectedImage = filteredImages[selectedIndex] || filteredImages[0];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed || !imageRef.current) return;
    
    const rect = imageRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      'Architecture': '🏗️',
      'Amenities': '🏊‍♂️',
      'Lifestyle': '🌟',
      'Interiors': '🏠',
      'Community': '🌳',
      'Sports': '⚽',
      'Wellness': '🧘‍♀️',
      'Commercial': '🏢'
    };
    return icons[category] || '📸';
  };

  const getLayoutClasses = () => {
    switch (layout) {
      case 'masonry':
        return 'columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4';
      case 'justified':
        return 'flex flex-wrap gap-2';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4';
    }
  };

  return (
    <section className={cn("py-24 md:py-32", className)}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {title && (
          <div className="text-center" data-reveal>
            <h2 className="font-display text-2xl font-semibold text-[var(--fg)] md:text-3xl lg:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-base leading-relaxed text-[var(--fg-muted)] md:text-lg max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Enhanced Category Filter */}
        {categories.length > 0 && (
          <div className="mt-12 flex justify-center" data-reveal>
            <div className="flex flex-wrap gap-2 bg-[var(--bg-elevated)] p-2 rounded-lg border border-[var(--line)]">
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSelectedIndex(0);
                }}
                className={cn(
                  "px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] transition rounded-md flex items-center gap-2",
                  selectedCategory === null
                    ? "bg-[var(--brand-teal)] text-[var(--bg)] shadow-lg"
                    : "text-[var(--fg-muted)] hover:bg-[var(--bg)] hover:text-[var(--brand-teal)]"
                )}
              >
                <span>📸</span>
                All ({images.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    setSelectedIndex(0);
                  }}
                  className={cn(
                    "px-4 py-2 text-sm font-medium uppercase tracking-[0.1em] transition rounded-md flex items-center gap-2",
                    selectedCategory === category
                      ? "bg-[var(--brand-teal)] text-[var(--bg)] shadow-lg"
                      : "text-[var(--fg-muted)] hover:bg-[var(--bg)] hover:text-[var(--brand-teal)]"
                  )}
                >
                  <span>{getCategoryIcon(category)}</span>
                  {category} ({images.filter(img => img.category === category).length})
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Main Gallery Layout */}
        {layout === 'masonry' ? (
          <div className="mt-16 grid gap-8 lg:grid-cols-12">
            {/* Featured Image */}
            <div className="lg:col-span-8" data-reveal>
              <div 
                ref={imageRef}
                className="relative aspect-[4/3] overflow-hidden bg-[var(--bg-elevated)] rounded-lg group cursor-zoom-in"
                onClick={() => setIsZoomed(!isZoomed)}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => setIsZoomed(false)}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-700",
                    isZoomed ? "scale-150" : "scale-100"
                  )}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : undefined
                  }
                  sizes="(min-width: 1024px) 66vw, 100vw"
                  priority={selectedIndex === 0}
                />
                
                {/* Image Overlay with Details */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Zoom Indicator */}
                {!isZoomed && (
                  <div className="absolute top-4 right-4 bg-[var(--bg)]/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-[var(--fg-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to zoom
                  </div>
                )}

                {/* Hotspots */}
                {enableHotspots && selectedImage.hotspots?.map((hotspot, index) => (
                  <div
                    key={index}
                    className="absolute w-6 h-6 bg-[var(--brand-teal)] rounded-full border-2 border-white shadow-lg cursor-pointer animate-pulse hover:animate-none transition-all hover:scale-125"
                    style={{
                      left: `${hotspot.x}%`,
                      top: `${hotspot.y}%`,
                      transform: 'translate(-50%, -50%)'
                    }}
                    onMouseEnter={() => setHoveredHotspot(index)}
                    onMouseLeave={() => setHoveredHotspot(null)}
                  >
                    <div className="w-full h-full rounded-full bg-[var(--brand-teal)] flex items-center justify-center text-white text-xs font-bold">
                      +
                    </div>
                    
                    {/* Hotspot Tooltip */}
                    {hoveredHotspot === index && (
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[var(--bg)] border border-[var(--line)] rounded-lg p-3 min-w-[200px] z-10 shadow-lg">
                        <h4 className="font-medium text-[var(--fg)] text-sm mb-1">
                          {hotspot.title}
                        </h4>
                        <p className="text-xs text-[var(--fg-muted)]">
                          {hotspot.description}
                        </p>
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-[var(--bg)]"></div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Image Title Overlay */}
                {selectedImage.title && (
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-[var(--bg)]/90 backdrop-blur-sm rounded-lg p-4 border border-[var(--line)]/50">
                      <h3 className="font-display text-lg font-semibold text-[var(--fg)] md:text-xl">
                        {selectedImage.title}
                      </h3>
                      {selectedImage.category && (
                        <p className="mt-1 text-sm uppercase tracking-[0.15em] text-[var(--brand-teal)] flex items-center gap-1">
                          <span>{getCategoryIcon(selectedImage.category)}</span>
                          {selectedImage.category}
                        </p>
                      )}
                      {selectedImage.description && (
                        <p className="mt-2 text-sm text-[var(--fg-muted)]">
                          {selectedImage.description}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Thumbnail Grid */}
            <div className="lg:col-span-4" data-reveal>
              <div className="grid grid-cols-2 gap-4 max-h-[600px] overflow-y-auto custom-scrollbar">
                {filteredImages.map((image, index) => (
                  <button
                    key={`${image.src}-${index}`}
                    onClick={() => setSelectedIndex(index)}
                    className={cn(
                      "group relative aspect-square overflow-hidden bg-[var(--bg-elevated)] transition rounded-lg",
                      selectedIndex === index
                        ? "ring-2 ring-[var(--brand-teal)] shadow-lg"
                        : "hover:ring-1 hover:ring-[var(--brand-teal)]/50 hover:shadow-md"
                    )}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 16vw, (min-width: 768px) 25vw, 50vw"
                    />
                    <div
                      className={cn(
                        "absolute inset-0 transition-all",
                        selectedIndex === index
                          ? "bg-[var(--brand-teal)]/10"
                          : "bg-[var(--bg)]/0 group-hover:bg-[var(--brand-teal)]/20"
                      )}
                    />
                    
                    {/* Thumbnail Category Badge */}
                    {image.category && (
                      <div className="absolute top-2 left-2 bg-[var(--bg)]/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-[var(--fg)] opacity-0 group-hover:opacity-100 transition-opacity">
                        {getCategoryIcon(image.category)}
                      </div>
                    )}
                    
                    {/* Selection Indicator */}
                    {selectedIndex === index && (
                      <div className="absolute bottom-2 right-2 w-6 h-6 bg-[var(--brand-teal)] rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              
              {/* Gallery Stats */}
              <div className="mt-4 text-center">
                <p className="text-sm text-[var(--fg-muted)]">
                  Viewing {selectedIndex + 1} of {filteredImages.length}
                  {selectedCategory && (
                    <span className="ml-2 px-2 py-1 bg-[var(--brand-teal)]/10 text-[var(--brand-teal)] rounded text-xs">
                      {selectedCategory}
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          /* Alternative Grid Layout */
          <div className={cn("mt-16", getLayoutClasses())}>
            {filteredImages.map((image, index) => (
              <div
                key={`${image.src}-${index}`}
                className="break-inside-avoid mb-4"
                data-reveal
              >
                <div className="relative overflow-hidden rounded-lg bg-[var(--bg-elevated)] group cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div 
                    className="relative"
                    style={{ aspectRatio: image.aspectRatio || '4/3' }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      onClick={() => setSelectedIndex(index)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {image.title && (
                    <div className="p-4">
                      <h4 className="font-medium text-[var(--fg)] group-hover:text-[var(--brand-teal)] transition-colors">
                        {image.title}
                      </h4>
                      {image.category && (
                        <p className="text-xs text-[var(--fg-muted)] mt-1 flex items-center gap-1">
                          <span>{getCategoryIcon(image.category)}</span>
                          {image.category}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Enhanced Navigation */}
        {filteredImages.length > 1 && layout === 'masonry' && (
          <div className="mt-8 flex justify-center items-center gap-4" data-reveal>
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev > 0 ? prev - 1 : filteredImages.length - 1
                )
              }
              className="flex h-12 w-12 items-center justify-center border border-[var(--line)] text-[var(--fg-muted)] transition hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)] hover:shadow-md rounded-full"
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex h-12 items-center px-6 text-sm text-[var(--fg-muted)] bg-[var(--bg-elevated)] rounded-full border border-[var(--line)]">
              <span className="font-medium text-[var(--fg)]">{selectedIndex + 1}</span>
              <span className="mx-2">of</span>
              <span>{filteredImages.length}</span>
              {selectedCategory && (
                <span className="ml-2 text-[var(--brand-teal)]">
                  • {selectedCategory}
                </span>
              )}
            </div>
            
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev < filteredImages.length - 1 ? prev + 1 : 0
                )
              }
              className="flex h-12 w-12 items-center justify-center border border-[var(--line)] text-[var(--fg-muted)] transition hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)] hover:shadow-md rounded-full"
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: var(--bg-elevated);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: var(--brand-teal);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--brand-teal);
          opacity: 0.8;
        }
      `}</style>
    </section>
  );
}