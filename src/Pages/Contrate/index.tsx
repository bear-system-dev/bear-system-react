import { Form } from './components/Form'
import './styles.css'

export function Contrate() {
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

const formTitle =
  'Contrate equipes de desenvolvedores de alto desempenho sob demanda.'
