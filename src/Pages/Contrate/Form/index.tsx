import { useForm } from 'react-hook-form'
import './styles.css'

type FormData = Record<string, string>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  const onSubmit = (data: FormData) => console.log(data)

  return (
    <form action="contrate" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form__fields-line">
          {formTextInputs.map((textInput) => {
            const fieldName = textInput.label
            return (
              <div key={fieldName} className="form__field-container">
                <label className="form__field-label" htmlFor={fieldName}>
                  <span>{textInput.title}</span>
                </label>
                <input
                  className="form__field-input"
                  type="text"
                  form="contrate"
                  placeholder={textInput.placeholder}
                  {...register(fieldName, { required: true })}
                />
                {errors[fieldName] && (
                  <span className="form__error">Este campo é obrigatório</span>
                )}
              </div>
            )
          })}
          {formSelectInputs.map((selectInput, index) => {
            const fieldName = selectInput.label
            return (
              <div key={selectInput.label} className="form__field-container">
                <label
                  className="form__field-label"
                  htmlFor={selectInput.label}
                >
                  <span>{selectInput.title}</span>
                </label>
                <select
                  className="form__field-select form__field-select--arrow"
                  form="contrate"
                  {...register(fieldName, { required: true })}
                  defaultValue=""
                >
                  <option value="">
                    {index === selectInput.option.length
                      ? lastSelectOptionDefault
                      : 'selecione...'}
                  </option>
                  {selectInput.option.map((option) => {
                    return (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    )
                  })}
                </select>
                {errors[fieldName] && (
                  <span className="form__error">Este campo é obrigatório</span>
                )}
              </div>
            )
          })}
        </div>
      </div>
      <button type="submit" className="form__botao">
        iniciar
      </button>
    </form>
  )
}

const formTextInputs = [
  { label: 'name', title: 'nome', placeholder: '' },
  { label: 'email', title: 'e-mail', placeholder: '' },
  { label: 'company', title: 'nome da empresa', placeholder: '' },
  { label: 'role', title: 'seu cargo na empresa', placeholder: '' },
  { label: 'phone', title: 'número de telefone', placeholder: '' },
  {
    label: 'referral',
    title: 'estamos curiosos. Como você soube sobre nós?',
    placeholder: '',
  },
]
const formSelectInputs = [
  {
    label: 'needs',
    title: 'o quê você precisa?',
    option: [
      'contratar um desenvolvedor individual',
      'montar um time de desenvolvedores',
      'conhecer melhor a Bear System',
    ],
  },
  {
    label: 'duration',
    title: 'por quanto tempo você precisará da Bear System?',
    option: ['menos de 1 mês', '1-3 meses', 'mais de 3 meses'],
  },
  {
    label: 'priority',
    title: 'quando você precisa da Bear System?',
    option: ['1-2 semanas', '2-4 semanas', '+4 semanas'],
  },
  {
    label: 'skills',
    title: 'quais habilidades você precisa?',
    option: [
      'React.js',
      'React Native',
      'JavaScript',
      'TypeScript',
      'PHP',
      'Node.js',
      'Nest.js',
      'MongoDB',
      'Mobile',
      'DevOps',
      'Data / DBA',
      'SQL',
      'QA',
    ],
  },
]

export const lastSelectOptionDefault =
  'React.js, JavaScript, MongoDB, Node.js...'
