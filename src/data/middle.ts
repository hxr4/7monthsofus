import type { PhotoAsset } from './types'

export type FramePreset = 'portrait' | 'landscape' | 'near-square'

export interface StoryBeat {
  id: string
  label: string
  title: string
  body: string
  tone?: 'quiet' | 'humorous' | 'restrained'
}

export interface SummitDay {
  id: string
  dateLabel: string
  photo?: PhotoAsset
  memoryLine?: string
  status: 'placeholder' | 'ready'
}

export interface MonthSlot {
  id: string
  label: string
  dateLabel: string
  photo?: PhotoAsset
  memoryLine?: string
  detail?: string
  status: 'placeholder' | 'ready'
}

export const storyBeats: StoryBeat[] = [
  {
    id: 'beginning',
    label: 'the beginning',
    title: 'deeksharambh',
    body: "you were on siva's team. i was on a different one. siva thought we'd suit each other and showed me you. then i got your instagram through him.",
  },
  {
    id: 'mess',
    label: 'the mess',
    title: 'a terrible plan',
    body: "i asked friends to help me talk to you. they acted weird, creeped you out, and made everything worse. the apology was mine to make. somehow, it became the start of our friendship.",
    tone: 'humorous',
  },
  {
    id: 'distance',
    label: 'the distance',
    title: 'backing off',
    body: "when i learned you had a boyfriend, i tried to create some distance out of respect. then i found myself missing you.",
    tone: 'restrained',
  },
  {
    id: 'january-8',
    label: 'january 8',
    title: 'something real',
    body: "you told me you'd broken up. you were hurting, and you opened up to me. i listened, reassured you, and stayed. somewhere in that, i started seeing a future.",
    tone: 'quiet',
  },
]

export const summitDays: SummitDay[] = [
  { id: 'summit-29', dateLabel: 'jan 29, 2026', status: 'placeholder' },
  { id: 'summit-30', dateLabel: 'jan 30, 2026', status: 'placeholder' },
  { id: 'summit-31', dateLabel: 'jan 31, 2026', status: 'placeholder' },
  { id: 'summit-01', dateLabel: 'feb 1, 2026', status: 'placeholder' },
]

const photo = (asset: Omit<PhotoAsset, 'status'> & { width: number; height: number }): PhotoAsset & { width: number; height: number; preset: FramePreset } => {
  const ratio = asset.width / asset.height
  const preset: FramePreset = ratio < 0.8 ? 'portrait' : ratio > 1.3 ? 'landscape' : 'near-square'
  return { ...asset, preset, status: 'ready' }
}

export const middlePhotos = [
  photo({ id: 'pic-1', src: '/pics/pic%201.jpeg', alt: 'A supplied photograph from the old PG', section: 'Us', caption: 'old PG, doing absolutely nothing together', width: 899, height: 1599 }),
  photo({ id: 'pic-2', src: '/pics/pic%202.jpeg', alt: 'A supplied photograph from Garba night at college', section: 'Us', caption: 'garba night, neither of us knew the steps', width: 960, height: 1280 }),
  photo({ id: 'pic-3', src: '/pics/pic%203.jpeg', alt: 'A supplied photograph from Onam at college', section: 'Us', caption: 'onam at college, in the middle of the chaos', width: 3060, height: 4080 }),
  photo({ id: 'pic-4', src: '/pics/pic%204.jpeg', alt: 'A supplied photograph from the old PG', section: 'Us', caption: 'back at the PG again, because we kept ending up there', width: 960, height: 1280 }),
  photo({ id: 'pic-5', src: '/pics/pic%205.jpeg', alt: 'A supplied photograph of Anu at Onam', section: 'Anu', caption: "onam again, this one's just her being cute", width: 3072, height: 4080 }),
] as const

export const sevenMonths: MonthSlot[] = [
  { id: 'month-1', label: 'month 01', dateLabel: 'feb 1, 2026', memoryLine: 'becoming a couple', status: 'ready' },
  ...Array.from({ length: 6 }, (_, index) => ({
    id: `month-${index + 2}`,
    label: `month ${String(index + 2).padStart(2, '0')}`,
    dateLabel: 'content needed',
    status: 'placeholder' as const,
  })),
]
