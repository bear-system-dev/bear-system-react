import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Theme } from './hooks/useTheme/useTheme.ts'
import { ThemeProvider } from './hooks/useTheme/useTheme.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider themeName={Theme.Light}>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
