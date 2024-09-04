import { create } from "zustand"
import toast from "react-hot-toast"
import type { IProduct } from "@/types/product.interface"
import { createJSONStorage, persist } from "zustand/middleware"

interface IWishListStore {
  items: IProduct[]
  addItem: (item: IProduct) => void
  removeItem: (id: string) => void
  clear: () => void
}

export const useWishList = create(
  persist<IWishListStore>(
    (set, get) => ({
      items: [],
      addItem: (item: IProduct) => {
        const currentItems = get().items
        const existingItem = currentItems.find((i) => i.id === item.id)

        if (existingItem) {
          return toast("Item added to wish list")
        }

        set({ items: [...currentItems, item] })
        toast("Item added to cart")
      },
      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        }))
        toast("Item removed from wish list")
      },
      clear: () => {
        set(() => ({
          items: [],
        }))
      },
    }),
    {
      name: "wish-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
)
