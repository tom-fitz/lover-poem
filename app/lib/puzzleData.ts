import { PuzzlePiece } from '../types'
  
export const INITIAL_PUZZLE_PIECES: PuzzlePiece[] = [
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
  ]
  
export const STORAGE_KEY = 'poem-puzzle-state'
  