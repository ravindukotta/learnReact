import type { ComponentType } from 'react'
import Lesson01Fragment from './01-fragment/Lesson'

export interface LessonEntry {
  id: string
  title: string
  Component: ComponentType
}

export const lessons: LessonEntry[] = [
  { id: '01-fragment', title: '1. React Fragment', Component: Lesson01Fragment },
]
