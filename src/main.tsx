import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from '@app/App'
import { RouterProvider } from 'react-router-dom'
import '@/app/styles/index.css'
import '@/app/providers/i18n'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
