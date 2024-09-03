import React from "react"
import type { IProduct } from "@/types/product.interface"
import { CardProduct } from "@/components/ui/cards/card-product/card-product"
import type { IProductsListProps } from "@/components/ui/products-list/products-list.props"

export const ProductsList: React.FC<IProductsListProps> = ({ data }) => {
  return (
    <ul className={"grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
      {data.map((product: IProduct) => {
        return (
          <li key={product.id}>
            <CardProduct product={product} />
          </li>
        )
      })}
    </ul>
  )
}
