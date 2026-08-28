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

const params = new URLSearchParams(window.location.search);
const viewParam = params.get('view');
const savedView = localStorage.getItem('portfolio.view_mode');
const isDev = viewParam === 'dev' || (!viewParam && savedView === 'dev');

const storageKey = isDev ? "portfolio.palette.dev" : "portfolio.palette.hr";
const storedPaletteId = localStorage.getItem(storageKey);
const defaultId = isDev ? DEFAULT_PALETTE_ID : "tokyo-night";

const initialPalette =
  PALETTES.find((p) => p.id === storedPaletteId) ||
  PALETTES.find((p) => p.id === defaultId) ||
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
