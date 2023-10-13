import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Navbar } from '../Navbar'
import { DialogMenu } from '../Navbar/components/DialogMenu'
import './styles.css'

interface HeaderStyleProps {
  variant: 'default' | 'alternative'
}

export function Header({ variant }: HeaderStyleProps) {
  const isMobile = useIsMobile()

  return (
    <header className={`header ${variant}`}>
      {variant === 'default' && <DialogMenu />}
      <NavLink to="/" title="home" className="navlink">
        <img src={logo} alt="logo Bear System" className="logo" />
      </NavLink>
      {variant === 'default' && !isMobile && <Navbar />}
    </header>
  )
}
