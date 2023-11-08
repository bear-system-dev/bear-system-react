import { SealCheck } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import './styles.css'

interface SuccessDialogProps {
  openSuccessDialog: boolean
  setOpenSuccessDialog: (open: boolean) => void
}

export function SuccessDialog({
  openSuccessDialog,
  setOpenSuccessDialog,
}: SuccessDialogProps) {
  return (
    <Dialog.Root open={openSuccessDialog} onOpenChange={setOpenSuccessDialog}>
      <Dialog.Portal>
        <Dialog.Content className="success-dialog-content">
          <Dialog.Title className="success-dialog-title">
            Recebemos suas informações. <br />
            Retornaremos em breve. <br />
            Obrigado!
          </Dialog.Title>
          <Dialog.Close
            onClick={() => setOpenSuccessDialog(false)}
            className="success-dialog__close"
          >
            <SealCheck weight="fill" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
