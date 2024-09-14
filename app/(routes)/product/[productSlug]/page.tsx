import React from "react"
import { ProductDetailed } from "@/components/product-detailed/product-detailed"
import { SuggestedProducts } from "@/components/suggested-products/suggested-products"
import { getProduct, getProducts } from "@/services/products.service"
import { getIdFromSlug } from "@/lib/get-id-from-slug"
import { notFound } from "next/navigation"
import type { IPageProps } from "./page.props"

const ProductPage: React.FC<IPageProps> = async ({ params: { productSlug } }) => {
  const productId = getIdFromSlug(productSlug)
  let product = null

  try {
    product = await getProduct(productId)
  } catch (error: unknown) {
    console.log(error)
  }

  if (!product) {
    notFound()
  }

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
