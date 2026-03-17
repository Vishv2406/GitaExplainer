"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

interface AIExplanationProps {
  shlok: string
}

export function AIExplanation({ shlok }: AIExplanationProps) {
  const [loading, setLoading] = useState(false)
  const [explanation, setExplanation] = useState("")

  const getExplanation = async () => {
    setLoading(true)

    const res = await fetch("/api/ai-explain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ shlok }),
    })

    const data = await res.json()
    setExplanation(data.explanation)
    setLoading(false)
  }

  return (
    <div className="mt-10 p-6 rounded-xl border border-border/40 bg-card/40">
      <h2 className="text-lg font-serif mb-4">
        AI Explanation
      </h2>

      {!explanation && (
        <Button onClick={getExplanation} disabled={loading}>
          {loading ? "Thinking..." : "Explain this Shlok"}
        </Button>
      )}

      {explanation && (
        <p className="mt-4 text-foreground/90 leading-relaxed whitespace-pre-line">
          {explanation}
        </p>
      )}
    </div>
  )
}
