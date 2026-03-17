import Link from "next/link"
import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Background with subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" aria-hidden="true" />
      
      {/* Decorative lotus pattern (subtle background) */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
          <pattern id="lotus-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <circle cx="10" cy="10" r="3" fill="currentColor" className="text-primary" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#lotus-pattern)" />
        </svg>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        {/* Decorative divider with Om symbol */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/40 md:w-20" />
          <div className="relative w-12 h-12 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/10 animate-pulse" />
            <span className="font-serif text-2xl text-primary" aria-hidden="true">ॐ</span>
          </div>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/40 md:w-20" />
        </div>

        {/* Title */}
        <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-wide text-balance mb-4">
          Bhagavad Gita
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-lg md:text-xl text-primary/80 italic mb-4">
          श्रीमद्भगवद्गीता
        </p>

        <p className="font-sans text-base md:text-lg text-muted-foreground max-w-md text-pretty mb-10 leading-relaxed">
          An eternal conversation on life, duty, and self
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/chapter/1"
            className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-sans text-sm tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2 focus:ring-offset-background"
          >
            <span>Begin the Journey</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>

          <button
            type="button"
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-card/60 border border-border/40 text-muted-foreground hover:text-foreground hover:bg-card transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/40"
            aria-label="Listen to introductory shlok"
          >
            <Play className="w-4 h-4" />
            <span className="text-sm">Listen to Intro Shlok</span>
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Explore</span>
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
