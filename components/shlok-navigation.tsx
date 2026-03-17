import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShlokNavigationProps {
  chapterNumber: number
  currentShlok: number
  totalShloks: number
}

export function ShlokNavigation({
  chapterNumber,
  currentShlok,
  totalShloks,
}: ShlokNavigationProps) {
  const hasPrevious = currentShlok > 1
  const hasNext = currentShlok < totalShloks
  const progressPercent = (currentShlok / totalShloks) * 100

  return (
    <div className="space-y-4">
      {/* Progress bar */}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-1 bg-border/30 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercent}%` }}
            role="progressbar"
            aria-valuenow={currentShlok}
            aria-valuemin={1}
            aria-valuemax={totalShloks}
          />
        </div>
        <span className="text-xs text-muted-foreground font-sans tabular-nums">
          {currentShlok}/{totalShloks}
        </span>
      </div>

      {/* Navigation buttons */}
      <div className="flex items-center justify-between">
        <Link
          href={hasPrevious ? `/chapter/${chapterNumber}/shlok/${currentShlok - 1}` : "#"}
          className={cn(
            "group flex items-center gap-2 px-4 py-2.5 text-sm font-sans rounded-full transition-all duration-300",
            hasPrevious
              ? "text-muted-foreground hover:text-foreground hover:bg-card border border-transparent hover:border-border/40"
              : "text-muted-foreground/30 pointer-events-none"
          )}
          aria-disabled={!hasPrevious}
          tabIndex={hasPrevious ? 0 : -1}
        >
          <ChevronLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="hidden sm:inline">Previous</span>
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground/70">Shlok</span>
          <span className="font-serif text-lg text-primary">{currentShlok}</span>
        </div>

        <Link
          href={hasNext ? `/chapter/${chapterNumber}/shlok/${currentShlok + 1}` : "#"}
          className={cn(
            "group flex items-center gap-2 px-4 py-2.5 text-sm font-sans rounded-full transition-all duration-300",
            hasNext
              ? "text-muted-foreground hover:text-foreground hover:bg-card border border-transparent hover:border-border/40"
              : "text-muted-foreground/30 pointer-events-none"
          )}
          aria-disabled={!hasNext}
          tabIndex={hasNext ? 0 : -1}
        >
          <span className="hidden sm:inline">Next</span>
          <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
