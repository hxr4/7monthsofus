import type { PhotoAsset } from './types'

export type FramePreset = 'portrait' | 'landscape' | 'near-square'

export interface StoryBeat {
  id: string
  label: string
  beat?: string
  body: string
  tone?: 'opening' | 'quiet' | 'plain' | 'restrained'
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
  dateLabel?: string
  photo?: PhotoAsset
  memoryLine?: string
  detail?: string
  status: 'placeholder' | 'ready'
}

export const storyBeats: StoryBeat[] = [
  {
    id: 'beginning',
    label: "deeksharambh · siva's team · the instagram",
    beat: 'oh.',
    body: "she was on siva's team. i was somewhere else entirely. he thought we'd suit each other, so he showed me who she was. that was the whole plan. i got her instagram through him and somehow decided that was a good enough foundation to build on.",
    tone: 'opening',
  },
  {
    id: 'mess',
    label: 'a terrible plan',
    body: "getting her instagram was the easy part. talking to her was not. so i did what any reasonable person would do and got my friends involved. they made it so much worse — acted weird, creeped her out, turned a crush into a small disaster. the apology was mine to make, even for things i technically didn't do. somehow that apology is the reason we became friends at all.",
    tone: 'plain',
  },
  {
    id: 'distance',
    label: 'backing off',
    body: "then i found out she had a boyfriend. so i did the respectful thing and tried to create some distance. it worked, technically. i just also missed her the entire time, which is how i found out how much of this had already stopped being nothing.",
    tone: 'restrained',
  },
  {
    id: 'january-8',
    label: 'something real',
    beat: "she told me she'd broken up.",
    body: "she was hurting, and she opened up to me anyway. i listened. i stayed. somewhere in that, i started seeing a future i hadn't let myself imagine before.",
    tone: 'quiet',
  },
]

export const summitDays: SummitDay[] = [
  { id: 'summit-29', dateLabel: 'jan 29, 2026', memoryLine: 'concerts, and the first sense that this trip was different.', status: 'ready' },
  { id: 'summit-30', dateLabel: 'jan 30, 2026', memoryLine: "more time together than we'd ever had before. closer, without either of us naming it.", status: 'ready' },
  { id: 'summit-31', dateLabel: 'jan 31, 2026', memoryLine: 'being protective. taking care of her. just existing next to her for days.', status: 'ready' },
  { id: 'summit-01', dateLabel: 'feb 1, 2026', memoryLine: 'everything that had been building became impossible to ignore.', status: 'ready' },
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
  { id: 'month-2', label: 'month 02', memoryLine: 'driving classes.', detail: "early mornings and evenings just to watch each other head back. she stayed at my place before her learner's test.", status: 'ready' },
  { id: 'month-3', label: 'month 03', memoryLine: 'the accidental kiss.', detail: 'the old pg. she was kissing my cheek, i turned for hers, and we somehow ended up kissing on the lips instead. neither of us planned it.', status: 'ready' },
  { id: 'month-4', label: 'month 04', memoryLine: 'vaazha 2.', detail: "our first movie together. we went, watched it, came back, slept. nothing dramatic happened. that's kind of the point.", status: 'ready' },
  { id: 'month-5', label: 'month 05', memoryLine: 'the proposal.', detail: "she'd never had a proper proposal, so i got down on one knee at the old pg. she half-knew something was coming and was still surprised. there's no photo. some things are just ours.", status: 'ready' },
  { id: 'month-6', label: 'month 06', memoryLine: 'us.', detail: "the bullying, the rage-baiting, judging strangers together, her saying 'you hate me' and making me spend ten minutes proving i don't. being fully, stupidly comfortable being weird around each other.", status: 'ready' },
  { id: 'month-7', label: 'month 07', memoryLine: 'still figuring it out.', detail: "we're not perfect. we argue, we hurt each other sometimes. i'm learning to communicate instead of disappearing. we still choose each other anyway.", status: 'ready' },
]
