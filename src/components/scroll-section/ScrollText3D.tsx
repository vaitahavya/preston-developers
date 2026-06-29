"use client";
import { useRef } from "react";

export interface TextBlockRef {
  element: HTMLDivElement | null;
}

const COPY = [
  { title: "Preston Developers", sub: "Crafting Project Designs That Define Skylines" },
  { title: "Built on Leadership", sub: "Decades of Trusted, Best-in-Class Execution" },
  { title: "Engineering the Future", sub: "A Vision Beyond the Present" },
];

export default function ScrollText2D({
  elementRefs,
}: {
  elementRefs: React.MutableRefObject<HTMLDivElement | null>[];
}) {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 1, pointerEvents: "none" }}>
      {COPY.map((block, i) => (
        <div
          key={i}
          ref={elementRefs[i]}
          className="absolute text-center text-white"
          style={{
            opacity: 0,
            transform: "translateY(30px) rotateX(15deg)",
            textShadow: "0 8px 32px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6), 0 2px 8px rgba(0,0,0,0.4)",
          }}
        >
          <h1 
            className="font-display font-bold leading-[0.9] tracking-[-0.02em] text-white mb-6"
            style={{
              fontSize: "clamp(2.5rem, 8vw, 6rem)",
              filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
            }}
          >
            {block.title}
          </h1>
          <p 
            className="text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto"
            style={{
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))",
            }}
          >
            {block.sub}
          </p>
        </div>
      ))}
    </div>
  );
}