import { useEffect, useState } from 'react'
import {
  UserProfileDataProps,
  fetchGitHubUserProfilesByUsernames,
} from '../../../services/data-utils/FetchRandomUsers'
import { githubUsersList } from '../../../utils/helpers/arrays'
import { CardButton } from './components/CardButton'
import { CardSkills } from './components/skills'
import './styles.css'

export function Cards() {
  const [userProfileData, setUserProfileData] = useState<
    UserProfileDataProps[]
  >([])

  useEffect(() => {
    async function fetchData() {
      try {
        const randomUserProfiles =
          await fetchGitHubUserProfilesByUsernames(githubUsersList)
        setUserProfileData(randomUserProfiles)
      } catch (error) {
        console.error('Error fetching user data', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="card-grid-container">
      {userProfileData.map((user) => {
        return (
          <div key={user.id} className="card card__background">
            <img
              className="card__avatar"
              src={user.avatar_url}
              alt="foto de perfil"
            />
            <h3 className="card__name">{user.name}</h3>
            <h6 className="card__username">{user.login}</h6>
            <span className="card__description">{user.bio}</span>
            <div className="card__buttons-container">
              <CardButton variant="primary" label="GitHub" />
              <CardButton variant="secondary" label="Adicionar na Squad" />
            </div>
            <CardSkills />
          </div>
        )
      })}
    </div>
  )
}
