import { ShlokItem } from "./shlok-item"
import type { Shlok } from "@/lib/chapter-data"

interface ShlokListProps {
  chapterNumber: number
  shloks: Shlok[]
}

export function ShlokList({ chapterNumber, shloks }: ShlokListProps) {
  return (
    <section className="relative px-4 pb-16 md:pb-20 mt-8 md:mt-0">
      {/* Decorative reading path line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/20 via-primary/10 to-transparent -translate-x-1/2 hidden md:block" aria-hidden="true" />
      
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-border/50" />
          <h2 className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            {shloks.length} Verses
          </h2>
          <div className="w-8 h-px bg-border/50" />
        </div>
        
        <div className="space-y-1">
          {shloks.map((shlok, index) => (
            <ShlokItem
              key={shlok.number}
              chapterNumber={chapterNumber}
              shlokNumber={shlok.number}
              preview={shlok.preview}
              isLast={index === shloks.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
