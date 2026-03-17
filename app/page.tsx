import { HeroSection } from "@/components/hero-section"
import { ChapterGrid } from "@/components/chapter-grid"
import { ReadingModeToggle } from "@/components/reading-mode-toggle"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle texture overlay */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>
      
      {/* Reading mode toggle */}
      <ReadingModeToggle />
      
      <HeroSection />
      <ChapterGrid />
      
      {/* Footer */}
      <footer className="relative py-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-border/50" />
          <span className="font-serif text-primary/60 text-xl" aria-hidden="true">ॐ</span>
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-border/50" />
        </div>
        <p className="text-xs text-muted-foreground tracking-widest uppercase">
          A Journey of Self-Discovery
        </p>
      </footer>
    </main>
  )
}
