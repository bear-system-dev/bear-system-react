import { List, X } from '@phosphor-icons/react'
import * as Dialog from '@radix-ui/react-dialog'
import { Navbar } from '../..'
import './styles.css'

export function DialogMenu() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="dialog-menu__open">
        <List size={24} weight="thin" className="icon-list" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-menu-overlay" />
        <Dialog.Content className="dialog-menu-content">
          <Navbar />

          <Dialog.Close className="dialog-menu__close">
            <X size={24} weight="thin" className="icon-x" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
