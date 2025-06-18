import { lazy } from 'react'

export const LessonDetailPageAsync = lazy(
  () => import('./LessonDetailPage'),
)
