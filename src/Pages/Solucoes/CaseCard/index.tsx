import { CaseCardButton } from './components/CaseCardButton'
import './styles.css'

interface CaseCardProps {
  description: string
  image: string
  title: string
  variant: 'odd' | 'even'
}

export function CaseCard({
  variant,
  image,
  title,
  description,
}: CaseCardProps) {
  return (
    <div className="case-card">
      {variant === 'even' ? (
        <>
          <img src={image} alt="Shoe Store" className="case-card__image" />
          <div className="case-card__text">
            <h2 className="case-card__title">{title}</h2>
            <p className="case-card__description">{description}</p>
            <CaseCardButton />
          </div>
        </>
      ) : (
        <>
          <div className="case-card__text">
            <h2 className="case-card__title">{title}</h2>
            <p className="case-card__description">{description}</p>
            <CaseCardButton />
          </div>
          <img src={image} alt="Shoe Store" className="case-card__image" />
        </>
      )}
    </div>
  )
}
