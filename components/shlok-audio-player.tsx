"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause } from "lucide-react"

interface Props {
  chapter: number
  shlok: number
}

export function ShlokAudioPlayer({ chapter, shlok }: Props) {
  const [mode, setMode] = useState<"sanskrit" | "hindi" | "english">("sanskrit")
  const [playing, setPlaying] = useState(false)

  const audioRef = useRef<HTMLAudioElement>(null)

  const basePath = `/audio/CHAP${chapter}/${String(shlok).padStart(2, "0")}`

  const getSrc = () => {
    if (mode === "sanskrit") return `${basePath}-mool_sloka.ogg`
    if (mode === "hindi") return `${basePath}-hindi_translation.ogg`
    return `${basePath}-english_translations.ogg`
  }

  // 🔥 IMPORTANT: reload audio when mode changes
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.pause()
    audio.load()
    setPlaying(false)
  }, [mode, chapter, shlok])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (playing) {
        audio.pause()
        setPlaying(false)
      } else {
        await audio.play() // 🔥 important fix
        setPlaying(true)
      }
    } catch (err) {
      console.error("Audio failed:", err)
      alert("Audio not supported or failed to load")
    }
  }

  return (
    <div className="flex flex-col items-center gap-4">
      
      {/* Audio element */}
      <audio
        ref={audioRef}
        preload="auto"
        onEnded={() => setPlaying(false)}
      >
        <source src={getSrc()} type="audio/ogg" />
      </audio>

      {/* Play button */}
      <button
        onClick={togglePlay}
        className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center hover:bg-primary/30 transition"
      >
        {playing ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Play className="w-6 h-6" />
        )}
      </button>

      {/* Mode selector */}
      <div className="flex gap-2 text-xs">
        {["sanskrit", "hindi", "english"].map((lang) => (
          <button
            key={lang}
            onClick={() => setMode(lang as any)}
            className={`px-3 py-1 rounded-full capitalize ${
              mode === lang ? "bg-primary text-white" : "bg-card"
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  )
}