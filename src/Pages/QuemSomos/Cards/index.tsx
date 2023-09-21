import { useEffect, useState } from 'react'
import {
  UserProfileDataProps,
  fetchGitHubUserProfilesByUsernames,
} from '../../../services/data-utils/FetchGitHubUsers'
import { githubUsersList } from '../../../utils/helpers/arrays'
import { Card } from './Card'
import './styles.css'

export function Cards() {
  const [userProfileData, setUserProfileData] = useState<
    UserProfileDataProps[]
  >([])

  useEffect(() => {
    async function fetchData() {
      try {
        const githubUserProfiles =
          await fetchGitHubUserProfilesByUsernames(githubUsersList)
        setUserProfileData(githubUserProfiles)
      } catch (error) {
        console.error('Error fetching user data', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="card-grid-container">
      {userProfileData.map((user) => {
        return <Card key={user.id} user={user} randomSkills={[]} />
      })}
    </div>
  )
}
