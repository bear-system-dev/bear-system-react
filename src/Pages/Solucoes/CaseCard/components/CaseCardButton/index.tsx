import { NavLink } from 'react-router-dom'
import './styles.css'

export function CaseCardButton() {
  return (
    <NavLink to="#" className="case-card-button-link">
      <button className="case-card-button">{buttonLink}</button>
    </NavLink>
  )
}

const buttonLink = 'ver solução'
