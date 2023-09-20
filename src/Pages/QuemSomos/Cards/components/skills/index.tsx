import './styles.css'

interface CardSkillsProps {
  skills: string[]
}

export function CardSkills({ skills }: CardSkillsProps) {
  return (
    <div className="card__skills">
      <h6 className="card__skills-title">Skills</h6>
      <ul>
        {skills.map((skill) => {
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
