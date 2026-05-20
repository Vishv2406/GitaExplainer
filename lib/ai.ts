import Groq from "groq-sdk";

const isVercel = process.env.VERCEL === "1";

const GROQ_MODEL = "llama-3.3-70b-versatile";
const OLLAMA_MODEL = "mistral";

export async function getGitaExplanation(
  shlok: string,
  meaning: string,
  chapter: number,
  verse: number
): Promise<string> {

  const prompt = `You are a compassionate and wise spiritual teacher explaining the Bhagavad Gita to a modern person.

Chapter ${chapter}, Verse ${verse}:
Sanskrit: ${shlok}
English meaning: ${meaning}

Please explain this verse in simple, warm English that a student or working professional can understand and apply in their daily life today.

Structure your explanation as:
1. What this verse is saying (in plain language)
2. The deeper wisdom or principle behind it
3. How a modern person can apply this today

Keep the tone warm, practical, and inspiring. Write about 3-4 paragraphs.`;

  if (isVercel) {
    return await getGroqExplanation(prompt);
  } else {
    return await getOllamaExplanation(prompt);
  }
}

async function getGroqExplanation(prompt: string): Promise<string> {
  if (!process.env.GROQ_API_KEY) {
    throw new Error("GROQ_API_KEY is not set in environment variables.");
  }

  const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
  });

  const completion = await groq.chat.completions.create({
    model: GROQ_MODEL,
    messages: [{ role: "user", content: prompt }],
    temperature: 0.7,
    max_tokens: 1024,
  });

  const explanation = completion.choices[0]?.message?.content;
  if (!explanation) throw new Error("Groq returned an empty response.");
  return explanation;
}

async function getOllamaExplanation(prompt: string): Promise<string> {
  const OLLAMA_URL = "http://localhost:11434/api/generate";

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 300000);

  try {
    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: OLLAMA_MODEL,
        prompt: prompt,
        stream: false,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      throw new Error(`Ollama request failed with status ${response.status}.`);
    }

    const data = await response.json();
    if (!data.response) throw new Error("Ollama returned an empty response.");
    return data.response;

  } catch (error: unknown) {
    if (error instanceof Error && error.name === "AbortError") {
      throw new Error("Ollama is taking too long. Try a smaller model.");
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}