import type { ICategory } from "@/types/category.interface"
import type { IColor } from "@/types/color.interface"
import type { IProduct } from "@/types/product.interface"
import type { ISize } from "@/types/size.interface"

export interface ICatalogProps {
  colors: IColor[]
  sizes: ISize[]
  products: IProduct[]
  category: ICategory
}
