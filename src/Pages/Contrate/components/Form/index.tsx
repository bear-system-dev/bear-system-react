import { zodResolver } from '@hookform/resolvers/zod'
import { ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import './styles.css'

const contrateFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'O nome deve conter pelo menos 2 caracteres.' })
    .regex(/^([a-z\\-]+( [a-z\\-]+)?)$/i, {
      message: 'Usuário deve conter apenas letras.',
    })
    .transform((name) =>
      name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),

  email: z.string().email({ message: 'Digite um e-mail válido.' }),

  company: z
    .string()
    .transform((company) =>
      company.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),

  role: z.string(),

  phone: z
    .string()
    .min(14, {
      message: 'Digite um número de telefone válido.',
    })
    .max(15)
    .transform((phone) => phone.replace(/[^0-9]/g, '')),

  referral: z.string(),
  needs: z.string().nonempty({ message: 'Selecione uma opção' }),
  duration: z.string().nonempty({ message: 'Selecione uma opção' }),
  priority: z.string().nonempty({ message: 'Selecione uma opção' }),
  skills: z.string().nonempty({ message: 'Selecione uma opção' }),
})

type FormProps = z.infer<typeof contrateFormSchema>

export function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<FormProps>({ resolver: zodResolver(contrateFormSchema) })

  const onSubmit = (data: FormProps) => {
    console.log(data)
  }

  const phoneMask = (phoneNumber: string) => {
    if (!phoneNumber) return ''
    phoneNumber = phoneNumber.replace(/\D/g, '')
    phoneNumber = phoneNumber.replace(/(\d{2})(\d)/, '($1) $2')
    phoneNumber = phoneNumber.replace(/(\d)(\d{4})$/, '$1-$2')
    return phoneNumber
  }

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const formattedPhone = phoneMask(value)
    const isValid = formattedPhone.length >= 14

    const errorOptions = isValid
      ? {}
      : {
          type: 'manual',
          message: 'Digite um número de telefone válido.',
        }

    setError('phone', errorOptions)

    e.target.value = formattedPhone
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__fields-line">
        <div className="form__field-container">
          <label className="form__field-label" htmlFor="name">
            <span>Nome</span>
          </label>
          <input
            className="form__field-input"
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <span className="form__error">{errors.name.message}</span>
          )}
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="email">
            <span>E-mail</span>
          </label>
          <input
            className="form__field-input"
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
          {errors.email && (
            <span className="form__error">{errors.email.message}</span>
          )}
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="company">
            <span>Nome da empresa</span>
          </label>
          <input
            className="form__field-input"
            type="text"
            id="company"
            {...register('company', { required: true })}
          />
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="role">
            <span>Seu cargo na empresa</span>
          </label>
          <input
            className="form__field-input"
            type="text"
            id="role"
            {...register('role', { required: true })}
          />
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="phone">
            <span>Número de telefone</span>
          </label>

          <input
            className="form__field-input"
            type="tel"
            {...register('phone', { required: true })}
            onChange={handlePhoneChange}
            minLength={14}
            maxLength={15}
          />
          {errors.phone && (
            <span className="form__error">{errors.phone.message}</span>
          )}
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="referral">
            <span>Estamos curiosos. Como você soube sobre nós?</span>
          </label>
          <input
            className="form__field-input"
            type="text"
            id="referral"
            {...register('referral', { required: true })}
          />
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="needs">
            <span>O que você precisa?</span>
          </label>
          <select
            className="form__field-select form__field-select--arrow"
            id="needs"
            {...register('needs', { required: true })}
          >
            <option value="">Selecione...</option>
            <option value="contratar">
              Contratar um desenvolvedor individual
            </option>
            <option value="montar">Montar um time de desenvolvedores</option>
            <option value="conhecer">Conhecer melhor a Bear System</option>
          </select>
          {errors.needs && (
            <span className="form__error">{errors.needs.message}</span>
          )}
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="duration">
            <span>Por quanto tempo você precisará da Bear System?</span>
          </label>
          <select
            className="form__field-select form__field-select--arrow"
            id="duration"
            {...register('duration', { required: true })}
          >
            <option value="">Selecione...</option>
            <option value="menos-de-1-mes">Menos de 1 mês</option>
            <option value="1-3-meses">1-3 meses</option>
            <option value="mais-de-3-meses">Mais de 3 meses</option>
          </select>
          {errors.duration && (
            <span className="form__error">{errors.duration.message}</span>
          )}
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="priority">
            <span>Quando você precisa da Bear System?</span>
          </label>
          <select
            className="form__field-select form__field-select--arrow"
            id="priority"
            {...register('priority', { required: true })}
          >
            <option value="">Selecione...</option>
            <option value="1-2-semanas">1-2 semanas</option>
            <option value="2-4-semanas">2-4 semanas</option>
            <option value="+4-semanas">+4 semanas</option>
          </select>
          {errors.priority && (
            <span className="form__error">{errors.priority.message}</span>
          )}
        </div>

        <div className="form__field-container">
          <label className="form__field-label" htmlFor="skills">
            <span>Quais habilidades você precisa?</span>
          </label>
          <select
            className="form__field-select form__field-select--arrow"
            id="skills"
            {...register('skills', { required: true })}
          >
            <option value="">Selecione...</option>
            <option value="react">React.js</option>
            <option value="reactNative">React Native</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="php">PHP</option>
            <option value="nodejs">Node.js</option>
            <option value="nestjs">Nest.js</option>
            <option value="mongodb">MongoDB</option>
            <option value="mobile">Mobile</option>
            <option value="dataDba">Data / DBA</option>
            <option value="sql">SQL</option>
            <option value="qa">QA</option>
          </select>
          {errors.skills && (
            <span className="form__error">{errors.skills.message}</span>
          )}
        </div>
      </div>
      <button type="submit" className="form__botao">
        Iniciar
      </button>
    </form>
  )
}
