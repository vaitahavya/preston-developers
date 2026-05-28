"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type AmenityItem = {
  name: string;
  description?: string;
  category: string;
};

type Props = {
  amenities: AmenityItem[];
  className?: string;
};

export function AmenitiesTooltip({ amenities, className }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(amenities.map(a => a.category)));

  return (
    <div className={cn("space-y-4", className)}>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
        {categories.map(category => {
          const categoryAmenities = amenities.filter(a => a.category === category);
          const isActive = activeCategory === category;
          
          return (
            <button
              key={category}
              className={cn(
                "relative p-4 border text-left transition-all duration-200",
                isActive 
                  ? "border-[var(--brand-teal)] bg-[var(--brand-teal)]/10" 
                  : "border-[var(--line)] hover:border-[var(--brand-teal)]/50"
              )}
              onMouseEnter={() => setActiveCategory(category)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              <h4 className="text-sm font-semibold text-[var(--fg)] mb-1">{category}</h4>
              <p className="text-xs text-[var(--brand-teal)]">
                {categoryAmenities.length} amenities
              </p>
              
              {isActive && (
                <div className="absolute top-full left-0 right-0 z-10 mt-2 border border-[var(--line)] bg-[var(--bg)] p-4 shadow-xl">
                  <ul className="space-y-1">
                    {categoryAmenities.map((amenity, idx) => (
                      <li key={idx} className="text-xs text-[var(--fg-muted)]">
                        • {amenity.name}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}