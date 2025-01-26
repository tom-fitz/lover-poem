'use client'
import { useState, useEffect } from 'react'
import { Tooltip } from './Tooltip'
import styles from '../page.module.css'
import { loadPuzzleState, savePuzzleState } from '../lib/storage'
import { INITIAL_PUZZLE_PIECES } from '../lib/puzzleData'
import { PuzzlePiece } from '../types'

console.log({'answers': {
    '1': "Awwwe you're so cute",
    '2': "you figured out my riddle :)",
    "3": "You're still going to need to",
    "4": "figure out the rest of the puzzle"
}})

function getCountdown(): string {
  const march1st2025 = new Date('2025-03-01T00:00:00').getTime()
  const now = new Date().getTime()
  const distance = march1st2025 - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return `${days}d ${hours}h ${minutes}m ${seconds}s`
}

export function PuzzleContent() {
  const [mounted, setMounted] = useState(false)
  const [puzzlePieces, setPuzzlePieces] = useState<PuzzlePiece[]>(INITIAL_PUZZLE_PIECES)
  const [activeTooltip, setActiveTooltip] = useState<number | null>(null)
  const [currentGuess, setCurrentGuess] = useState('')
  const [message, setMessage] = useState('')
  const [countdown, setCountdown] = useState('')

  useEffect(() => {
    const saved = loadPuzzleState()
    if (saved) {
      setPuzzlePieces(saved)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      savePuzzleState(puzzlePieces)
    }
  }, [puzzlePieces, mounted])

  useEffect(() => {
    if (!mounted) return

    setCountdown(getCountdown())
    const timer = setInterval(() => {
      setCountdown(getCountdown())
    }, 1000)

    return () => clearInterval(timer)
  }, [mounted])

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

  if (!mounted) {
    return (
      <div className="flex-1 w-full max-w-5xl mx-auto 
        bg-[#04080F]/40 backdrop-blur-sm
        border border-[#DAE3E5]/20
        shadow-[0_0_15px_rgba(218,227,229,0.1)]
        rounded-lg
        p-4">
        <div className="h-full flex flex-col justify-center items-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 w-full max-w-5xl mx-auto 
      bg-[#04080F]/40 backdrop-blur-sm
      border border-[#DAE3E5]/20
      shadow-[0_0_15px_rgba(218,227,229,0.1)]
      rounded-lg
      p-4">
      {isComplete && (
        <div className={styles.completionMessage}>
          <p>You're soooooo smart Lover!!!</p>
          <p>❤️❤️❤️{countdown}❤️❤️❤️</p>
        </div>
      )}
      <div className="h-full flex flex-col justify-center">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(line => renderPoemLine(line))}
      </div>
      <div className="flex flex-col justify-center">
        <button onClick={resetPuzzle} className={styles.resetButton}>Reset Puzzle</button>
      </div>
    </div>
  )
} 