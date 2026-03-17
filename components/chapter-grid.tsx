import { ChapterCard } from "./chapter-card"

const chapters = [
  { number: 1, name: "Arjuna's Dilemma", icon: "sword" },
  { number: 2, name: "Transcendental Knowledge", icon: "book" },
  { number: 3, name: "Path of Action", icon: "flame" },
  { number: 4, name: "Path of Knowledge", icon: "lightbulb" },
  { number: 5, name: "Path of Renunciation", icon: "leaf" },
  { number: 6, name: "Path of Meditation", icon: "lotus" },
  { number: 7, name: "Knowledge of the Absolute", icon: "infinity" },
  { number: 8, name: "Path to the Supreme", icon: "star" },
  { number: 9, name: "Royal Knowledge", icon: "crown" },
  { number: 10, name: "Divine Glories", icon: "sun" },
  { number: 11, name: "Universal Form", icon: "eye" },
  { number: 12, name: "Path of Devotion", icon: "heart" },
  { number: 13, name: "Nature & the Enjoyer", icon: "tree" },
  { number: 14, name: "Three Qualities of Nature", icon: "circle" },
  { number: 15, name: "The Supreme Person", icon: "person" },
  { number: 16, name: "Divine & Demonic Natures", icon: "balance" },
  { number: 17, name: "Three Divisions of Faith", icon: "triangle" },
  { number: 18, name: "Liberation Through Renunciation", icon: "wings" },
]

export function ChapterGrid() {
  return (
    <section className="relative px-4 py-16 md:py-24">
      {/* Section header */}
      <div className="max-w-5xl mx-auto mb-12 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/30" />
          <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground">
            18 Chapters of Wisdom
          </span>
          <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/30" />
        </div>
        <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-3">
          Choose Your Path
        </h2>
        <p className="text-sm text-muted-foreground max-w-md mx-auto">
          Each chapter reveals a unique aspect of spiritual wisdom and practical guidance
        </p>
      </div>

      {/* Chapter grid */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {chapters.map((chapter, index) => (
            <ChapterCard
              key={chapter.number}
              number={chapter.number}
              name={chapter.name}
              icon={chapter.icon}
              delay={index * 50}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
