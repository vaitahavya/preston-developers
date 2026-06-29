"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Amenity {
  id: string;
  name: string;
  description: string;
  image: string;
  category: "sports" | "wellness" | "social" | "family";
  features: string[];
}

interface AmenitiesShowcaseProps {
  amenities: Amenity[];
  title?: string;
  subtitle?: string;
  className?: string;
}

const categoryConfig = {
  sports: {
    label: "Sports & Recreation",
    icon: "🏀",
    color: "from-blue-500 to-blue-600"
  },
  wellness: {
    label: "Health & Wellness", 
    icon: "🧘‍♀️",
    color: "from-green-500 to-green-600"
  },
  social: {
    label: "Social Spaces",
    icon: "🎉",
    color: "from-purple-500 to-purple-600"
  },
  family: {
    label: "Family & Kids",
    icon: "👨‍👩‍👧‍👦",
    color: "from-orange-500 to-orange-600"
  }
};

export function AmenitiesShowcase({ 
  amenities, 
  title = "World-Class Amenities",
  subtitle = "Experience premium lifestyle at its finest",
  className 
}: AmenitiesShowcaseProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [hoveredAmenity, setHoveredAmenity] = useState<string | null>(null);

  const categories = [...new Set(amenities.map(a => a.category))];
  const filteredAmenities = selectedCategory 
    ? amenities.filter(a => a.category === selectedCategory)
    : amenities;

  return (
    <section className={cn("py-16 md:py-24 bg-[var(--bg-elevated)]", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--fg)] md:text-4xl lg:text-5xl mb-4">
            {title}
          </h2>
          <p className="text-lg text-[var(--fg-muted)] md:text-xl max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border",
              selectedCategory === null
                ? "bg-[var(--brand-teal)] text-black border-[var(--brand-teal)]"
                : "bg-transparent text-[var(--fg-muted)] border-[var(--line)] hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
            )}
          >
            <span>✨</span>
            All Amenities
          </button>
          {categories.map((category) => {
            const config = categoryConfig[category];
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 border",
                  selectedCategory === category
                    ? "bg-[var(--brand-teal)] text-black border-[var(--brand-teal)]"
                    : "bg-transparent text-[var(--fg-muted)] border-[var(--line)] hover:border-[var(--brand-teal)] hover:text-[var(--brand-teal)]"
                )}
              >
                <span>{config.icon}</span>
                {config.label}
              </button>
            );
          })}
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="group relative bg-[var(--bg)] rounded-2xl overflow-hidden border border-[var(--line)] hover:border-[var(--brand-teal)]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--brand-teal)]/10"
              onMouseEnter={() => setHoveredAmenity(amenity.id)}
              onMouseLeave={() => setHoveredAmenity(null)}
            >
              {/* Image */}
              <div className="relative aspect-[16/12] overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={cn(
                    "inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold text-white",
                    `bg-gradient-to-r ${categoryConfig[amenity.category].color}`
                  )}>
                    {categoryConfig[amenity.category].icon}
                    {categoryConfig[amenity.category].label}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[var(--fg)] mb-2 group-hover:text-[var(--brand-teal)] transition-colors duration-300">
                  {amenity.name}
                </h3>
                <p className="text-[var(--fg-muted)] mb-4 line-clamp-2">
                  {amenity.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {amenity.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-[var(--fg-muted)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--brand-teal)]" />
                      {feature}
                    </div>
                  ))}
                  {amenity.features.length > 3 && (
                    <p className="text-xs text-[var(--fg-muted)] mt-2">
                      +{amenity.features.length - 3} more features
                    </p>
                  )}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-t from-[var(--brand-teal)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              )} />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--brand-teal)] text-black font-semibold rounded-full hover:bg-[var(--brand-teal-light)] transition-colors duration-300">
            Schedule Site Visit
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}