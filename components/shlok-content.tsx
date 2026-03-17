"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface ShlokContentProps {
  sanskrit: string
  englishMeaning: string
  hindiMeaning: string
}

export function ShlokContent({ sanskrit, englishMeaning, hindiMeaning }: ShlokContentProps) {
  const [showHindi, setShowHindi] = useState(false)

  return (
    <div className="space-y-8">
      {/* Sanskrit Verse */}
      <div className="relative text-center space-y-4 py-6">
        {/* Decorative background */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5 rounded-2xl"
          aria-hidden="true"
        />

        <p className="relative font-serif text-xl md:text-2xl lg:text-3xl text-foreground leading-loose whitespace-pre-line tracking-wide">
          {sanskrit}
        </p>
      </div>

      {/* Decorative Divider */}
      <div className="flex items-center justify-center gap-4 py-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/30" />
        <svg
          className="w-6 h-6 text-primary/40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
        </svg>
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/30" />
      </div>

      {/* English Meaning */}
      <div className="space-y-3">
        <h3 className="flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-primary/70">
          <span className="w-6 h-px bg-primary/30" />
          Meaning
        </h3>
        <p className="font-sans text-base md:text-lg text-foreground/90 leading-relaxed pl-2 border-l-2 border-transparent">
          {englishMeaning}
        </p>
      </div>

      {/* Hindi Meaning Toggle */}
      <div className="space-y-4">
        <button
          type="button"
          onClick={() => setShowHindi(!showHindi)}
          className={cn(
            "flex items-center gap-2 px-4 py-2 rounded-full",
            "bg-card/60 border border-border/40",
            "text-sm text-muted-foreground hover:text-foreground",
            "transition-all duration-300 hover:bg-card hover:border-primary/30"
          )}
          aria-expanded={showHindi}
        >
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300",
              showHindi && "rotate-180"
            )}
          />
          {showHindi ? "Hide" : "Show"} Hindi meaning
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-500 ease-out",
            showHindi ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="pl-4 border-l-2 border-primary/20 py-2">
            <h4 className="text-xs font-sans uppercase tracking-[0.2em] text-primary/60 mb-2">
              हिंदी अर्थ
            </h4>
            <p className="font-sans text-base text-foreground/80 leading-relaxed">
              {hindiMeaning}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
