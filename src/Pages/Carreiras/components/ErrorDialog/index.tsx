import { SealWarning } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import './styles.css'

interface ErrorDialogProps {
  openErrorDialog: boolean
  setOpenErrorDialog: (open: boolean) => void
}

export function ErrorDialog({
  openErrorDialog,
  setOpenErrorDialog,
}: ErrorDialogProps) {
  return (
    <Dialog.Root open={openErrorDialog} onOpenChange={setOpenErrorDialog}>
      <Dialog.Portal>
        <Dialog.Content className="error-dialog-content">
          <Dialog.Title className="error-dialog-title">
            Ops! Algo saiu errado. <br />
            Por favor, tente novamente.
          </Dialog.Title>
          <Dialog.Close
            onClick={() => setOpenErrorDialog(false)}
            className="error-dialog__close"
          >
            <SealWarning weight="fill" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
