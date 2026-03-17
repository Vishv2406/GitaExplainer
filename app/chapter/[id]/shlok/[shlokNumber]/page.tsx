import { notFound } from "next/navigation"
import { Bookmark } from "lucide-react"
import { getShlokDetail } from "@/lib/chapter-data"
import { BreadcrumbNav } from "@/components/breadcrumb-nav"
import { ShlokContent } from "@/components/shlok-content"
import { ShlokNavigation } from "@/components/shlok-navigation"
import { AIExplanation } from "@/components/ai-explanation"
import { ReflectionSection } from "@/components/reflection-section"
import { ReadingModeToggle } from "@/components/reading-mode-toggle"
import { AmbientSoundToggle } from "@/components/ambient-sound-toggle"
import { ShlokAudioPlayer } from "@/components/shlok-audio-player"

interface ShlokPageProps {
  params: Promise<{
    id: string
    shlokNumber: string
  }>
}

export default async function ShlokPage({ params }: ShlokPageProps) {
  const { id, shlokNumber } = await params

  const chapterNumber = Number(id)
  const shlokNum = Number(shlokNumber)

  if (
    Number.isNaN(chapterNumber) ||
    Number.isNaN(shlokNum) ||
    chapterNumber < 1 ||
    chapterNumber > 18
  ) {
    notFound()
  }

  const shlok = getShlokDetail(chapterNumber, shlokNum)
  if (!shlok) notFound()

  return (
    <main className="relative min-h-screen bg-background">
      {/* Soft spiritual gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-primary/3 via-transparent to-primary/5 pointer-events-none" />

      {/* Reading mode toggle */}
      <ReadingModeToggle />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <header className="flex items-center justify-between mb-6">
          <BreadcrumbNav
            items={[
              { label: "Home", href: "/" },
              { label: `Chapter ${chapterNumber}`, href: `/chapter/${chapterNumber}` },
              { label: `Shlok ${shlokNum}` },
            ]}
          />
          <div className="flex items-center gap-2">
            <AmbientSoundToggle />
            <button
              className="p-2 rounded-full hover:bg-card/60 transition"
              aria-label="Bookmark shlok"
            >
              <Bookmark className="h-5 w-5 text-muted-foreground" />
            </button>
          </div>
        </header>

        {/* Chapter Info */}
        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.3em] text-primary/70 uppercase">
            Chapter {chapterNumber}
          </p>
          <h1 className="font-serif text-xl md:text-2xl mt-2">
            {shlok.chapterName}
          </h1>
        </div>

        {/* Top Navigation */}
        <div className="mb-8">
          <ShlokNavigation
            chapterNumber={chapterNumber}
            currentShlok={shlokNum}
            totalShloks={shlok.totalShloks}
          />
        </div>

        {/* 🔊 Audio Player */}
        <div className="flex justify-center my-8">
          <ShlokAudioPlayer
            chapter={chapterNumber}
            shlok={shlokNum}
          />
        </div>

        {/* Shlok Content */}
        <article className="my-10">
          <ShlokContent
            sanskrit={shlok.sanskrit}
            englishMeaning={shlok.englishMeaning}
            hindiMeaning={shlok.hindiMeaning}
          />
        </article>

        {/* AI Explanation */}
        <AIExplanation shlok={shlok.sanskrit} />


        {/* Reflection */}
        <section className="my-10">
          <ReflectionSection />
        </section>

        {/* Bottom Navigation */}
        <footer className="mt-12 pt-6 border-t border-border/20">
          <ShlokNavigation
            chapterNumber={chapterNumber}
            currentShlok={shlokNum}
            totalShloks={shlok.totalShloks}
          />
        </footer>
      </div>
    </main>
  )
}
