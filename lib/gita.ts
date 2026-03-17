import gita from "@/data/gita_base.json";

type Shlok = {
  sanskrit: string;
  transliteration: string;
  translation: {
    english: string;
    hindi: string;
  };
};

export function getChapter(chapterId: number) {
  const chapter = (gita as any)[chapterId];
  if (!chapter) return null;

  const shloks = Object.entries(chapter).map(([id, data]) => ({
    id: Number(id),
    ...(data as Shlok),
  }));

  return {
    id: chapterId,
    totalShloks: shloks.length,
    shloks,
  };
}

export function getShlok(chapterId: number, shlokId: number) {
  const chapter = (gita as any)[chapterId];
  if (!chapter) return null;

  return chapter[shlokId] || null;
}
