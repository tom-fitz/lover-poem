import { FormEvent } from 'react'
import styles from './Tooltip.module.css'

interface TooltipProps {
  clue: string
  onGuess: (e: FormEvent) => void
  guess: string
  onGuessChange: (value: string) => void
  message: string
}

export function Tooltip({ clue, onGuess, guess, onGuessChange, message }: TooltipProps) {
  return (
    <div className={styles.tooltip}>
      <p className={styles.clue}>{clue}</p>
      <form onSubmit={onGuess} className={styles.form}>
        <input
          type="text"
          value={guess}
          onChange={(e) => onGuessChange(e.target.value)}
          placeholder="Enter your answer..."
          className={styles.input}
        />
        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  )
} 