import { NavLink } from 'react-router-dom'
import logoDarkMode from '../../assets/images/logo-dark-mode.svg'
import logo from '../../assets/images/logo.svg'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { Navbar } from '../Navbar'
import { DialogMenu } from '../Navbar/components/DialogMenu'
import { ThemeSelector } from './ThemeSelector'
import './styles.css'

export function Header() {
  const isMobile = useIsMobile()
  const { theme } = useTheme()

  return (
    <header className="header">
      <DialogMenu />
      <NavLink to="/" title="home" className="navlink">
        <img
          src={theme === 'light' ? logo : logoDarkMode}
          alt="logo Bear System"
          className="logo"
        />
      </NavLink>
      {!isMobile && <Navbar />}
      <ThemeSelector />
    </header>
  )
}
