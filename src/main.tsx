import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@app/styles/index.css'

const container = document.getElementById('root')

const root = createRoot(container!)

root.render(
  <StrictMode>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
  </StrictMode>,
)
