import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import PaginaEmConstrucao from "./PaginaEmConstrucao";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PaginaEmConstrucao />
  </StrictMode>,
)
