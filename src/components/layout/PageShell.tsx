import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteNav } from "@/components/layout/SiteNav";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <SiteNav />
      <main id="main-content" className="pt-[72px]">
        {children}
      </main>
      <SiteFooter />
    </SmoothScroll>
  );
}
