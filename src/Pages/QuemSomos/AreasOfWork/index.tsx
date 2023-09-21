import { Plus } from '@phosphor-icons/react/dist/ssr/Plus'
import designThumb from '../../../assets/images/areas-of-work/areas-design-01.png'
import developmentThumb from '../../../assets/images/areas-of-work/areas-dev-01.png'
import marketingThumb from '../../../assets/images/areas-of-work/areas-mobile-01.png'

import './styles.css'

export function AreasOfWork() {
  return (
    <div className="areas">
      {areas.map((area, index) => (
        <div className="areas__card" key={index}>
          <img
            src={area.image}
            alt={area.title}
            className="areas__card-image"
          />
          <h2 className="areas__card-title">{area.title}</h2>
          <ul className="areas__card-skills">
            {area.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>
                <Plus />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

const areas = [
  {
    title: 'Design',
    image: designThumb,
    skills: [
      'Mockup de produto',
      'Branding',
      'Ilustrações',
      'UI/UX',
      'Websites',
    ],
  },
  {
    title: 'Desenvolvimento',
    image: developmentThumb,
    skills: [
      'Prova de conceito e MVP',
      'Desenvolvimento de Software',
      'Micro-Serviços',
      'Melhorias de Perfomance',
      'Integração de Tecnologias',
      'Migração de Banco de Dados',
    ],
  },
  {
    title: 'Produtos',
    image: marketingThumb,
    skills: [
      'Melhorias UI/UX',
      'Novas Funcionalidades',
      'Otimização de SEO',
      'Marketing Afiliado',
      'Palavras-Chave',
      'Escrita de artigos',
    ],
  },
]
