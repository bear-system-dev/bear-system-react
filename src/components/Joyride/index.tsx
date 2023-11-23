import { Question } from '@phosphor-icons/react'
import { MouseEvent, useState } from 'react'
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Theme, useTheme } from '../../hooks/useTheme/useTheme'
import './styles.css'

interface State {
  run: boolean
  steps: Step[]
}

if (typeof window !== 'undefined') {
  ;(window as unknown as { [key: string]: unknown }).global = window
}

export function JoyrideGuideHelper() {
  const isMobile = useIsMobile()

  const [{ run, steps }, setState] = useState<State>({
    run: false,
    steps: [
      {
        content: 'Vamos te ajudar!',
        locale: {
          next: <strong aria-label="iniciar">Iniciar</strong>,
          skip: <strong aria-label="pular">Pular</strong>,
        },
        placement: 'center',
        target: 'body',
        title: 'Está com dúvidas?',
      },
      {
        content: 'Clique no botão para alternar entre os temas',
        locale: {
          next: <strong aria-label="próximo">Próximo</strong>,
          back: <strong aria-label="voltar">Voltar</strong>,
          skip: <strong aria-label="sair">Sair</strong>,
        },
        placement: 'left',
        target: '.theme-selector',
        title: 'Seletor de temas',
      },
      {
        content: 'Um tema para quem é de luz!',
        locale: {
          next: <strong aria-label="próximo">Próximo</strong>,
          back: <strong aria-label="voltar">Voltar</strong>,
          skip: <strong aria-label="sair">Sair</strong>,
        },
        placement: 'left',
        target: '.theme-selector',
        title: 'Tema claro',
      },
      {
        content: 'Um tema para quem gosta de menos luminosidade!',
        locale: {
          next: <strong aria-label="próximo">Próximo</strong>,
          back: <strong aria-label="voltar">Voltar</strong>,
          skip: <strong aria-label="sair">Sair</strong>,
        },
        styles: {
          options: {
            arrowColor: '#181818',
            backgroundColor: '#181818',
            primaryColor: '#00875f',
            textColor: '#F2F2F2',
          },
        },
        placement: 'left',
        target: '.theme-selector',
        title: 'Tema escuro',
      },
      {
        content: 'Um tema para quem é Bear de corpo e alma!',
        locale: {
          next: <strong aria-label="próximo">Próximo</strong>,
          back: <strong aria-label="voltar">Voltar</strong>,
          skip: <strong aria-label="sair">Sair</strong>,
        },
        styles: {
          options: {
            arrowColor: '#00875f',
            backgroundColor: '#000',
            primaryColor: '#00875f',
            textColor: '#00875f',
          },
        },
        placement: 'left',
        target: '.theme-selector',
        title: 'Tema total bear',
      },
      {
        content: 'Boa navegação!',
        locale: {
          last: <strong aria-label="próximo">Finalizar</strong>,
          back: <strong aria-label="voltar">Voltar</strong>,
        },
        placement: 'center',
        target: 'body',
        title: 'Pronto para continuar?',
      },
    ],
  })

  const { setTheme } = useTheme()

  const handleClickStart = (event: MouseEvent<HTMLElement>) => {
    event.preventDefault()

    setState((prevState) => ({ ...prevState, run: true }))
  }

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status, step, type } = data
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED]

    if (type === 'step:before' && step.title === 'Tema escuro') {
      setTheme(Theme.Dark)
      localStorage.setItem('theme', Theme.Dark)
    }

    if (type === 'step:before' && step.title === 'Tema total bear') {
      setTheme(Theme.Bear)
      localStorage.setItem('theme', Theme.Bear)
    }

    if (
      (type === 'step:before' && step.title === 'Tema claro') ||
      (type === 'step:before' && step.title === 'Pronto para continuar?')
    ) {
      setTheme(Theme.Light)
      localStorage.setItem('theme', Theme.Light)
    }

    if (finishedStatuses.includes(status)) {
      setState((prevState) => ({ ...prevState, run: false }))
    }
  }

  return (
    <>
      <button className="help__button" onClick={handleClickStart}>
        {isMobile ? <Question weight="light" /> : 'ajuda'}
      </button>
      <Joyride
        callback={handleJoyrideCallback}
        continuous
        hideCloseButton
        run={run}
        scrollToFirstStep
        showSkipButton
        steps={steps}
        styles={{
          options: {
            arrowColor: '#F2F2F2',
            backgroundColor: '#F2F2F2',
            primaryColor: '#00875f',
            textColor: '#121214',
            width: 260,
            zIndex: 1000,
          },
        }}
      />
    </>
  )
}
