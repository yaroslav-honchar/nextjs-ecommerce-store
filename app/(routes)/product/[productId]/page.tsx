import { ObjectId } from "bson"
import React from "react"
import { ProductDetailed } from "@/components/product-detailed/product-detailed"
import { SuggestedProducts } from "@/components/suggested-products/suggested-products"
import { getProduct, getProducts } from "@/services/products.service"
import { notFound } from "next/navigation"
import type { IPageProps } from "./page.props"

const ProductPage: React.FC<IPageProps> = async ({ params: { productId } }) => {
  if (!ObjectId.isValid(productId)) {
    notFound()
  }
  const product = await getProduct(productId)
  const suggestedProducts = await getProducts({
    params: {
      categoryId: product.category.id,
    },
  })

  return (
    <>
      <ProductDetailed data={product} />
      <SuggestedProducts data={suggestedProducts} />
    </>
  )
}
export default ProductPage
