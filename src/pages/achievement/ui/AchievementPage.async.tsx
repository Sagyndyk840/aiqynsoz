import { lazy } from 'react'

export const AchievementPageAsync = lazy(
  () => import('./AchievementPage'),
)
