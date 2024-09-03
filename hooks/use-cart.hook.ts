import { create } from "zustand"
import toast from "react-hot-toast"
import type { IProduct } from "@/types/product.interface"
import { createJSONStorage, persist } from "zustand/middleware"

interface ICartStore {
  items: IProduct[]
  addItem: (item: IProduct) => void
  removeItem: (id: string) => void
  clearCart: () => void
}

export const useCart = create(
  persist<ICartStore>(
    (set, get) => ({
      items: [],
      addItem: (item: IProduct) => {
        const currentItems = get().items
        const existingItem = currentItems.find((i) => i.id === item.id)

        if (existingItem) {
          return toast("Item added to cart")
        }

        set({ items: [...currentItems, item] })
        toast("Item added to cart")
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
        toast("Item removed from cart")
      },
      clearCart: () => {
        set(() => ({
          items: [],
        }))
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
