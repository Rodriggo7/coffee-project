import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//estilos
import './styles/variables.css'   // 1. Variables primero
import './styles/base.css'        // 2. Base
import './styles/layout.css'      // 3. Estructura
import './styles/components.css'  // 4. UI Kit
import './styles/landing.css'     // 5. Páginas específicas
import './styles/auth.css'        // 6. Login y Registro
import './styles/menu.css'        // 7. Carta Digital

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
