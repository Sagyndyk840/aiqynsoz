import { lazy } from 'react'

export const VideoDetailPageAsync = lazy(
  () => import('./VideoDetailPage'),
)
