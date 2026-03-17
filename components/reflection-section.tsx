"use client"

import { useState } from "react"
import { PenLine, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

export function ReflectionSection() {
  const [notes, setNotes] = useState("")
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          <PenLine className="h-4 w-4 text-primary/70" />
        </div>
        <div>
          <h3 className="font-sans text-sm font-medium text-foreground">Reflect</h3>
          <p className="text-xs text-muted-foreground">Connect this wisdom to your life</p>
        </div>
      </div>

      {/* Prompt */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className={cn(
          "w-full flex items-center justify-between p-4 rounded-xl",
          "bg-gradient-to-r from-card/60 to-transparent",
          "border border-border/30 hover:border-primary/30",
          "text-left transition-all duration-300",
          isExpanded && "border-primary/30 bg-card/80"
        )}
      >
        <span className="font-serif text-sm text-foreground/80 italic">
          How does this shlok connect to your life?
        </span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform duration-300",
            isExpanded && "rotate-180"
          )}
        />
      </button>

      {/* Notes area */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-500 ease-out",
          isExpanded ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="space-y-3 pt-2">
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Take a moment to reflect..."
            className={cn(
              "w-full min-h-28 p-4 text-sm font-sans leading-relaxed",
              "bg-background/60 border border-border/30 rounded-xl resize-none",
              "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/40",
              "transition-all duration-300",
              "placeholder:text-muted-foreground/40 placeholder:italic"
            )}
            aria-label="Personal reflection notes"
          />
          <p className="text-xs text-muted-foreground/50 text-center">
            Your thoughts are private and stored only in your browser
          </p>
        </div>
      </div>
    </div>
  )
}
