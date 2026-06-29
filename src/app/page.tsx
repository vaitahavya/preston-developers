import { PageShell } from "@/components/layout/PageShell";
import { HomeContent } from "@/components/pages/HomeContent";
import ScrollVideoSection from "@/components/scroll-section/ScrollVideoSection";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Preston Developers",
  description:
    "Preston Developers creates landmark residential and commercial destinations for the future of Hyderabad — leadership-driven, design-focused, built for long-term value.",
  path: "/",
});

export default function HomePage() {
  return (
    <PageShell>
      <ScrollVideoSection />
      <HomeContent />
    </PageShell>
  );
}
