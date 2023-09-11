import { NavLink } from 'react-router-dom'
import './styles.css'

export function Button() {
  return (
    <>
      {buttonLinks.map((item) => {
        return (
          <NavLink key={item} to={item} className="button-link">
            <button className="button">{item}</button>
          </NavLink>
        )
      })}
    </>
  )
}

const buttonLinks = ['Contrate']
