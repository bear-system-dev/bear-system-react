import { ClientsColumn } from './components/Clients'
import { Form } from './components/Form'
import './styles.css'

export function Contrate() {
  return (
    <main className="hire">
      <section className="form-and-clients-container">
        <div className="form">
          <h1 className="form__title">{formTitle}</h1>
          <Form />
        </div>
        <ClientsColumn />
      </section>
    </main>
  )
}

const formTitle =
  'Contrate equipes de desenvolvedores de alto desempenho sob demanda.'
