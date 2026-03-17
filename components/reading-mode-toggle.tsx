"use client"

import { useState, useEffect } from "react"
import { Sun, Moon, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils"

type ReadingMode = "light" | "dark" | "sepia"

export function ReadingModeToggle() {
  const [mode, setMode] = useState<ReadingMode>("light")

  useEffect(() => {
    const savedMode = localStorage.getItem("reading-mode") as ReadingMode | null
    if (savedMode) {
      setMode(savedMode)
      applyMode(savedMode)
    }
  }, [])

  const applyMode = (newMode: ReadingMode) => {
    document.documentElement.classList.remove("dark", "sepia")
    if (newMode === "dark") {
      document.documentElement.classList.add("dark")
    } else if (newMode === "sepia") {
      document.documentElement.classList.add("sepia")
    }
  }

  const cycleMode = () => {
    const modes: ReadingMode[] = ["light", "dark", "sepia"]
    const currentIndex = modes.indexOf(mode)
    const nextMode = modes[(currentIndex + 1) % modes.length]
    setMode(nextMode)
    applyMode(nextMode)
    localStorage.setItem("reading-mode", nextMode)
  }

  const icons = {
    light: Sun,
    dark: Moon,
    sepia: BookOpen,
  }

  const Icon = icons[mode]

  return (
    <button
      type="button"
      onClick={cycleMode}
      className={cn(
        "fixed top-4 right-4 z-50 p-3 rounded-full",
        "bg-card/80 backdrop-blur-sm border border-border/50",
        "text-muted-foreground hover:text-foreground",
        "transition-all duration-300 hover:shadow-lg",
        "focus:outline-none focus:ring-2 focus:ring-primary/40"
      )}
      aria-label={`Switch reading mode. Current: ${mode}`}
    >
      <Icon className="h-5 w-5" />
    </button>
  )
}
