import { mockSkills } from '../../../../../utils/mocks/shuffleSkills'
import './styles.css'

export function CardSkills() {
  return (
    <div className="card__skills">
      <h6 className="card__skills-title">Skills</h6>
      <ul>
        {mockSkills.map((skill) => {
          return (
            <li key={skill} className="card__skills-item">
              {skill}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
