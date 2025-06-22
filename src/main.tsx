import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@app/styles/index.css'
import { RouterProvider } from 'react-router-dom'
import App from '@app/App'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
