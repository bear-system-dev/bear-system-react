import { zodResolver } from '@hookform/resolvers/zod'
import { SpinnerGap } from '@phosphor-icons/react'
import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ErrorDialog } from '../ErrorDialog'
import { SuccessDialog } from '../SuccessDialog'
import './styles.css'

const contrateFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve conter pelo menos 2 caracteres.' })
    .regex(/^([a-záéíóúâêôãõçäëïöü]+( [a-záéíóúâêôãõçäëïöü]+)*)$/i, {
      message: 'Por favor digite um nome válido.',
    }),

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
    .max(15),

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
  challenge: z
    .string()
    .nonempty({ message: 'Por favor digite a sua resposta' }),
  referral: z.string().nonempty({ message: 'Selecione uma opção' }),
  othersReferral: z.string().optional(),
})

export type FormProps = z.infer<typeof contrateFormSchema>

export function RecruitmentForm() {
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

  const [showOtherInput, setShowOtherInput] = useState(false)
  const [openSuccessDialog, setOpenSuccessDialog] = useState(false)
  const [openErrorDialog, setOpenErrorDialog] = useState(false)

  const handleReferralChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.currentTarget.value === 'Outros') {
      setShowOtherInput(true)
    } else {
      setShowOtherInput(false)
    }
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onSubmit = async (data: FormProps) => {
    setIsSubmitting(true)

    try {
      await axios.post(import.meta.env.VITE_RESEND_API_URL, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      setIsSubmitting(false)
      reset()
      setOpenSuccessDialog(true)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      setOpenErrorDialog(true)
    }
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
          <label className="recruitment-form__field-label" htmlFor="skills">
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
          <label className="recruitment-form__field-label" htmlFor="role">
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
          <label className="recruitment-form__field-label" htmlFor="tools">
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
          <label className="recruitment-form__field-label" htmlFor="databases">
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
          <label className="recruitment-form__field-label" htmlFor="criticism">
            <span>
              Como você lida com feedbacks construtivos e críticas em relação ao
              seu trabalho?
            </span>
          </label>
          <textarea
            className="recruitment-form__field-textarea"
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
          <label className="recruitment-form__field-label" htmlFor="strengths">
            <span>
              Por quê você acredita que seria uma boa adição à nossa equipe de
              desenvolvimento de software?
            </span>
          </label>
          <textarea
            className="recruitment-form__field-textarea"
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
          <label className="recruitment-form__field-label" htmlFor="challenge">
            <span>
              Desafiamos você a conceber uma ideia inovadora para um software,
              seja no âmbito de ferramentas online, automação, utilidade pública
              ou doméstica. Vale até mesmo algo teoricamente inviável. Sua
              imaginação e sua criatividade são os únicos limites neste desafio
              proposto por nós.
            </span>
          </label>
          <textarea
            className="recruitment-form__field-textarea"
            id="challenge"
            {...register('challenge', { required: true })}
          />
          {errors.challenge && (
            <span className="recruitment-form__error">
              {errors.challenge.message}
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
          {errors.referral && (
            <span className="recruitment-form__error">
              {errors.referral.message}
            </span>
          )}
        </div>
        {showOtherInput && (
          <div className="recruitment-form__field-container">
            <label
              className="recruitment-form__field-label"
              htmlFor="othersReferral"
            >
              <span>Por favor, detalhe como você soube sobre nós:</span>
            </label>
            <input
              type="text"
              className="recruitment-form__field-input"
              id="othersReferral"
              {...register('othersReferral', { required: true })}
            />
            {errors.othersReferral && (
              <span className="recruitment-form__error">
                {errors.othersReferral.message}
              </span>
            )}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="recruitment-form__botao"
      >
        {isSubmitting ? (
          <div className="spinner-container">
            <SpinnerGap />
          </div>
        ) : (
          'Enviar'
        )}
      </button>
      <SuccessDialog
        openSuccessDialog={openSuccessDialog}
        setOpenSuccessDialog={setOpenSuccessDialog}
      />
      <ErrorDialog
        openErrorDialog={openErrorDialog}
        setOpenErrorDialog={setOpenErrorDialog}
      />
    </form>
  )
}
