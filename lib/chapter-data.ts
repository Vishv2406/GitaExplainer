import gita from "@/data/gita_base.json"

/* ---------------- TYPES ---------------- */

export interface ShlokPreview {
  number: number
  preview: string
}

export interface ChapterData {
  number: number
  name: string
  shloks: ShlokPreview[]
}

export interface ShlokDetail {
  chapterNumber: number
  chapterName: string
  shlokNumber: number
  totalShloks: number
  sanskrit: string
  englishMeaning: string
  hindiMeaning: string
}

/* ---------------- CHAPTER NAMES ---------------- */

const CHAPTER_NAMES: Record<number, string> = {
  1: "Arjuna’s Dilemma",
  2: "Sankhya Yoga",
  3: "Karma Yoga",
  4: "Jnana Karma Sannyasa Yoga",
  5: "Karma Sannyasa Yoga",
  6: "Dhyana Yoga",
  7: "Jnana Vijnana Yoga",
  8: "Aksara Brahma Yoga",
  9: "Raja Vidya Raja Guhya Yoga",
  10: "Vibhuti Yoga",
  11: "Vishwarupa Darshana Yoga",
  12: "Bhakti Yoga",
  13: "Kshetra Kshetrajna Vibhaga Yoga",
  14: "Gunatraya Vibhaga Yoga",
  15: "Purushottama Yoga",
  16: "Daivasura Sampad Vibhaga Yoga",
  17: "Shraddhatraya Vibhaga Yoga",
  18: "Moksha Sannyasa Yoga",
}

export function getChapterName(chapterNumber: number): string {
  return CHAPTER_NAMES[chapterNumber] ?? `Chapter ${chapterNumber}`
}

/* ---------------- GET CHAPTER ---------------- */

export function getChapter(chapterNumber: number): ChapterData | null {
  const chapter = (gita as any)[chapterNumber]
  if (!chapter) return null

  const shloks: ShlokPreview[] = Object.entries(chapter).map(
    ([shlokNumber, data]: any) => ({
      number: Number(shlokNumber),
      preview: data.translation.english,
    })
  )

  return {
    number: chapterNumber,
    name: getChapterName(chapterNumber),
    shloks,
  }
}

/* ---------------- GET SHLOK ---------------- */

export function getShlokDetail(
  chapterNumber: number,
  shlokNumber: number
): ShlokDetail | null {
  const chapter = (gita as any)[chapterNumber]
  if (!chapter) return null

  const shlok = chapter[shlokNumber]
  if (!shlok) return null

  return {
    chapterNumber,
    chapterName: getChapterName(chapterNumber),
    shlokNumber,
    totalShloks: Object.keys(chapter).length,
    sanskrit: shlok.sanskrit,
    englishMeaning: shlok.translation.english,
    hindiMeaning: shlok.translation.hindi,
  }
}
