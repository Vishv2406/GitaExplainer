import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { shlok } = await req.json()

    const prompt = `
Explain this Bhagavad Gita shlok in a simple and spiritual way.

Give:
1. Simple meaning
2. Life example
3. Philosophical insight

Shlok:
${shlok}
`

    const response = await fetch("http://localhost:11434/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral",
        prompt,
        stream: false,
      }),
    })

    const data = await response.json()

    return NextResponse.json({
      explanation: data.response,
    })
  } catch (error) {
    return NextResponse.json(
      { error: "AI explanation failed" },
      { status: 500 }
    )
  }
}
