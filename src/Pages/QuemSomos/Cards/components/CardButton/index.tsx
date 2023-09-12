import './styles.css'

interface ButtonVariantProps {
  variant: 'primary' | 'secondary'
  label: string
}

export function CardButton({ variant, label }: ButtonVariantProps) {
  return (
    <div>
      <a
        href="https://github.com/artenlf"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className={`card__button--${variant}`}>{label}</button>
      </a>
    </div>
  )
}
