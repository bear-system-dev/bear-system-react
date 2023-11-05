import './styles.css'

export function ButtonToRecruitmentForm() {
  const scrollToRecruitmentForm = () => {
    const recruitmentForm = document.getElementById('recruitmentForm')
    if (recruitmentForm) {
      recruitmentForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <button className="careers-button" onClick={scrollToRecruitmentForm}>
      iniciar
    </button>
  )
}
