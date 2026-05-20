"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface AIExplanationProps {
  shlok: string
}

export function AIExplanation({ shlok }: AIExplanationProps) {
  const [loading, setLoading] = useState(false)
  const [explanation, setExplanation] = useState("")
  const [error, setError] = useState("")

  const getExplanation = async () => {
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/ai-explain", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ shlok }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.")
        return
      }

      setExplanation(data.explanation)

    } catch (err) {
      setError("Network error. Please check your connection.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mt-10 p-6 rounded-xl border border-border/40 bg-card/40">
      <h2 className="text-lg font-serif mb-4">AI Explanation</h2>

      {!explanation && (
        <Button onClick={getExplanation} disabled={loading}>
          {loading ? "Thinking..." : "Explain this Shlok"}
        </Button>
      )}

      {error && (
        <p className="mt-3 text-sm text-red-500">{error}</p>
      )}

      {explanation && (
        <p className="mt-4 text-foreground/90 leading-relaxed whitespace-pre-line">
          {explanation}
        </p>
      )}
    </div>
  )
}