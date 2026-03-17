import { ChapterCard } from "./chapter-card"

const chapters = [
  { number: 1, name: "Arjuna's Dilemma" },
  { number: 2, name: "Transcendental Knowledge" },
  { number: 3, name: "Path of Action" },
  { number: 4, name: "Path of Knowledge" },
  { number: 5, name: "Path of Renunciation" },
  { number: 6, name: "Path of Meditation" },
  { number: 7, name: "Knowledge of the Absolute" },
  { number: 8, name: "Path to the Supreme" },
  { number: 9, name: "Royal Knowledge" },
  { number: 10, name: "Divine Glories" },
  { number: 11, name: "Universal Form" },
  { number: 12, name: "Path of Devotion" },
  { number: 13, name: "Nature & the Enjoyer" },
  { number: 14, name: "Three Qualities of Nature" },
  { number: 15, name: "The Supreme Person" },
  { number: 16, name: "Divine & Demonic Natures" },
  { number: 17, name: "Three Divisions of Faith" },
  { number: 18, name: "Liberation Through Renunciation" },
]

export function ChapterGrid() {
  return (
    <section className="px-4 pb-20 md:pb-28">
      <div className="max-w-5xl mx-auto">
        <h2 className="sr-only">18 Chapters of the Bhagavad Gita</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 md:gap-4">
          {chapters.map((chapter) => (
            <ChapterCard
              key={chapter.number}
              number={chapter.number}
              name={chapter.name}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
