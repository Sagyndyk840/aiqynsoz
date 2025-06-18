import { lazy } from 'react'

export const SpeechPageAsync = lazy(
  () => import('./SpeechPage'),
)
