import ScrollVideoSection from "@/components/scroll-section/ScrollVideoSection";
import { HomeContent } from "@/components/pages/HomeContent";
import { SiteNav } from "@/components/layout/SiteNav";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function ThreeJSPage() {
  return (
    <div>
      <SiteNav />
      
      {/* Scroll-Driven Video Section */}
      <ScrollVideoSection />
      
      {/* Main Content */}
      <main id="main-content" className="relative z-20 bg-[var(--bg)]">
        <HomeContent />
      </main>
      
      <SiteFooter />
    </div>
  );
}