import { skillsList } from '../helpers/arrays'

function shuffleSkillsArray<T>(skillsArray: T[]): T[] {
  const shuffledSkillsArray: T[] = [...skillsArray]
  for (let i = shuffledSkillsArray.length - 1; i > 0; i--) {
    const j: number = Math.floor(Math.random() * (i + 1))
    ;[shuffledSkillsArray[i], shuffledSkillsArray[j]] = [
      shuffledSkillsArray[j],
      shuffledSkillsArray[i],
    ]
  }
  return shuffledSkillsArray
}

export function generateRandomSkills(): string[] {
  const shuffledSkillsArray = shuffleSkillsArray(skillsList)
  return shuffledSkillsArray.slice(0, 10)
}
