import React, { useState } from 'react'
import { Theme } from './useTheme.ts'

interface ThemeProviderProps {
  themeName: Theme
  children: React.ReactNode
}

interface ThemeContextModel {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
}

export const ThemeContext = React.createContext<ThemeContextModel>(
  {} as ThemeContextModel,
)

export function ThemeProvider({ themeName, children }: ThemeProviderProps) {
  const [theme, setTheme] = useState(themeName)

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
