'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { Tooltip } from './components/Tooltip'

interface PuzzlePiece {
  id: number
  clue: string
  answer: string
  poemFragment: string
  isResolved: boolean
  position: 'start' | 'middle' | 'end' | 'full'
  line: number
}

const INITIAL_PUZZLE_PIECES = [
  {
    id: 1,
    clue: "In Fourth Wing's pages, Violet's dragon shares a name with this precious stone of purple hue",
    answer: "amethyst",
    poemFragment: "Wherever you are, I am always here,",
    isResolved: false,
    position: 'full',
    line: 1
  },
  {
    id: 2,
    clue: "Where Montana's peaks touch heaven's door, this mountain range we both adore",
    answer: "bridger",
    poemFragment: "There is no need, to live in fear.",
    isResolved: false,
    position: 'full',
    line: 2
  },
  {
    id: 3,
    clue: "On page 143, what does Xaden call Violet during their first training session? (2 words)",
    answer: "little witch",
    poemFragment: "Though we may seem, apart by miles,",
    isResolved: false,
    position: 'full',
    line: 3
  },
  {
    id: 4,
    clue: "The color of Andarna's scales in morning light",
    answer: "silver",
    poemFragment: "My heart is filled with many smiles.",
    isResolved: false,
    position: 'full',
    line: 4
  },
  {
    id: 5,
    clue: "The name of the mountain pass where Violet first meets her dragon",
    answer: "basgiath",
    poemFragment: "I feel you with me, even though,",
    isResolved: false,
    position: 'full',
    line: 5
  },
  {
    id: 6,
    clue: "What Montana national park features the Going-to-the-Sun Road?",
    answer: "glacier",
    poemFragment: "You feel alone and full of woe.",
    isResolved: false,
    position: 'full',
    line: 6
  },
  {
    id: 7,
    clue: "The type of bond that forms between rider and dragon in Chapter 7",
    answer: "soulbond",
    poemFragment: "The bond we share is one unique,",
    isResolved: false,
    position: 'full',
    line: 7
  },
  {
    id: 8,
    clue: "Find this word on page 256 when Violet describes her connection to her dragon",
    answer: "unbreakable",
    poemFragment: "A bond of which we never speak.",
    isResolved: false,
    position: 'full',
    line: 8
  },
  {
    id: 9,
    clue: "The famous ski resort near Bozeman where riders would love to soar",
    answer: "big sky",
    poemFragment: "Never feel lonely, we are whole,",
    isResolved: false,
    position: 'full',
    line: 9
  },
  {
    id: 10,
    clue: "What precious metal creates the binding between dragon and rider?",
    answer: "gold",
    poemFragment: "Connected by, heart and soul.",
    isResolved: false,
    position: 'full',
    line: 10
  }
] as PuzzlePiece[]

const STORAGE_KEY = 'poem-puzzle-state'

export default function Home() {
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        return JSON.parse(saved)
      }
    }
    return INITIAL_PUZZLE_PIECES
  })

  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
  const [currentGuess, setCurrentGuess] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(puzzlePieces))
  }, [puzzlePieces])

  const resetPuzzle = () => {
    setPuzzlePieces(INITIAL_PUZZLE_PIECES)
    setActiveTooltip(null)
    setCurrentGuess('')
    setMessage('')
  }

  const handleGuess = (id: number) => {
    const piece = puzzlePieces.find(p => p.id === id)
    if (!piece || piece.isResolved) return

    if (currentGuess.toLowerCase().trim() === piece.answer.toLowerCase()) {
      setPuzzlePieces(pieces =>
        pieces.map(p =>
          p.id === id ? { ...p, isResolved: true } : p
        )
      )
      setMessage('Correct!')
      setCurrentGuess('')
      setActiveTooltip(null)
    } else {
      setMessage('Not quite right... Try again!')
    }
  }

  const isComplete = puzzlePieces.every(piece => piece.isResolved)

  const renderPoemLine = (line: number) => {
    const pieces = puzzlePieces.filter(p => p.line === line)
    return (
      <div className={styles.poemLine} key={line}>
        {pieces.map(piece => (
          <div
            key={piece.id}
            className={`${styles.poemFragment} ${piece.isResolved ? styles.resolved : ''}`}
            onMouseEnter={() => !piece.isResolved && setActiveTooltip(piece.id)}
            onMouseLeave={() => setActiveTooltip(null)}
          >
            {piece.isResolved ? piece.poemFragment : '• • • • •'}
            {activeTooltip === piece.id && !piece.isResolved && (
              <Tooltip
                clue={piece.clue}
                onGuess={(e) => {
                  e.preventDefault()
                  handleGuess(piece.id)
                }}
                guess={currentGuess}
                onGuessChange={setCurrentGuess}
                message={message}
              />
            )}
          </div>
        ))}
      </div>
    )
  }

  return (
    <main className={styles.main}>
      <div className={styles.puzzleContainer}>
        {isComplete && (
          <div className={styles.completionMessage}>
            You're so smart Lover!!!
          </div>
        )}
        <div className={styles.poemSection}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(line => renderPoemLine(line))}
        </div>
        {/* <button onClick={resetPuzzle} className={styles.resetButton}>
          Reset Puzzle
        </button> */}
      </div>
    </main>
  )
}
