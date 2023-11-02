import { Form } from './components/Form'
import './styles.css'

export function Carreiras() {
  return (
    <main>
      <section className="form-and-clients-container">
        <div className="form">
          <h1 className="form__title">{formTitle}</h1>
          <Form />
        </div>
        <div className="clients"></div>
      </section>
    </main>
  )
}

const formTitle = 'O próximo passo na sua jornada como desenvolvedor.'
