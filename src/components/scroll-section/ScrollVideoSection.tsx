"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as THREE from "three";
import { useImageSequence } from "./useImageSequence";
import ImageSequenceCanvas from "./ImageSequenceCanvas";
import ScrollText2D from "./ScrollText3D";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollVideoSection() {
  const { images, loaded, loadProgress, frameCount } = useImageSequence();
  const frameRef = useRef(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const element1 = useRef<HTMLDivElement | null>(null);
  const element2 = useRef<HTMLDivElement | null>(null);
  const element3 = useRef<HTMLDivElement | null>(null);
  const elementRefs = [element1, element2, element3];

  useEffect(() => {
    if (!loaded || !sectionRef.current) return;

    const ctx = gsap.context(() => {
      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: false, // section itself is tall (400vh); pin an inner sticky layer instead, see CSS below
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress; // 0 -> 1
          frameRef.current = progress * (frameCount - 1);
          updateTextBlocks(progress);
        },
      });

      function updateTextBlocks(progress: number) {
        const ranges = [
          [0, 0.33],
          [0.33, 0.66],
          [0.66, 1.0],
        ];
        ranges.forEach(([start, end], i) => {
          const element = elementRefs[i].current;
          if (!element) return;

          // local progress within this block's range, with fade margins
          const span = end - start;
          const fadeIn = start + span * 0.15;
          const fadeOutStart = end - span * 0.15;

          let opacity = 0;
          if (progress >= start && progress <= end) {
            if (progress < fadeIn) {
              opacity = (progress - start) / (fadeIn - start);
            } else if (progress > fadeOutStart) {
              opacity = 1 - (progress - fadeOutStart) / (end - fadeOutStart);
            } else {
              opacity = 1;
            }
          }

          // Apply 2D transforms with 3D-like effects
          element.style.opacity = opacity.toString();
          element.style.visibility = opacity > 0.01 ? 'visible' : 'hidden';
          
          // 3D-like transform effects
          const translateY = (1 - opacity) * 30;
          const rotateX = (1 - opacity) * 15;
          const scale = 0.9 + (opacity * 0.1);
          
          element.style.transform = `translateY(${translateY}px) rotateX(${rotateX}deg) scale(${scale})`;
        });
      }

      return () => st.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, [loaded, frameCount]);

  return (
    <section ref={sectionRef} className="relative" style={{ height: "500vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ perspective: "1000px" }}>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black text-white z-20">
            <div className="text-center">
              <div className="mb-6">
                <div className="mb-4 h-1 w-80 bg-white/10 mx-auto rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[var(--brand-teal)] to-[var(--brand-teal-light)] transition-all duration-300 ease-out rounded-full" 
                    style={{ width: `${loadProgress * 100}%` }}
                  />
                </div>
                <p className="text-xs text-white/50 mb-2">
                  {Math.round(loadProgress * frameCount)} / {frameCount} frames
                </p>
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/70">
                Loading Cinematic Experience...
              </p>
              <p className="text-xs text-white/40 mt-2">
                {Math.round(loadProgress * 100)}% Complete
              </p>
            </div>
          </div>
        )}
        <ImageSequenceCanvas images={images} frameRef={frameRef} />
        <ScrollText2D elementRefs={elementRefs} />
      </div>
    </section>
  );
}