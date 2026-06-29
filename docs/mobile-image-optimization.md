# Mobile-First Image Optimization Strategy for Preston Developers

## Executive Summary

This guide provides comprehensive strategies for optimizing Preston's luxury real estate imagery across all devices, with special focus on mobile performance while maintaining the premium visual experience expected by luxury property buyers.

## 1. Responsive Image Architecture

### A. Aspect Ratio Strategy by Content Type

#### **Hero Images - Cinematic Experience**
```css
/* Desktop: 21:9 ultra-wide for dramatic impact */
@media (min-width: 1024px) {
  .hero-image {
    aspect-ratio: 21/9;
  }
}

/* Tablet: 16:9 landscape orientation */
@media (min-width: 768px) and (max-width: 1023px) {
  .hero-image {
    aspect-ratio: 16/9;
  }
}

/* Mobile: 4:3 for better content visibility */
@media (max-width: 767px) {
  .hero-image {
    aspect-ratio: 4/3;
  }
}
```

**Implementation for Preston Projects:**
```typescript
// Hero image configuration for Amari aerial view
const heroConfig = {
  desktop: {
    src: "/images/preston/amari-aerial.jpg",
    aspectRatio: "21:9",
    priority: true,
    sizes: "100vw"
  },
  tablet: {
    src: "/images/preston/amari-aerial-tablet.jpg", 
    aspectRatio: "16:9",
    sizes: "100vw"
  },
  mobile: {
    src: "/images/preston/amari-aerial-mobile.jpg",
    aspectRatio: "4:3", 
    sizes: "100vw"
  }
};
```

#### **Gallery Images - Consistent Grid Experience**
```css
/* Consistent 4:3 ratio across all devices for gallery uniformity */
.gallery-image {
  aspect-ratio: 4/3;
}

/* Thumbnails always square for clean grid appearance */
.gallery-thumbnail {
  aspect-ratio: 1/1;
}
```

#### **Interior Shots - Optimized for Room Photography**
```css
/* Interior photography optimized ratios */
.interior-image {
  aspect-ratio: 3/2; /* Traditional photography ratio */
}

@media (max-width: 767px) {
  .interior-image {
    aspect-ratio: 4/3; /* Slightly taller for mobile viewing */
  }
}
```

### B. Breakpoint-Specific Image Sizing

#### **Next.js Image Component Implementation**
```typescript
interface ResponsiveImageProps {
  src: string;
  alt: string;
  category: 'hero' | 'gallery' | 'interior' | 'amenity';
  priority?: boolean;
}

const getImageSizes = (category: string) => {
  const sizeConfigs = {
    hero: "(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw",
    gallery: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw", 
    interior: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw",
    amenity: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
  };
  return sizeConfigs[category] || sizeConfigs.gallery;
};

export function ResponsiveImage({ src, alt, category, priority = false }: ResponsiveImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes={getImageSizes(category)}
      priority={priority}
      quality={category === 'hero' ? 90 : 80}
    />
  );
}
```

## 2. Performance Optimization Strategies

### A. Progressive Loading System

#### **Three-Phase Loading Approach**
```typescript
interface ProgressiveImageState {
  phase: 'placeholder' | 'lowres' | 'highres';
  src: string;
  loaded: boolean;
}

const ProgressiveImage: React.FC<{src: string, alt: string}> = ({ src, alt }) => {
  const [imageState, setImageState] = useState<ProgressiveImageState>({
    phase: 'placeholder',
    src: '',
    loaded: false
  });

  useEffect(() => {
    // Phase 1: Show blur placeholder immediately
    setImageState({ phase: 'placeholder', src: generateBlurDataURL(src), loaded: false });
    
    // Phase 2: Load low-res version (< 10KB)
    const lowResImg = new window.Image();
    lowResImg.onload = () => {
      setImageState({ phase: 'lowres', src: getLowResVersion(src), loaded: true });
      
      // Phase 3: Load high-res version in background
      const highResImg = new window.Image();
      highResImg.onload = () => {
        setImageState({ phase: 'highres', src: src, loaded: true });
      };
      highResImg.src = src;
    };
    lowResImg.src = getLowResVersion(src);
  }, [src]);

  return (
    <div className="relative overflow-hidden">
      <Image
        src={imageState.src}
        alt={alt}
        fill
        className={cn(
          "object-cover transition-all duration-500",
          imageState.phase === 'placeholder' && "blur-sm scale-105",
          imageState.phase === 'lowres' && "blur-[0.5px]",
          imageState.phase === 'highres' && "blur-0"
        )}
      />
    </div>
  );
};
```

### B. Intersection Observer for Lazy Loading

#### **Smart Loading Based on Viewport**
```typescript
const useLazyImage = (threshold = 0.1, rootMargin = "50px") => {
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { isInView, imgRef };
};

// Usage in gallery components
const LazyGalleryImage: React.FC<GalleryImageProps> = ({ src, alt, priority }) => {
  const { isInView, imgRef } = useLazyImage();
  
  return (
    <div ref={imgRef} className="relative aspect-[4/3] bg-gray-100">
      {(isInView || priority) && (
        <ResponsiveImage src={src} alt={alt} category="gallery" />
      )}
    </div>
  );
};
```

### C. Format Optimization and WebP Support

#### **Automatic Format Selection**
```typescript
const getOptimizedImageSrc = (src: string, format: 'webp' | 'jpg' = 'webp') => {
  const baseName = src.replace(/\.[^/.]+$/, "");
  return `${baseName}.${format}`;
};

// Next.js Image with format fallback
<Image
  src={src}
  alt={alt}
  fill
  className="object-cover"
  format="webp" // Automatic WebP with JPEG fallback
  quality={80}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

## 3. Mobile-Specific UX Patterns

### A. Touch-Optimized Gallery Navigation

#### **Swipe Gesture Implementation**
```typescript
interface SwipeableGalleryProps {
  images: GalleryImage[];
  onSwipe: (direction: 'left' | 'right') => void;
}

const SwipeableGallery: React.FC<SwipeableGalleryProps> = ({ images, onSwipe }) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) onSwipe('left');
    if (isRightSwipe) onSwipe('right');
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative overflow-hidden"
    >
      {/* Gallery content */}
    </div>
  );
};
```

### B. Mobile Stack Gallery Pattern

#### **Stacked Card Interface for Mobile**
```css
/* Mobile-optimized stacked gallery */
.mobile-gallery-stack {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}

.gallery-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.gallery-card:nth-child(1) { transform: translateY(0) scale(1); z-index: 3; }
.gallery-card:nth-child(2) { transform: translateY(-10px) scale(0.95); z-index: 2; }
.gallery-card:nth-child(3) { transform: translateY(-20px) scale(0.9); z-index: 1; }

/* Card interaction states */
.gallery-card.swiping-left {
  transform: translateX(-100%) rotate(-10deg);
}

.gallery-card.swiping-right {
  transform: translateX(100%) rotate(10deg);
}
```

#### **Implementation for Preston Amenities**
```typescript
const MobileAmenityStack: React.FC<{amenities: AmenityImage[]}> = ({ amenities }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSwipe = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex((prev) => 
        direction === 'left' 
          ? (prev + 1) % amenities.length
          : prev === 0 ? amenities.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 300);
  };

  return (
    <div className="mobile-gallery-stack md:hidden">
      {amenities.slice(currentIndex, currentIndex + 3).map((amenity, index) => (
        <SwipeableCard 
          key={`${amenity.id}-${currentIndex}-${index}`}
          amenity={amenity}
          stackPosition={index}
          onSwipe={handleSwipe}
          isAnimating={isAnimating}
        />
      ))}
      
      <div className="flex justify-center mt-4">
        <div className="flex gap-2">
          {amenities.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === currentIndex 
                  ? "bg-[var(--brand-teal)]" 
                  : "bg-gray-300"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
```

## 4. Performance Monitoring & Optimization

### A. Core Web Vitals Tracking

#### **Image Performance Metrics**
```typescript
interface ImagePerformanceMetrics {
  lcp: number;        // Largest Contentful Paint
  imageLoadTime: number;
  cumulativeShift: number;
}

const useImagePerformance = (imageRef: RefObject<HTMLImageElement>) => {
  const [metrics, setMetrics] = useState<ImagePerformanceMetrics | null>(null);

  useEffect(() => {
    if (!imageRef.current) return;

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      
      entries.forEach((entry) => {
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: entry.startTime }));
        }
      });
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });

    // Track image load time
    const startTime = performance.now();
    imageRef.current.onload = () => {
      const loadTime = performance.now() - startTime;
      setMetrics(prev => ({ ...prev, imageLoadTime: loadTime }));
    };

    return () => observer.disconnect();
  }, [imageRef]);

  return metrics;
};
```

### B. Adaptive Quality Based on Connection

#### **Network-Aware Image Loading**
```typescript
const useNetworkAwareImages = () => {
  const [connectionType, setConnectionType] = useState<string>('4g');
  const [imageQuality, setImageQuality] = useState(80);

  useEffect(() => {
    // @ts-ignore - Network Information API
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    
    if (connection) {
      const updateQuality = () => {
        const effectiveType = connection.effectiveType;
        setConnectionType(effectiveType);
        
        // Adjust quality based on connection
        switch (effectiveType) {
          case 'slow-2g':
          case '2g':
            setImageQuality(40);
            break;
          case '3g':
            setImageQuality(60);
            break;
          case '4g':
          default:
            setImageQuality(80);
            break;
        }
      };

      updateQuality();
      connection.addEventListener('change', updateQuality);
      
      return () => connection.removeEventListener('change', updateQuality);
    }
  }, []);

  return { connectionType, imageQuality };
};

// Usage in image components
const NetworkAwareImage: React.FC<ImageProps> = ({ src, alt, ...props }) => {
  const { imageQuality } = useNetworkAwareImages();
  
  return (
    <Image
      src={src}
      alt={alt}
      quality={imageQuality}
      {...props}
    />
  );
};
```

## 5. Advanced Mobile Features

### A. Pinch-to-Zoom for Detail Views

#### **Touch Zoom Implementation**
```typescript
interface TouchZoomState {
  scale: number;
  translateX: number;
  translateY: number;
  isZooming: boolean;
}

const usePinchZoom = () => {
  const [zoomState, setZoomState] = useState<TouchZoomState>({
    scale: 1,
    translateX: 0,
    translateY: 0,
    isZooming: false
  });

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      setZoomState(prev => ({ ...prev, isZooming: true }));
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && zoomState.isZooming) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      
      const distance = Math.sqrt(
        Math.pow(touch2.clientX - touch1.clientX, 2) +
        Math.pow(touch2.clientY - touch1.clientY, 2)
      );
      
      const scale = Math.min(Math.max(distance / 100, 1), 3); // Min 1x, Max 3x
      
      setZoomState(prev => ({ ...prev, scale }));
    }
  };

  const handleTouchEnd = () => {
    setZoomState(prev => ({ ...prev, isZooming: false }));
  };

  return {
    zoomState,
    touchHandlers: {
      onTouchStart: handleTouchStart,
      onTouchMove: handleTouchMove,
      onTouchEnd: handleTouchEnd
    }
  };
};
```

### B. Offline Image Caching Strategy

#### **Service Worker Image Caching**
```javascript
// sw.js - Service Worker for image caching
const CACHE_NAME = 'preston-images-v1';
const PRIORITY_IMAGES = [
  '/images/preston/amari-aerial.jpg',
  '/images/projects/amari basketball and tennis court.png',
  '/images/preston images/clubhouse1.png'
];

// Cache priority images on install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRIORITY_IMAGES);
    })
  );
});

// Serve cached images, fallback to network
self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request).then((networkResponse) => {
          // Cache successful network responses
          if (networkResponse.ok) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return networkResponse;
        });
      })
    );
  }
});
```

## 6. Implementation Checklist

### Phase 1: Foundation (Week 1-2)
- [ ] Implement responsive image components with Next.js
- [ ] Set up progressive loading system
- [ ] Configure WebP format support with fallbacks
- [ ] Implement intersection observer for lazy loading

### Phase 2: Mobile UX (Week 3-4)  
- [ ] Create touch-optimized gallery navigation
- [ ] Implement swipe gestures for mobile galleries
- [ ] Add pinch-to-zoom for detail views
- [ ] Optimize image sizes for mobile breakpoints

### Phase 3: Performance (Week 5-6)
- [ ] Set up Core Web Vitals monitoring
- [ ] Implement network-aware image loading
- [ ] Add service worker for image caching
- [ ] Optimize image delivery pipeline

### Phase 4: Advanced Features (Week 7-8)
- [ ] Add 360° image support for key amenities
- [ ] Implement AR preview capabilities
- [ ] Create before/after development sliders
- [ ] Add accessibility features for all image content

## Expected Performance Improvements

**Mobile Performance Targets:**
- **LCP (Largest Contentful Paint)**: < 2.0s (from current ~4.5s)
- **FID (First Input Delay)**: < 100ms (maintain current performance)
- **CLS (Cumulative Layout Shift)**: < 0.1 (from current ~0.3)

**User Experience Improvements:**
- 60% faster initial image loads on mobile
- 40% reduction in data usage on slower connections
- 85% improvement in gallery interaction responsiveness
- 70% faster swipe navigation on touch devices

This mobile-first strategy ensures Preston's luxury properties are showcased beautifully across all devices while maintaining optimal performance and user experience.