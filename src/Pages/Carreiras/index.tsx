import { Form } from './components/Form'
import './styles.css'

export function Carreiras() {
  return (
    <main>
      <section className="recruitment-form-and-clients-container">
        <div className="recruitment-form">
          <h1 className="recruitment-form__title">{formTitle}</h1>
          <Form />
        </div>
        <div className="recruitment-clients"></div>
      </section>
    </main>
  )
}

const formTitle = 'O próximo passo na sua jornada como desenvolvedor.'
