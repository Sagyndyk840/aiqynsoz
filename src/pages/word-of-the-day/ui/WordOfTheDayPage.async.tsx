import { lazy } from 'react'

export const WordOfTheDayPageAsync = lazy(
  () => import('./WordOfTheDayPage'),
)
