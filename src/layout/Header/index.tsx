import { NavLink } from 'react-router-dom'
import styles from '../../App.module.scss'
import logoDarkMode from '../../assets/images/logo-dark-mode.svg'
import logo from '../../assets/images/logo.svg'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useTheme } from '../../hooks/useTheme/useTheme'
import { Navbar } from '../Navbar'
import { DialogMenu } from '../Navbar/components/DialogMenu'
import { ThemeSelector } from './ThemeSelector'
import './styles.css'

interface HeaderStyleProps {
  variant: 'default' | 'alternative'
}

export function Header({ variant }: HeaderStyleProps) {
  const isMobile = useIsMobile()
  const { theme } = useTheme()

  return (
    <header className={`header ${styles.header} ${variant}`}>
      {variant === 'default' && <DialogMenu />}
      <NavLink to="/" title="home" className="navlink">
        <img
          src={theme === 'light' ? logo : logoDarkMode}
          alt="logo Bear System"
          className="logo"
        />
      </NavLink>
      {variant === 'default' && !isMobile && <Navbar />}
      <ThemeSelector />
    </header>
  )
}
