import { Lightbulb, MoonStars, PawPrint } from '@phosphor-icons/react'
import { Theme, useTheme } from '../../../hooks/useTheme/useTheme'
import './styles.css'

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  return (
    <button
      className="theme-selector"
      onClick={
        theme === Theme.Light
          ? () => setTheme(Theme.Dark)
          : theme === Theme.Dark
          ? () => setTheme(Theme.Bear)
          : () => setTheme(Theme.Light)
      }
    >
      {theme === Theme.Light && <MoonStars weight="thin" />}
      {theme === Theme.Dark && <PawPrint weight="thin" />}
      {theme === Theme.Bear && <Lightbulb weight="thin" />}
    </button>
  )
}
