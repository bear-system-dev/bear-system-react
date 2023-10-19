import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react'
import { Theme } from './useTheme.ts'

interface ThemeProviderProps {
  themeName: Theme
  children: ReactNode
}

interface ThemeContextModel {
  theme: Theme
  setTheme: Dispatch<SetStateAction<Theme>>
}

export const ThemeContext = createContext<ThemeContextModel>(
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
