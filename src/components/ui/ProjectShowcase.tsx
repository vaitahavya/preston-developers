"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { imageMetadata, imageConfigs } from "@/lib/project-media";

interface ProjectImage {
  src: string;
  category: string;
  featured?: boolean;
}

interface ProjectShowcaseProps {
  images: ProjectImage[];
  title: string;
  description: string;
  className?: string;
}

const categoryLabels = {
  lifestyle: "Lifestyle",
  sports: "Sports & Recreation", 
  amenities: "Premium Amenities",
  commercial: "Commercial Spaces",
  interiors: "Designer Interiors",
  architecture: "Architecture"
};

export function ProjectShowcase({ 
  images, 
  title, 
  description, 
  className 
}: ProjectShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Get unique categories from images
  const categories = [...new Set(images.map(img => img.category))];
  
  // Filter images by selected category
  const filteredImages = selectedCategory 
    ? images.filter(img => img.category === selectedCategory)
    : images;
  
  // Get featured image (first featured or first image)
  const featuredImage = images.find(img => img.featured) || images[0];

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--fg)] md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-[var(--fg-muted)] md:text-xl">
            {description}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
              selectedCategory === null
                ? "bg-[var(--brand-teal)] text-black"
                : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] hover:bg-[var(--brand-teal)] hover:text-black"
            )}
          >
            All Projects
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                selectedCategory === category
                  ? "bg-[var(--brand-teal)] text-black"
                  : "bg-[var(--bg-elevated)] text-[var(--fg-muted)] hover:bg-[var(--brand-teal)] hover:text-black"
              )}
            >
              {categoryLabels[category as keyof typeof categoryLabels] || category}
            </button>
          ))}
        </div>

        {/* Featured Image Section */}
        {featuredImage && !selectedCategory && (
          <div className="mb-12">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-[var(--bg-elevated)]">
              <Image
                src={featuredImage.src}
                alt={imageMetadata[featuredImage.src as keyof typeof imageMetadata]?.alt || "Preston Developers project"}
                fill
                sizes={imageConfigs.hero.sizes}
                priority={imageConfigs.hero.priority}
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <div className="max-w-2xl">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--brand-teal)] text-black text-sm font-semibold mb-3">
                    Featured
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {imageMetadata[featuredImage.src as keyof typeof imageMetadata]?.title || title}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => {
            const metadata = imageMetadata[image.src as keyof typeof imageMetadata];
            
            return (
              <div
                key={`${image.src}-${index}`}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-[var(--bg-elevated)] cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <Image
                  src={image.src}
                  alt={metadata?.alt || `Preston Developers ${image.category}`}
                  fill
                  sizes={imageConfigs.gallery.sizes}
                  className="object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 rounded bg-[var(--brand-teal)] text-black text-xs font-semibold mb-2">
                    {categoryLabels[image.category as keyof typeof categoryLabels] || image.category}
                  </span>
                  {metadata?.title && (
                    <h4 className="text-white font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {metadata.title}
                    </h4>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl max-h-[90vh] w-full">
              <Image
                src={selectedImage}
                alt={imageMetadata[selectedImage as keyof typeof imageMetadata]?.alt || "Preston Developers project"}
                width={1200}
                height={800}
                className="w-full h-auto object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-200 flex items-center justify-center"
                aria-label="Close image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}