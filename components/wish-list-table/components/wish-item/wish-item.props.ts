import type { IProduct } from "@/types/product.interface"

export interface ICartItemProps {
  data: IProduct
  onRemove: (id: string) => void
}
