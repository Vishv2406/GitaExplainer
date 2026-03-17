"use client"

import { useState } from "react"
import { Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

type AmbientSound = "silence" | "flute" | "bells"

const soundLabels: Record<AmbientSound, string> = {
  silence: "Silence",
  flute: "Soft Flute",
  bells: "Temple Bells",
}

export function AmbientSoundToggle() {
  const [sound, setSound] = useState<AmbientSound>("silence")
  const [isOpen, setIsOpen] = useState(false)

  const cycleSound = (newSound: AmbientSound) => {
    setSound(newSound)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-3 py-2 rounded-full",
          "bg-card/60 border border-border/40",
          "text-sm text-muted-foreground hover:text-foreground",
          "transition-all duration-300 hover:bg-card"
        )}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        {sound === "silence" ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
        <span className="hidden sm:inline">{soundLabels[sound]}</span>
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute top-full mt-2 right-0",
            "bg-card border border-border/50 rounded-lg shadow-lg",
            "py-1 min-w-[140px]",
            "animate-in fade-in-0 zoom-in-95 duration-200"
          )}
          role="listbox"
        >
          {(Object.keys(soundLabels) as AmbientSound[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => cycleSound(s)}
              className={cn(
                "w-full px-4 py-2 text-left text-sm",
                "hover:bg-muted/50 transition-colors",
                sound === s ? "text-primary" : "text-foreground"
              )}
              role="option"
              aria-selected={sound === s}
            >
              {soundLabels[s]}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
