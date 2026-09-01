export interface QuizQuestion {
  id: string
  prompt: string
  options: string[]
  correctOptions: number[]
  achievementLetter: string
  answerReveal: string
  special?: 'food'
}

export const quizQuestions: QuizQuestion[] = [
  { id: 'colour', prompt: "what is hari's fav colour", options: ['black', 'red', 'green', 'orange'], correctOptions: [1], achievementLetter: 'H', answerReveal: 'red' },
  { id: 'food', prompt: "what is haris favorite food", options: ['biriyani', 'mandhi', 'friedrice', 'you'], correctOptions: [3], achievementLetter: 'I', answerReveal: "you're my fav full course meal", special: 'food' },
  { id: 'what-he-likes', prompt: 'what hari likes the most about you', options: ['your face', 'your lips', 'your hair', 'your eyes'], correctOptions: [2], achievementLetter: 'K', answerReveal: 'your hair' },
  { id: 'drink', prompt: "what is hari's fav drink", options: ['lemonade', 'mojito', 'salt soda', 'spicy soda'], correctOptions: [2], achievementLetter: 'M', answerReveal: 'salt soda' },
  { id: 'hate', prompt: 'understand that hari doesnt hate you', options: ['i agree', 'i agree', 'i agree', 'i agree'], correctOptions: [0, 1, 2, 3], achievementLetter: 'A', answerReveal: 'i agree' },
  { id: 'august', prompt: 'what happened on 1 august 2025 (dont look gallery)', options: ['became close friends', 'invited me to hackathon', 'said you were proud of me', 'walked around college together'], correctOptions: [0], achievementLetter: 'H', answerReveal: 'became close friends' },
  { id: 'movie-time', prompt: 'what time was our first movie (vaazha 2) together (no looking back)', options: ['10:30 pm', '11:10 pm', '12:10 am', '11:25 pm'], correctOptions: [1], achievementLetter: 'S', answerReveal: '11:10 pm' },
]

export const achievementWord = 'HIKMAHS'

export const correctMicrocopy = [
  'okay damn',
  'you actually know me',
  'that one was free',
  "i'm impressed unfortunately",
  'how do you know this',
  'correct. obviously.',
  'you were supposed to remember that',
  'acceptable performance',
  'you may continue',
]

export const secretContent = {
  suspense: [
    "Anu, there's something I've always wanted to say you, but i didn't know how to say this to you..",
    'hope you doesnt get mad',
    'it will be revealed in',
  ],
  reveal: 'I HAVE A CRUSH ON YOUUU :3',
  aside: '(i really do i dont have any secrets thats why ;-;)',
  validation: 'non-empty',
} as const
