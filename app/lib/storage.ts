import { PuzzlePiece } from '../types'
import { STORAGE_KEY } from './puzzleData'

export function loadPuzzleState(): PuzzlePiece[] | null {
  if (typeof window === 'undefined') return null
  
  const saved = localStorage.getItem(STORAGE_KEY)
  if (!saved) return null
  
  try {
    return JSON.parse(saved)
  } catch (e) {
    console.error('Failed to parse saved puzzle state:', e)
    return null
  }
}

export function savePuzzleState(state: PuzzlePiece[]): void {
  if (typeof window === 'undefined') return
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  } catch (e) {
    console.error('Failed to save puzzle state:', e)
  }
} 