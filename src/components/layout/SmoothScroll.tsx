"use client";

import { useEffect } from "react";
import { createLenis } from "@/lib/lenis";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/gsap";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    registerGsap();
    const lenis = createLenis();

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length && value !== undefined) {
          lenis.scrollTo(value, { immediate: true });
        }
        return lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
          right: window.innerWidth,
          bottom: window.innerHeight,
          x: 0,
          y: 0,
          toJSON: () => ({}),
        };
      },
    });

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          },
        );
      });
    });

    ScrollTrigger.refresh();

    return () => {
      ctx.revert();
      gsap.ticker.remove(ticker);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.scrollerProxy(document.documentElement, {});
    };
  }, []);

  return <>{children}</>;
}
