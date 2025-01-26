export interface PuzzlePiece {
  id: number
  clue: string
  answer: string
  poemFragment: string
  isResolved: boolean
  position: 'start' | 'middle' | 'end' | 'full'
  line: number
} 