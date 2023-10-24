import { useContext, useEffect } from 'react'
import { ThemeContext } from './useTheme.tsx'

export enum Theme {
  Dark = 'dark',
  Light = 'light',
  Bear = 'bear',
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('Não é possível usar um theme sem um theme provider!')
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      context.setTheme(storedTheme as Theme)
    }
  }, [context])

  return context
}
