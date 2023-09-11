import { useEffect, useState } from 'react'
import { api } from '../../../services/lib/axios'
import './styles.css'

interface UserProfileDataProps {
  id: number
  name: string
  login: string
  bio: string
  html_url: string
  avatar_url: string
}

export function Card() {
  const [userProfileData, setUserProfileData] = useState(
    {} as UserProfileDataProps,
  )

  async function fetchUserProfileData() {
    const response = await api.get(`users/artenlf`)
    setUserProfileData(response.data)
  }

  useEffect(() => {
    fetchUserProfileData()
  }, [])

  return (
    <div className="card">
      <img
        className="card__foto-perfil"
        src={userProfileData.avatar_url}
        alt="foto de perfil"
      />
      <h3 className="card__nome">{userProfileData.name}</h3>
      <h6 className="card__apelido">{userProfileData.login}</h6>
      <span className="card__descricao">{userProfileData.bio}</span>
      <div className="card__botoes">
        <a
          href="https://github.com/artenlf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="card__botao--primario">GitHub</button>
        </a>
        <button disabled className="card__botao--secundario">
          Adicionar na Squad
        </button>
      </div>
      <div className="card__habilidades">
        <h6 className="card__habilidades--titulo">Skills</h6>
        <ul className="card__habilidades--lista">
          <li className="card__habilidades--item">Front End Development</li>
          <li className="card__habilidades--item">Back End Development</li>
          <li className="card__habilidades--item">React.js</li>
          <li className="card__habilidades--item">HTML</li>
          <li className="card__habilidades--item">CSS</li>
          <li className="card__habilidades--item">JavaScript</li>
          <li className="card__habilidades--item">TypeScript</li>
          <li className="card__habilidades--item">Node.js</li>
          <li className="card__habilidades--item">.NoSQL</li>
        </ul>
      </div>
    </div>
  )
}
