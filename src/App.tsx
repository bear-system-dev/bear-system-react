import { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import styles from './App.module.scss'
import { Router } from './Router/Router'
import { useTheme } from './hooks/useTheme/useTheme'

export function App() {
  const { theme } = useTheme()
  useEffect(() => {
    while (document.body.classList.length) {
      document.body.classList.remove(document.body.classList[0])
    }
    document.body.classList.add(theme)
    document.body.classList.add('body')
  }, [theme])

  return (
    <BrowserRouter>
      <div className={`${styles[theme]}`}>
        <Router />
      </div>
    </BrowserRouter>
  )
}
