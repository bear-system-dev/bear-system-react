import { Lightbulb, MoonStars, PawPrint } from '@phosphor-icons/react'
import { Theme, useTheme } from '../../../hooks/useTheme/useTheme'
import './styles.css'

export function ThemeSelector() {
  const { theme, setTheme } = useTheme()

  function toogleTheme() {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark)
      localStorage.setItem('theme', Theme.Dark)
    } else if (theme === Theme.Dark) {
      setTheme(Theme.Bear)
      localStorage.setItem('theme', Theme.Bear)
    } else {
      setTheme(Theme.Light)
      localStorage.setItem('theme', Theme.Light)
    }
  }

  return (
    <button className="theme-selector" onClick={toogleTheme}>
      {theme === Theme.Light && <MoonStars weight="thin" />}
      {theme === Theme.Dark && <PawPrint weight="thin" />}
      {theme === Theme.Bear && <Lightbulb weight="thin" />}
    </button>
  )
}
