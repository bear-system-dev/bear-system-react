import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { Navbar } from '../Navbar'
import './styles.css'

export function Header() {
  return (
    <header className="header">
      <NavLink to="/" title="home" className="navlink">
        <img src={logo} alt="logo Bear System" />
      </NavLink>
      <Navbar />
    </header>
  )
}
