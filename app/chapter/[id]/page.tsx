import { notFound } from "next/navigation"
import { ChapterHeader } from "@/components/chapter-header"
import { ShlokList } from "@/components/shlok-list"
import { getChapter, getChapterName } from "@/lib/chapter-data"

interface ChapterPageProps {
  params: Promise<{ id: string }>
}

/* ---------- METADATA ---------- */
export async function generateMetadata({ params }: ChapterPageProps) {
  const { id } = await params
  const chapterNumber = Number(id)

  if (Number.isNaN(chapterNumber)) {
    return {}
  }

  const chapterName = getChapterName(chapterNumber)

  return {
    title: `Chapter ${chapterNumber}: ${chapterName} – Bhagavad Gita`,
    description: `Read all verses of ${chapterName}, Chapter ${chapterNumber} of the Bhagavad Gita.`,
  }
}

/* ---------- PAGE ---------- */
export default async function ChapterPage({ params }: ChapterPageProps) {
  const { id } = await params
  const chapterNumber = Number(id)

  if (Number.isNaN(chapterNumber) || chapterNumber < 1 || chapterNumber > 18) {
    notFound()
  }

  const chapter = getChapter(chapterNumber)
  if (!chapter) notFound()

  return (
    <main className="min-h-screen bg-background">
      <ChapterHeader
        chapterNumber={chapter.number}
        chapterName={chapter.name}
      />
      <ShlokList
        chapterNumber={chapter.number}
        shloks={chapter.shloks}
      />
    </main>
  )
}
