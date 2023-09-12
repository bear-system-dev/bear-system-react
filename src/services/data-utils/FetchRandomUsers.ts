import axios from 'axios'

export interface UserProfileDataProps {
  id: number
  name: string
  login: string
  bio: string
  html_url: string
  avatar_url: string
}

export async function fetchGitHubUserProfilesByUsernames(
  usernames: string[],
): Promise<UserProfileDataProps[]> {
  try {
    const userProfiles: UserProfileDataProps[] = []
    const githubToken = import.meta.env.VITE_GITHUB_API_TOKEN

    for (const username of usernames) {
      const userProfileResponse = await axios.get<UserProfileDataProps>(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${githubToken}`,
          },
        },
      )

      userProfiles.push(userProfileResponse.data)
    }

    return userProfiles
  } catch (error) {
    console.error('Error fetching user data', error)
    throw error
  }
}
