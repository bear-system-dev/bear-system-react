import { useEffect, useState } from 'react'
import {
  UserProfileDataProps,
  fetchGitHubUserProfilesByUsernames,
} from '../../../services/data-utils/FetchGitHubUsers'
import { githubUsersList } from '../../../utils/helpers/arrays'
import { Card } from './Card'
import './styles.css'

export function Cards() {
  const [userGithubData, setGithubProfileData] = useState<
    UserProfileDataProps[]
  >([])

  useEffect(() => {
    async function fetchData() {
      const githubUsername = githubUsersList.map((user) => user.username)

      try {
        const githubUserProfiles =
          await fetchGitHubUserProfilesByUsernames(githubUsername)

        setGithubProfileData(githubUserProfiles)
      } catch (error) {
        console.error('Error fetching user data', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="card-grid-container">
      {userGithubData.map((user) => {
        const userSkills =
          githubUsersList.find((u) => u.username === user.login)?.skills || []
        return <Card key={user.id} user={user} skills={userSkills} />
      })}
    </div>
  )
}
