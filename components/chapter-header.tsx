import Link from "next/link"
import { ChevronLeft } from "lucide-react"

interface ChapterHeaderProps {
  chapterNumber: number
  chapterName: string
  description?: string
}

const chapterDescriptions: Record<number, string> = {
  1: "Arjuna's crisis of conscience on the battlefield of Kurukshetra",
  2: "The immortality of the soul and the path of knowledge",
  3: "The importance of selfless action without attachment to results",
  4: "The divine nature of knowledge and action in spiritual practice",
  5: "Reconciling the paths of renunciation and action",
  6: "The practice and benefits of meditation for self-realization",
  7: "Understanding the nature of the Supreme and material world",
  8: "Remembrance of the Divine at the time of death",
  9: "The most confidential knowledge of devotion to the Supreme",
  10: "The infinite manifestations of the Divine in all creation",
  11: "Arjuna's vision of Krishna's cosmic universal form",
  12: "The excellence of devotion as the highest path to liberation",
  13: "Distinguishing between the body and the eternal soul",
  14: "Understanding the three qualities of material nature",
  15: "The eternal tree of material existence and the Supreme Person",
  16: "Divine and demoniac qualities and their spiritual significance",
  17: "The three divisions of faith, food, worship, and charity",
  18: "The ultimate teaching on surrender, duty, and liberation",
}

export function ChapterHeader({ chapterNumber, chapterName, description }: ChapterHeaderProps) {
  const chapterDescription = description || chapterDescriptions[chapterNumber] || ""
  
  return (
    <header className="relative flex flex-col items-center text-center px-4 pt-8 pb-10 md:pt-12 md:pb-14">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-50" aria-hidden="true" />
      
      <div className="relative z-10 w-full max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 mb-8 group"
        >
          <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span>All Chapters</span>
        </Link>
        
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="w-10 h-px bg-gradient-to-r from-transparent to-primary/40 md:w-16" />
          <span className="text-xs tracking-[0.2em] uppercase text-primary/70 font-medium">
            Chapter {chapterNumber}
          </span>
          <div className="w-10 h-px bg-gradient-to-l from-transparent to-primary/40 md:w-16" />
        </div>
        
        <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-foreground tracking-wide text-balance mb-4">
          {chapterName}
        </h1>
        
        {chapterDescription && (
          <p className="font-sans text-sm md:text-base text-muted-foreground max-w-lg mx-auto leading-relaxed">
            {chapterDescription}
          </p>
        )}
      </div>

      {/* Sticky progress indicator */}
      <div className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-sm border-b border-border/30 py-2 px-4 hidden md:block">
        <div className="max-w-2xl mx-auto flex items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="text-primary">Chapter {chapterNumber}</span>
          <span className="text-border">•</span>
          <span>{chapterName}</span>
        </div>
      </div>
    </header>
  )
}
