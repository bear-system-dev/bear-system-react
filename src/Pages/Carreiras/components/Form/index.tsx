import { zodResolver } from '@hookform/resolvers/zod'
import { SpinnerGap } from '@phosphor-icons/react'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import './styles.css'

const contrateFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve conter pelo menos 2 caracteres.' })
    .regex(/^([a-z\\-]+( [a-z\\-]+)?)$/i, {
      message: 'Nome deve conter apenas letras.',
    })
    .transform((name) =>
      name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),

  email: z.string().email({ message: 'Digite um e-mail válido.' }),

  age: z.string().refine(
    (value) => {
      const age = parseInt(value)
      return !isNaN(age) && age >= 5 && age <= 130
    },
    { message: 'Digite uma idade válida.' },
  ),

  phone: z
    .string()
    .min(14, {
      message: 'Digite um número de telefone válido.',
    })
    .max(15)
    .transform((phone) => phone.replace(/[^0-9]/g, '')),

  role: z.string().nonempty({ message: 'Selecione uma opção' }),

  skills: z.string().nonempty({ message: 'Por favor digite a sua resposta' }),
  tools: z.string().nonempty({ message: 'Por favor digite a sua resposta' }),
  databases: z
    .string()
    .nonempty({ message: 'Por favor digite a sua resposta' }),
  criticism: z
    .string()
    .nonempty({ message: 'Por favor digite a sua resposta' }),
  strengths: z
    .string()
    .nonempty({ message: 'Por favor digite a sua resposta' }),
  referral: z.string().nonempty({ message: 'Por favor digite a sua resposta' }),
})

export type FormProps = z.infer<typeof contrateFormSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    setError,
  } = useForm<FormProps>({ resolver: zodResolver(contrateFormSchema) })

  const preventNumbersOnNameField = (value: string) => {
    if (!value) return ''
    value = value.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ ]/g, '')
    return value
  }

  const handlePreventNumbersOnName = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const formattedName = preventNumbersOnNameField(value)
    e.target.value = formattedName
  }

  const handleVerifyEmailOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isValid = emailRegex.test(value)
    if (!isValid) {
      setError('email', {
        type: 'manual',
        message: 'Digite um e-mail válido.',
      })
    } else {
      setError('email', {})
    }
  }

  const preventLettersOnAgeField = (value: string) => {
    if (!value) return ''
    value = value.replace(/\D/g, '')
    return value
  }

  const handlePreventLettersOnAge = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const formattedAge = preventLettersOnAgeField(value)
    e.target.value = formattedAge
  }

  const handleVerifyAgeOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const age = parseInt(value)
    const isValid = !isNaN(age) && age >= 1 && age <= 130
    if (!isValid) {
      setError('age', {
        type: 'manual',
        message: 'Digite uma idade válida.',
      })
    } else {
      setError('age', {})
    }
  }
  const phoneMask = (phoneNumber: string) => {
    if (!phoneNumber) return ''
    phoneNumber = phoneNumber.replace(/\D/g, '')
    phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, '($1) $2')
    phoneNumber = phoneNumber.replace(/(\d)(\d{4})$/, '$1-$2')
    return phoneNumber
  }

  const handleVerifyPhoneOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const formattedPhone = phoneMask(value)
    e.target.value = formattedPhone

    if (formattedPhone.length >= 14) {
      setError('phone', {})
    }
  }

  const handleVerifyPhoneOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target

    if (value.length < 14) {
      setError('phone', {
        type: 'manual',
        message: 'Digite um número de telefone válido.',
      })
    }
  }

  const [showOtherInput, setShowOtherInput] = useState(false)

  const handleReferralChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === 'Outros') {
      setShowOtherInput(true)
    } else {
      setShowOtherInput(false)
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = (data: FormProps) => {
    setIsSubmitting(true)
    console.log(data)
    reset()
    // emailjs
    //   .send(
    //     import.meta.env.VITE_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    //     data,
    //     import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    //   )
    //   .then(
    //     (result) => {
    //       console.log('E-mail enviado com sucesso:', result.text)
    //       setIsSubmitting(false)
    //       reset()
    //     },
    //     (error) => {
    //       console.log('Erro ao enviar e-mail:', error.text)
    //       setIsSubmitting(false)
    //     },
    //   )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="recruitment-form__fields-line">
        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="name">
            <span>Nome</span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="text"
            id="name"
            {...register('name', { required: true })}
            onInput={handlePreventNumbersOnName}
          />
          {errors.name && (
            <span className="recruitment-form__error">
              {errors.name.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="email">
            <span>E-mail</span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="email"
            id="email"
            {...register('email', { required: true })}
            onBlur={handleVerifyEmailOnBlur}
          />
          {errors.email && (
            <span className="recruitment-form__error">
              {errors.email.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="age">
            <span>Idade</span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="text"
            id="age"
            maxLength={3}
            {...register('age', { required: true })}
            onChange={handlePreventLettersOnAge}
            onBlur={handleVerifyAgeOnBlur}
          />
          {errors.age && (
            <span className="recruitment-form__error">
              {errors.age.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="phone">
            <span>Número de telefone para contato</span>
          </label>

          <input
            className="recruitment-form__field-input"
            type="tel"
            {...register('phone', { required: true })}
            onChange={handleVerifyPhoneOnChange}
            onBlur={handleVerifyPhoneOnBlur}
            minLength={14}
            maxLength={15}
          />
          {errors.phone && (
            <span className="recruitment-form__error">
              {errors.phone.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="name">
            <span>
              Quais tecnologias e linguagens de programação você domina?
            </span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="text"
            id="skills"
            {...register('skills', { required: true })}
          />
          {errors.skills && (
            <span className="recruitment-form__error">
              {errors.skills.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="needs">
            <span>Qual área de desenvolvimento você prefere?</span>
          </label>
          <select
            className="recruitment-form__field-select recruitment-form__field-select--arrow"
            id="role"
            {...register('role', { required: true })}
          >
            <option value="">Selecione...</option>
            <option value="Front-End">Front-End</option>
            <option value="Back-End">Back-End</option>
            <option value="Full-Stack">Full-Stack</option>
            <option value="UI/UX">UI/UX</option>
            <option value="QA">QA</option>
            <option value="Produtos e Staff">Produtos e Staff</option>
            <option value="Vendas e Suporte">Vendas e Suporte</option>
          </select>
          {errors.role && (
            <span className="recruitment-form__error">
              {errors.role.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="name">
            <span>
              Você utiliza algum framework ou ferramenta para facilitar o
              desenvolvimento de software?
            </span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="text"
            id="tools"
            {...register('tools', { required: true })}
          />
          {errors.tools && (
            <span className="recruitment-form__error">
              {errors.tools.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="name">
            <span>
              Você tem familiaridade com bancos de dados? (MySQL, PostgreSQL,
              SQLite, MongoDB, ScyllaDB, etc.). Se sim, quais?
            </span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="text"
            id="databases"
            {...register('databases', { required: true })}
          />
          {errors.databases && (
            <span className="recruitment-form__error">
              {errors.databases.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="name">
            <span>
              Como você lida com feedbacks construtivos e críticas em relação ao
              seu trabalho?
            </span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="text"
            id="criticism"
            {...register('criticism', { required: true })}
          />
          {errors.criticism && (
            <span className="recruitment-form__error">
              {errors.criticism.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="name">
            <span>
              Por quê você acredita que seria uma boa adição à nossa equipe de
              desenvolvimento de software?
            </span>
          </label>
          <input
            className="recruitment-form__field-input"
            type="text"
            id="strengths"
            {...register('strengths', { required: true })}
          />
          {errors.strengths && (
            <span className="recruitment-form__error">
              {errors.strengths.message}
            </span>
          )}
        </div>

        <div className="recruitment-form__field-container">
          <label className="recruitment-form__field-label" htmlFor="referral">
            <span>Estamos curiosos. Como você soube sobre nós?</span>
          </label>
          <select
            className="recruitment-form__field-select recruitment-form__field-select--arrow"
            id="referral"
            {...register('referral', { required: true })}
            onChange={handleReferralChange}
          >
            <option value="">Selecione...</option>
            <option value="Discord">Discord</option>
            <option value="Amigos ou Indicação">Amigos ou Indicação</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Indeed">Indeed</option>
            <option value="GitHub">GitHub</option>
            <option value="Instagram">Instagram</option>
            <option value="Outros">Outros</option>
          </select>
        </div>
        {errors.referral && (
          <span className="recruitment-form__error">
            {errors.referral.message}
          </span>
        )}
        {showOtherInput && (
          <div className="recruitment-form__field-container">
            <label
              className="recruitment-form__field-label"
              htmlFor="otherReferral"
            >
              <span>Por favor, detalhe como você soube sobre nós:</span>
            </label>
            <input
              type="text"
              className="recruitment-form__field-input"
              id="referral"
              {...register('referral', { required: true })}
            />
          </div>
        )}
      </div>
      <button type="submit" className="recruitment-form__botao">
        {isSubmitting ? (
          <div className="spinner-container">
            <SpinnerGap />
          </div>
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  )
}
