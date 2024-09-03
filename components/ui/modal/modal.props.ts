import type { PropsWithChildren } from "react"

export interface IModalProps extends PropsWithChildren {
  isOpen: boolean
  onClose: () => void
}
