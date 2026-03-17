import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShlokItemProps {
  chapterNumber: number
  shlokNumber: number
  preview: string
  isLast?: boolean
  className?: string
}

export function ShlokItem({
  chapterNumber,
  shlokNumber,
  preview,
  isLast = false,
  className,
}: ShlokItemProps) {
  return (
    <Link
      href={`/chapter/${chapterNumber}/shlok/${shlokNumber}`}
      className={cn(
        "group relative flex items-center gap-4 py-5 px-4 -mx-4 rounded-lg transition-all duration-300",
        "hover:bg-gradient-to-r hover:from-card/80 hover:to-transparent",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
    >
      {/* Connecting line to next item */}
      {!isLast && (
        <div className="absolute left-[30px] top-[52px] bottom-0 w-px bg-border/30 group-hover:bg-primary/20 transition-colors duration-300" aria-hidden="true" />
      )}
      
      {/* Number badge */}
      <div className="relative flex-shrink-0">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-card border border-border/50 text-primary font-serif text-sm transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/10 group-hover:scale-110">
          {shlokNumber}
        </span>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-full bg-primary/20 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" aria-hidden="true" />
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-sm md:text-base text-foreground/80 leading-relaxed line-clamp-2 transition-colors duration-300 group-hover:text-foreground">
          {preview}
        </p>
      </div>
      
      {/* Arrow indicator */}
      <ChevronRight className="flex-shrink-0 h-4 w-4 text-muted-foreground/50 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" />
    </Link>
  )
}
