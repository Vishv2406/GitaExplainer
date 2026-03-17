"use client"

import { cn } from "@/lib/utils"

interface ChapterCardProps {
  number: number
  name: string
  className?: string
}

export function ChapterCard({ number, name, className }: ChapterCardProps) {
  return (
    <button
      type="button"
      className={cn(
        "group relative flex flex-col items-center justify-center p-5 md:p-6 rounded-lg bg-card border border-border/40 transition-all duration-300 ease-out",
        "hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5",
        "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
      aria-label={`Read Chapter ${number}: ${name}`}
    >
      <span className="text-3xl md:text-4xl font-serif font-light text-primary mb-2 transition-transform duration-300 group-hover:scale-110">
        {number}
      </span>
      <h3 className="text-center font-serif text-foreground text-xs md:text-sm leading-relaxed">
        {name}
      </h3>
    </button>
  )
}
