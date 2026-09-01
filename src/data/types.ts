export type ContentStatus = 'placeholder' | 'ready'

export interface TimelineEntry {
  id: string
  dateLabel: string
  title: string
  body: string
  status: ContentStatus
}

export interface PhotoAsset {
  id: string
  src: string
  alt: string
  date?: string
  memory?: string
  caption?: string
  focalPoint?: string
  section?: string
  status: ContentStatus
}

export interface QuizQuestion {
  id: string
  prompt: string
  options: string[]
  correctOption?: number
  response?: string
  status: ContentStatus
}

export interface LetterContent {
  body: string
  status: ContentStatus
}

export interface RelationshipContent {
  timeline: TimelineEntry[]
  photos: PhotoAsset[]
  quiz: QuizQuestion[]
  secret: { body: string; status: ContentStatus }
  letter: LetterContent
  finalLine: { body: string; status: ContentStatus }
}
