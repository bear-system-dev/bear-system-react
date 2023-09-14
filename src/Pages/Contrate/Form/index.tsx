import './styles.css'

export function Form() {
  return (
    <form action="contrate">
      <div>
        <div className="form__fields-line">
          {formLabels.map((label) => {
            return (
              <div key={label} className="form__field-container">
                <label className="form__field-label" htmlFor={label}>
                  {label}
                </label>
                <input
                  className="form__field-input"
                  type="text"
                  name={label}
                  placeholder={label}
                />
              </div>
            )
          })}
        </div>
      </div>
    </form>
  )
}

const formLabels = ['name', 'email', 'company', 'role', 'phone', 'referral']
