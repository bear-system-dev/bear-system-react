import { NavLink } from 'react-router-dom'
import './styles.css'

export function Button() {
  return (
    <NavLink to={buttonLink} className="button-link">
      <button className="button">{buttonLink}</button>
    </NavLink>
  )
}

const buttonLink = 'contrate'
