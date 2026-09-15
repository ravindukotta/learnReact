import type { ComponentType } from 'react'
import Lesson01Fragment from './01-fragment/Lesson'
import Lesson02ComponentVsUtility from './02-component-vs-utility/Lesson'
import Lesson03FunctionalVsClass from './03-functional-vs-class/Lesson'

export interface LessonEntry {
  id: string
  title: string
  Component: ComponentType
}

export const lessons: LessonEntry[] = [
  { id: '01-fragment', title: '1. React Fragment', Component: Lesson01Fragment },
  { id: '02-component-vs-utility', title: '2. Component vs Utility', Component: Lesson02ComponentVsUtility },
  { id: '03-functional-vs-class', title: '3. Functional vs Class', Component: Lesson03FunctionalVsClass },
]
