import { CaseList } from '../../utils/helpers/arrays'
import { CaseCard } from './CaseCard'
import './styles.css'

export function Solucoes() {
  const caseList = CaseList
  return (
    <main>
      <section className="solutions-container">
        <div className="solutions">
          <h1 className="solutions__title">{solutionsTitle}</h1>
          <h3 className="solutions__subtitle">{solutionsSubtitle}</h3>
        </div>
        {caseList.map((caseItem, index) => {
          return (
            <CaseCard
              key={index}
              variant={index % 2 === 0 ? 'even' : 'odd'}
              image={caseItem.image}
              title={caseItem.title}
              description={caseItem.description}
            />
          )
        })}
      </section>
    </main>
  )
}

const solutionsTitle = 'Soluções'
const solutionsSubtitle =
  'Das pequenas empresas às grandes indústrias, nosso excepcional time está preparado para auxiliar e impulsionar o seu negócio através de soluções personalizadas.'
