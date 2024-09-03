import { create } from "zustand"
import type { IProduct } from "@/types/product.interface"
import { Scrollbar } from "@/utils/scrollbar"

interface IPreviewModalStore {
  isOpen: boolean
  data?: IProduct
  onOpen: (data: IProduct) => void
  onClose: () => void
}

export const usePreviewModal = create<IPreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,
  onOpen: (data: IProduct): void => {
    Scrollbar.lock()
    set({ isOpen: true, data })
  },
  onClose: (): void => {
    Scrollbar.unlock()
    set({ isOpen: false, data: undefined })
  },
}))
