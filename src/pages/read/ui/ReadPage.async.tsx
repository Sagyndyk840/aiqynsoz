import { lazy } from 'react'

export const ReadPageAsync = lazy(
  () => import('./ReadPage'),
)
