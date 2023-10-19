import { NavLink } from 'react-router-dom'
import styles from '../../App.module.scss'
import './styles.css'

export function Navbar() {
  return (
    <nav>
      <ul className="menu-list">
        {navItems.map((item) => {
          return (
            <NavLink
              key={item}
              to={item}
              className={`menu-list__item ${styles.item}`}
            >
              {item}
            </NavLink>
          )
        })}
      </ul>
    </nav>
  )
}

const navItems = [
  'Quem somos',
  'Soluções',
  'Comunidade',
  'Carreiras',
  'Contrate',
]
