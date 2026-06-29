# Preston Developers - UI Component Specifications

## 1. Enhanced Hero Section Components

### A. Immersive Hero with Image Sequence

```typescript
// Enhanced Hero Component
interface ProjectHeroProps {
  project: 'amari' | 'ivy' | 'coliseum';
  images: {
    primary: string;      // Main hero image
    sequence: string[];   // Image sequence for animation
    mobile: string;       // Mobile-optimized image
  };
  content: {
    title: string;
    subtitle: string;
    stats: Array<{label: string, value: string}>;
    cta: {label: string, href: string};
  };
}
```

**Visual Layout:**
```
DESKTOP (21:9 aspect ratio):
┌─────────────────────────────────────────────┐
│  [Background: Amari Aerial View]            │
│                                             │
│  ┌─────────────────┐    ┌──────────────────┐│
│  │ PRESTON AMARI   │    │ 174 Luxury Villas││
│  │ 22-Acre Villa   │    │ 45,000 sq ft Club││
│  │ Community       │    │ 15+ Amenities    ││
│  │                 │    │ Ready to Move    ││
│  │ [Schedule Visit]│    └──────────────────┘│
│  └─────────────────┘                       │
└─────────────────────────────────────────────┘

MOBILE (4:3 aspect ratio):
┌──────────────────────┐
│ [Amari Aerial View]  │
│                      │
│ ┌──────────────────┐ │
│ │ PRESTON AMARI    │ │
│ │ 174 Luxury Villas│ │
│ │ 22-Acre Community│ │
│ │ [Schedule Visit] │ │
│ └──────────────────┘ │
└──────────────────────┘
```

### B. Split-Screen Storytelling Hero

```typescript
interface SplitHeroProps {
  leftContent: {
    type: 'image' | 'video';
    src: string;
    alt: string;
  };
  rightContent: {
    eyebrow: string;
    title: string;
    description: string;
    features: Array<{icon: string, text: string}>;
    cta: {label: string, href: string};
  };
}
```

**Layout Specification:**
```
DESKTOP:
┌─────────────────┬─────────────────────────────┐
│                 │ LUXURY REDEFINED            │
│                 │                             │
│  [Clubhouse     │ Preston Amari               │
│   Exterior      │ 174 Premium Villas          │
│   Image]        │                             │
│                 │ ✓ 45,000 sq ft Clubhouse    │
│                 │ ✓ Professional Sports Courts│
│                 │ ✓ Resort-Style Amenities   │
│                 │                             │
│                 │ [Explore Community]         │
└─────────────────┴─────────────────────────────┘
```

## 2. Advanced Gallery Systems

### A. Masonry Gallery with Smart Filtering

```typescript
interface MasonryGalleryProps {
  images: Array<{
    src: string;
    alt: string;
    category: string;
    title: string;
    aspectRatio: number;
    priority: 'high' | 'medium' | 'low';
  }>;
  categories: Array<{
    id: string;
    label: string;
    icon?: string;
    count: number;
  }>;
  layout: 'masonry' | 'justified' | 'grid';
}
```

**Masonry Grid Layout:**
```
DESKTOP (1400px container):
┌─────────────────────────────────────────────┐
│ [All] [Architecture] [Amenities] [Lifestyle]│
├─────────────┬───────┬─────────────────────────┤
│             │       │                         │
│  Primary    │ Img2  │      Large Feature      │
│  Hero       │       │      Image (Banquet)   │
│  Image      │───────│                         │ 
│  (Aerial)   │ Img3  │                         │
│             │       ├─────────┬───────────────┤
│             │───────│  Img5   │               │
├─────────────┤ Img4  │         │     Img6      │
│    Img7     │       │         │               │
└─────────────┴───────┴─────────┴───────────────┘
```

### B. Interactive 360° Gallery Component

```typescript
interface Interactive360Props {
  scenes: Array<{
    id: string;
    name: string;
    panoramaUrl: string;
    thumbnail: string;
    hotspots: Array<{
      x: number;
      y: number;
      title: string;
      description: string;
      linkedScene?: string;
    }>;
  }>;
  initialScene: string;
}
```

**360° Interface Layout:**
```
┌─────────────────────────────────────────────┐
│ [←] CLUBHOUSE MAIN HALL            [Menu] ▼ │
├─────────────────────────────────────────────┤
│                                             │
│     [360° Panoramic View Area]              │
│                                             │
│  ⊕ Banquet Hall    ⊕ Swimming Pool         │
│                                             │
│        ⊕ Fitness Center                     │
├─────────────────────────────────────────────┤
│ [Banquet Hall] [Pool Area] [Fitness] [Spa] │
└─────────────────────────────────────────────┘
```

## 3. Project-Specific Page Templates

### A. Amari Project Page Template

```typescript
interface AmariPageProps {
  hero: ProjectHeroProps;
  amenityCategories: Array<{
    id: string;
    title: string;
    description: string;
    images: GalleryImage[];
    features: string[];
  }>;
  villaShowcase: {
    configurations: Array<{type: string, sqft: string, features: string[]}>;
    interiorGallery: GalleryImage[];
    specifications: Array<{category: string, items: string[]}>;
  };
}
```

**Page Structure:**
```
1. HERO SECTION
   ├── Aerial community view (21:9)
   ├── Floating stats overlay
   └── Scroll indicator

2. AMENITY SHOWCASE
   ├── Category Navigation (Sports | Wellness | Social | Dining)
   ├── Basketball Courts (Hero image + specs)
   ├── Sand Volleyball (Grid item)
   ├── Banquet Hall (Grid item)  
   ├── Swimming Pool (Grid item)
   └── Additional amenities grid

3. VILLA EXPERIENCE
   ├── Interior Kitchen (Split-screen)
   ├── Living Room (Split-screen)
   ├── Villa Exterior (Feature callouts)
   └── Configuration options

4. COMMUNITY FEATURES
   ├── Night street view
   ├── Security features
   ├── Infrastructure details
   └── Resident testimonials

5. INVESTMENT DETAILS
   ├── Pricing information
   ├── Payment plans
   ├── ROI projections
   └── Contact/CTA section
```

### B. Ivy Project Page Template

```typescript
interface IvyPageProps {
  sustainabilityFeatures: Array<{
    feature: string;
    description: string;
    image: string;
    certification?: string;
  }>;
  customizationOptions: Array<{
    room: string;
    options: Array<{name: string, image: string, price?: string}>;
  }>;
}
```

**Ivy-Specific Layout Focus:**
```
1. SUSTAINABLE LUXURY HERO
   ├── Villa exterior with feature annotations
   │   ├── Solar panels highlight
   │   ├── Premium materials callout
   │   └── Landscaping details

2. GREEN FEATURES SHOWCASE
   ├── Energy efficiency metrics
   ├── Environmental certifications
   ├── Sustainable materials gallery
   └── Cost savings calculator

3. CUSTOMIZATION STUDIO
   ├── Room-by-room configurator
   ├── Material selection gallery
   ├── Finish options with pricing
   └── 3D visualization tools
```

## 4. Advanced Interactive Elements

### A. Hotspot Image Component

```typescript
interface HotspotImageProps {
  src: string;
  alt: string;
  hotspots: Array<{
    x: number;        // Percentage from left
    y: number;        // Percentage from top
    title: string;
    description: string;
    image?: string;   // Optional detail image
    link?: string;    // Optional navigation
  }>;
  aspectRatio?: string;
}
```

**Hotspot Interaction Pattern:**
```
┌─────────────────────────────────────────────┐
│        [Basketball Court Image]             │
│                                             │
│     ⊕ Professional Lighting                 │
│  ⊕ Court Specifications                     │
│                                             │
│              ⊕ Seating Area                 │
│                     ⊕ Equipment Storage     │
└─────────────────────────────────────────────┘

HOVER STATE:
┌─────────────────────────────────────────────┐
│        [Basketball Court Image]             │
│                                             │
│     ┌─────────────────────┐                 │
│  ⊕ │ Professional Lighting│                 │
│    │ LED floodlights with │                 │
│    │ anti-glare technology│                 │
│    │ [Learn More]        │                 │
│    └─────────────────────┘                 │
└─────────────────────────────────────────────┘
```

### B. Before/After Slider Component

```typescript
interface BeforeAfterSliderProps {
  beforeImage: {src: string, alt: string, label?: string};
  afterImage: {src: string, alt: string, label?: string};
  orientation: 'horizontal' | 'vertical';
  initialPosition?: number; // 0-100, default 50
}
```

**Slider Interface:**
```
┌─────────────────────────────────────────────┐
│                     ◐                       │
│ [Construction]      │      [Completed]      │
│                     │                       │
│  Raw land with     │   Finished community   │
│  construction      │   with landscaping     │
│  in progress       │   and amenities        │
│                     │                       │
│ ← Drag slider to compare phases →           │
└─────────────────────────────────────────────┘
```

## 5. Mobile-Optimized Components

### A. Mobile Gallery Stack

```typescript
interface MobileGalleryStackProps {
  images: GalleryImage[];
  stackHeight: string;  // e.g., "75vh"
  parallaxIntensity: number; // 0-1
  snapToCards: boolean;
}
```

**Mobile Stack Layout:**
```
MOBILE (375px width):
┌───────────────────┐
│ [Category Pills]  │ ← Horizontal scroll
├───────────────────┤
│                   │
│  [Primary Image]  │ ← 4:3 aspect ratio
│                   │
├───────────────────┤
│ ● ○ ○ ○          │ ← Dot indicators
├───────────────────┤
│ [Stacked Cards]   │ ← Swipeable stack
│  ┌─────────────┐  │
│  │   Image 2   │  │
│  │             │  │
│  └─────────────┘  │
│    ┌─────────────┐│
│    │   Image 3   ││
└────┴─────────────┘┘
```

### B. Progressive Image Loading

```typescript
interface ProgressiveImageProps {
  src: string;
  alt: string;
  placeholder?: string;     // Low-res placeholder
  blurDataURL?: string;     // Base64 blur placeholder
  quality?: number;         // 1-100
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
}
```

**Loading Sequence:**
```
1. PLACEHOLDER (Instant)
   ┌─────────────────┐
   │ [Blur/skeleton] │
   │                 │
   └─────────────────┘

2. LOW-RES (< 1s)
   ┌─────────────────┐
   │ [Pixelated img] │
   │                 │
   └─────────────────┘

3. HIGH-RES (Progressive)
   ┌─────────────────┐
   │ [Sharp image]   │
   │                 │
   └─────────────────┘
```

## 6. Performance-Optimized Components

### A. Virtual Scrolling Gallery

```typescript
interface VirtualGalleryProps {
  images: GalleryImage[];
  itemHeight: number;
  containerHeight: number;
  overscan?: number;        // Buffer items outside viewport
  onItemClick: (index: number) => void;
}
```

**Virtual Scrolling Pattern:**
```
RENDERED ITEMS (Only visible + buffer):
┌─────────────────┐ ← Buffer item (hidden)
│ [Image N-1]     │
├─────────────────┤ ← Viewport start
│ [Image N]       │ ← Visible
│ [Image N+1]     │ ← Visible  
│ [Image N+2]     │ ← Visible
├─────────────────┤ ← Viewport end
│ [Image N+3]     │ ← Buffer item (hidden)
└─────────────────┘
```

### B. Intersection Observer Image Loading

```typescript
interface LazyImageProps {
  src: string;
  alt: string;
  threshold?: number;      // 0-1, when to start loading
  rootMargin?: string;     // e.g., "100px"
  fadeInDuration?: number; // ms
}
```

## 7. Accessibility Features

### A. Screen Reader Optimized Gallery

```typescript
interface A11yGalleryProps {
  images: GalleryImage[];
  ariaLabel: string;
  announceChanges: boolean;
  keyboardNavigation: boolean;
  focusManagement: 'auto' | 'manual';
}
```

**ARIA Structure:**
```html
<div role="region" aria-label="Preston Amari Image Gallery">
  <div role="tablist" aria-label="Image categories">
    <button role="tab" aria-selected="true" aria-controls="architecture-panel">
      Architecture
    </button>
  </div>
  
  <div role="tabpanel" id="architecture-panel" aria-labelledby="architecture-tab">
    <div role="grid" aria-label="Architecture images">
      <div role="gridcell" tabindex="0">
        <img src="..." alt="Preston Amari aerial view showing 174 villas..." />
      </div>
    </div>
  </div>
</div>
```

### B. High Contrast Mode Support

```css
/* High contrast mode adaptations */
@media (prefers-contrast: high) {
  .gallery-overlay {
    background: rgba(0, 0, 0, 0.9);
    border: 2px solid #ffffff;
  }
  
  .category-filter {
    border: 2px solid currentColor;
    background: transparent;
  }
  
  .hotspot-marker {
    border: 3px solid #ffffff;
    background: #000000;
  }
}
```

## Implementation Priority

**Phase 1 (Immediate):**
1. Enhanced ProjectGallery with category filtering
2. Mobile-optimized image loading
3. Hotspot annotation system

**Phase 2 (Next Sprint):**
1. 360° panoramic components
2. Before/after sliders
3. Virtual scrolling optimization

**Phase 3 (Future Enhancement):**
1. AR/VR integration hooks
2. Advanced customization tools
3. Real-time availability integration

This component library will create a premium, performant experience that showcases Preston's luxury developments effectively across all devices and interaction patterns.