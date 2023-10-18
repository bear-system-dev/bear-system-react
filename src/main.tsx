import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { Theme } from './hooks/useTheme/useTheme.ts'
import { ThemeProvider } from './hooks/useTheme/useTheme.tsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider themeName={Theme.Light}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
