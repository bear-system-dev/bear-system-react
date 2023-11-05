import videoBg from '../../assets/videos/running_bg2.mp4'
import { ButtonToRecruitmentForm } from './components/Button'
import { Form } from './components/Form'
import './styles.css'

export function Carreiras() {
  return (
    <main>
      <section className="careers-hero">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          width={1920}
          className="careers-background-video"
        />
        <div className="careers-call-to-action">
          <h1 className="careers-call-to-action__title">
            {title}
            <span>.</span>
          </h1>
          <h2 className="careers-call-to-action__subtitle">{subtitle}</h2>
          <ButtonToRecruitmentForm />
        </div>
      </section>
      <section className="recruitment-form" id="recruitmentForm">
        <div>
          <h1 className="recruitment-form__title">{formTitle}</h1>
          <Form />
        </div>
      </section>
    </main>
  )
}

const formTitle =
  'Conte-nos um pouco sobre você. Iremos retornar o contato em breve.'

const title = 'O próximo passo na sua jornada como desenvolvedor'
const subtitle =
  'Expanda seus Horizontes e encare novos desafios junto a uma comunidade altamente motivada.'
