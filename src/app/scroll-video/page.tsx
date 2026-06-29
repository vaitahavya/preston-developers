import ScrollVideoSection from "@/components/scroll-section/ScrollVideoSection";

export default function ScrollVideoPage() {
  return (
    <main>
      <ScrollVideoSection />
      {/* Add some content after to test scroll completion */}
      <div className="min-h-screen bg-gray-900 p-8">
        <h2 className="text-4xl font-bold text-white">Content After Scroll Video</h2>
        <p className="text-white/80 mt-4">
          This section appears after the scroll-driven video sequence.
        </p>
      </div>
    </main>
  );
}