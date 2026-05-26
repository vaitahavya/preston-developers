import Lenis from "lenis";

export type LenisInstance = Lenis;

export function createLenis() {
  return new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    syncTouch: true,
  });
}
