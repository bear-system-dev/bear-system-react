import { Button } from '../../../../layout/Navbar/components/Button'
import './styles.css'

export function Hero() {
  return (
    <section className="hero">
      <div className="call-to-action">
        <h1 className="call-to-action__title">
          {title}
          <span>.</span>
        </h1>
        <h2 className="call-to-action__subtitle">{subtitle}</h2>
      </div>
      <Button />
    </section>
  )
}

const title = 'A sua equipe de Desenvolvimento'
const subtitle =
  'Impulsionamos o seu negócio com soluções digitais personalizadas e inovadoras. Transformando ideias em valor.'
