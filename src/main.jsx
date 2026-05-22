import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PALETTES, DEFAULT_PALETTE_ID } from './constants/palettes'

const redirect = sessionStorage.redirect;
if (redirect) {
  sessionStorage.removeItem("redirect");
  window.history.replaceState(null, "", redirect);
}

const storedPaletteId = localStorage.getItem("portfolio.palette");
const initialPalette =
  PALETTES.find((p) => p.id === storedPaletteId) ||
  PALETTES.find((p) => p.id === DEFAULT_PALETTE_ID) ||
  PALETTES[0];
const rootEl = document.documentElement;
rootEl.style.setProperty("--c-bg", initialPalette.colors.bg);
rootEl.style.setProperty("--c-card", initialPalette.colors.card);
rootEl.style.setProperty("--c-accent", initialPalette.colors.accent);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
