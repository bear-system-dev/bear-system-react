import { AreasOfWork } from './AreasOfWork'
import { Cards } from './Cards'
import './styles.css'

export function QuemSomos() {
  return (
    <main>
      <section className="about-container">
        <div className="about">
          <h1 className="about__title">{aboutTitle}</h1>
          <h3 className="about__subtitle">{aboutSubtitle}</h3>
        </div>
        <AreasOfWork />

        <h2 className="about__stars-title">{aboutStarsTitle}</h2>
        <Cards />
      </section>
    </main>
  )
}

const aboutTitle = 'Quem Somos'
const aboutSubtitle =
  'Contamos com equipes completas, multidisciplinares e altamente qualificadas, empenhadas em acompanhar o ciclo de desenvolvimento do seu produto desde as etapas iniciais de concepção do produto até a implementação.'
const aboutStarsTitle = 'Nossos talentos'
