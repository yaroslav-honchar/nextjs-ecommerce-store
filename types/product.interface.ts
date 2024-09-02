import type { ICategory } from "@/types/category.interface"
import type { IColor } from "@/types/color.interface"
import type { IImage } from "@/types/image.interface"
import type { ISize } from "@/types/size.interface"

export interface IProduct {
  id: string
  name: string
  price: number
  isFeatured: boolean
  images: IImage[]
  size: ISize
  color: IColor
  category: ICategory
}
