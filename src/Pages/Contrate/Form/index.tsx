import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import InputMask from 'react-input-mask'
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

  email: z.string().email(),

  company: z
    .string()
    .transform((company) =>
      company.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase()),
    ),

  role: z.string(),

  phone: z
    .string()
    .min(14, {
      message: 'Telefone inválido',
    })
    .max(15, { message: 'Telefone inválido' }),

  referral: z.string(),
  needs: z.string(),
  duration: z.string(),
  priority: z.string(),
  skills: z.string(),
})

type FormProps = z.infer<typeof contrateFormSchema>

export function Form() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(contrateFormSchema) })

  const onSubmit = (data: FormProps) => console.log(data)

  return (
    <form action="contrate" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <div className="form__fields-line">
          <div className="form__field-container">
            <label className="form__field-label" htmlFor="name">
              <span>nome</span>
            </label>
            <input
              className="form__field-input"
              type="text"
              form="contrate"
              placeholder=""
              {...register('name', { required: true })}
            />
            {errors.name && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="email">
              <span>e-mail</span>
            </label>
            <input
              className="form__field-input"
              type="email"
              form="contrate"
              placeholder=""
              {...register('email', { required: true })}
            />
            {errors.email && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="company">
              <span>nome da empresa</span>
            </label>
            <input
              className="form__field-input"
              type="text"
              form="contrate"
              placeholder=""
              {...register('company', { required: true })}
            />
            {errors.company && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="role">
              <span>seu cargo na empresa</span>
            </label>
            <input
              className="form__field-input"
              type="text"
              form="contrate"
              placeholder=""
              {...register('role', { required: true })}
            />
            {errors.role && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="phone">
              <span>número de telefone</span>
            </label>
            <Controller
              control={control}
              {...register('phone', { required: true })}
              render={({ field }) => {
                return (
                  <div>
                    <InputMask
                      {...field}
                      className="form__field-input"
                      type="tel"
                      inputRef={field.ref}
                      mask={
                        field.value && field.value[5] === '9'
                          ? '(99) 99999-9999'
                          : '(99) 9999-9999'
                      }
                    />
                    {errors.phone && (
                      <span className="form__error">
                        Este campo é obrigatório
                      </span>
                    )}
                  </div>
                )
              }}
            />
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="referral">
              <span>estamos curiosos. Como você soube sobre nós?</span>
            </label>
            <input
              className="form__field-input"
              type="tel"
              form="contrate"
              placeholder=""
              {...register('referral', { required: true })}
            />
            {errors.referral && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="needs">
              <span>o quê você precisa?</span>
            </label>
            <select
              className="form__field-select form__field-select--arrow"
              form="contrate"
              {...register('needs', { required: true })}
              defaultValue=""
            >
              <option value="">selecione...</option>
              <option value="">contratar um desenvolvedor individual</option>
              <option value="">montar um time de desenvolvedores</option>
              <option value="">conhecer melhor a Bear System</option>
            </select>
            {errors.needs && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="duration">
              <span>por quanto tempo você precisará da Bear System?</span>
            </label>
            <select
              className="form__field-select form__field-select--arrow"
              form="contrate"
              {...register('duration', { required: true })}
              defaultValue=""
            >
              <option value="">selecione...</option>
              <option value="">menos de 1 mês</option>
              <option value="">1-3 meses</option>
              <option value="">mais de 3 meses</option>
            </select>
            {errors.duration && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="priority">
              <span>quando você precisa da Bear System?</span>
            </label>
            <select
              className="form__field-select form__field-select--arrow"
              form="contrate"
              {...register('priority', { required: true })}
              defaultValue=""
            >
              <option value="">selecione...</option>
              <option value="">1-2 semanas</option>
              <option value="">2-4 semanas</option>
              <option value="">+4 semanas</option>
            </select>
            {errors.priority && (
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>

          <div className="form__field-container">
            <label className="form__field-label" htmlFor="skills">
              <span>quais habilidades você precisa?</span>
            </label>
            <select
              className="form__field-select form__field-select--arrow"
              form="contrate"
              {...register('skills', { required: true })}
              defaultValue=""
            >
              <option value="">
                React.js, JavaScript, MongoDB, Node.js...
              </option>
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
              <span className="form__error">Este campo é obrigatório</span>
            )}
          </div>
        </div>
      </div>
      <button type="submit" className="form__botao">
        iniciar
      </button>
    </form>
  )
}
