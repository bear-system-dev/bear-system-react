import './styles.css'

interface ButtonVariantProps {
  variant: 'primary' | 'secondary'
  label: string
  link: string
}

export function CardButton({ variant, label, link }: ButtonVariantProps) {
  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button className={`card__button--${variant}`}>{label}</button>
      </a>
    </div>
  )
}
