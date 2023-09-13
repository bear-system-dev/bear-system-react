import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Navbar } from '../Navbar'
import './styles.css'

interface HeaderStyleProps {
  variant: 'default' | 'alternative'
}

export function Header({ variant }: HeaderStyleProps) {
  return (
    <header className={`header ${variant}`}>
      <NavLink to="/" title="home" className="navlink">
        <img src={logo} alt="logo Bear System" />
      </NavLink>
      {variant === 'default' && <Navbar />}
    </header>
  )
}
