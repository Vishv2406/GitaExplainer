"use client"

import { useState } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"
import { cn } from "@/lib/utils"

interface AudioPlayerProps {
  label?: string
  variant?: "minimal" | "full"
}

export function AudioPlayer({ label = "Listen to Shlok", variant = "full" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
    // Simulate progress for demo
    if (!isPlaying) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval)
            setIsPlaying(false)
            return 0
          }
          return prev + 2
        })
      }, 100)
    }
  }

  if (variant === "minimal") {
    return (
      <button
        type="button"
        onClick={togglePlay}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full",
          "bg-card/60 border border-border/40",
          "text-sm text-muted-foreground hover:text-foreground",
          "transition-all duration-300 hover:bg-card"
        )}
        aria-label={isPlaying ? "Pause audio" : "Play audio"}
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
        <span>{label}</span>
      </button>
    )
  }

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      {/* Circular Play Button */}
      <button
        type="button"
        onClick={togglePlay}
        className={cn(
          "relative w-16 h-16 rounded-full",
          "bg-gradient-to-br from-primary/20 to-primary/5",
          "border border-primary/30",
          "flex items-center justify-center",
          "transition-all duration-300",
          "hover:shadow-lg hover:shadow-primary/10 hover:scale-105",
          "focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background",
          isPlaying && "animate-pulse"
        )}
        aria-label={isPlaying ? "Pause shlok audio" : "Play shlok audio"}
      >
        {/* Progress Ring */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-border/30"
          />
          <circle
            cx="32"
            cy="32"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray={188.5}
            strokeDashoffset={188.5 - (188.5 * progress) / 100}
            className="text-primary transition-all duration-100"
            strokeLinecap="round"
          />
        </svg>
        
        {isPlaying ? (
          <Pause className="h-6 w-6 text-primary relative z-10" />
        ) : (
          <Play className="h-6 w-6 text-primary relative z-10 ml-1" />
        )}
      </button>

      {/* Controls Row */}
      <div className="flex items-center gap-4">
        <span className="text-xs text-muted-foreground">{label}</span>
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
      </div>
    </div>
  )
}
