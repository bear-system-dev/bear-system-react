import { useEffect, useState } from 'react'
import styles from '../../../../App.module.scss'
import { generateRandomSkills } from '../../../../utils/mocks/shuffleSkills'
import { CardButton } from '../components/CardButton'
import { CardSkills } from '../components/skills'

interface CardProps {
  user: {
    avatar_url: string
    name: string
    login: string
    bio: string
    html_url: string
  }
  randomSkills: string[]
}

export function Card({ user }: CardProps) {
  const [randomSkills, setRandomSkills] = useState<string[]>([])

  useEffect(() => {
    const randomSkills = generateRandomSkills()
    setRandomSkills(randomSkills)
  }, [])

  return (
    <div
      className={`card card__background 
         ${styles.card}`}
    >
      <img
        className="card__avatar"
        src={user.avatar_url}
        alt="foto de perfil"
      />
      <h3 className="card__name">{user.name}</h3>
      <h6 className="card__username">{user.login}</h6>
      <span className="card__description">{user.bio}</span>
      <div className="card__buttons-container">
        <CardButton link={user.html_url} variant="primary" label="GitHub" />
        <CardButton link="#" variant="secondary" label="Adicionar na Squad" />
      </div>
      <div className="teste">
        <CardSkills skills={randomSkills} />
      </div>
    </div>
  )
}
