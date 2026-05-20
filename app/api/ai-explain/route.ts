import { NextRequest, NextResponse } from "next/server";
import { getGitaExplanation } from "@/lib/ai";

export const maxDuration = 300;
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { shlok, meaning, chapter, verse } = body;

    // Only shlok is required — meaning is optional
    if (!shlok) {
      return NextResponse.json(
        { error: "Missing required field: shlok is required." },
        { status: 400 }
      );
    }

    const explanation = await getGitaExplanation(
      shlok,
      meaning || "",   // if meaning not sent, use empty string
      chapter || 1,
      verse || 1
    );

    return NextResponse.json({ explanation }, { status: 200 });

  } catch (error) {
    console.error("AI explanation error:", error);

    const errorMessage = error instanceof Error ? error.message : "Unknown error";

    const isOllamaDown =
      errorMessage.includes("ECONNREFUSED") ||
      errorMessage.includes("fetch failed") ||
      errorMessage.includes("localhost:11434");

    if (isOllamaDown) {
      return NextResponse.json(
        { error: "Ollama is not running. Please start it with: ollama serve" },
        { status: 503 }
      );
    }

    return NextResponse.json(
      {
        error: "Failed to generate explanation. Please try again.",
        details: process.env.NODE_ENV === "development" ? errorMessage : undefined,
      },
      { status: 500 }
    );
  }
}