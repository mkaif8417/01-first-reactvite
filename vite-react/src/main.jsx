import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Print from './Custom .jsx'
import Another from './another.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Another/>
    <App />
    <Print/>
  </StrictMode>,
)
