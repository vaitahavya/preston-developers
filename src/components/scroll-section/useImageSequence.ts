import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 201;
const getFramePath = (i: number) =>
  `/sequence/ezgif-frame-${String(i + 1).padStart(3, "0")}.jpg`;

export function useImageSequence() {
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  useEffect(() => {
    let cancelled = false;
    let loadedCount = 0;
    const imgs: HTMLImageElement[] = [];

    console.log(`Starting to load ${FRAME_COUNT} frames...`);

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      img.onload = () => {
        loadedCount++;
        const progress = loadedCount / FRAME_COUNT;
        setLoadProgress(progress);
        
        if (loadedCount === FRAME_COUNT && !cancelled) {
          setLoaded(true);
          console.log(`All ${FRAME_COUNT} frames loaded successfully!`);
        }
      };
      img.onerror = () => {
        console.warn(`Failed to load frame ${i + 1}`);
        loadedCount++;
        const progress = loadedCount / FRAME_COUNT;
        setLoadProgress(progress);
        
        if (loadedCount === FRAME_COUNT && !cancelled) {
          setLoaded(true);
        }
      };
      imgs.push(img);
    }
    imagesRef.current = imgs;

    return () => {
      cancelled = true;
    };
  }, []);

  return { images: imagesRef, loaded, loadProgress, frameCount: FRAME_COUNT };
}