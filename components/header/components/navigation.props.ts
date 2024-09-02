import type { DetailedHTMLProps, HTMLAttributes } from "react"
import type { ICategory } from "@/types/category.interface"

export interface INavigationProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  categories: ICategory[]
}
