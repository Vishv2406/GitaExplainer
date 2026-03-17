export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center px-4 pt-20 pb-12 md:pt-28 md:pb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-10 h-px bg-primary/30 md:w-16" />
        <svg
          className="h-6 w-6 text-primary/70"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="5" />
          <line x1="12" y1="19" x2="12" y2="22" />
          <line x1="2" y1="12" x2="5" y2="12" />
          <line x1="19" y1="12" x2="22" y2="12" />
        </svg>
        <div className="w-10 h-px bg-primary/30 md:w-16" />
      </div>
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground tracking-wide text-balance mb-4">
        Bhagavad Gita
      </h1>
      <p className="font-sans text-base md:text-lg text-muted-foreground max-w-sm text-pretty">
        Timeless wisdom for modern life
      </p>
    </section>
  )
}
