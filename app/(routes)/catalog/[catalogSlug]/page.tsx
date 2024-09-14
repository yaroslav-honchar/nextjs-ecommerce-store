import React from "react"
import { Catalog } from "@/components/catalog/catalog"
import { getCategory } from "@/services/categories.service"
import { getColors } from "@/services/colors.service"
import { getProducts } from "@/services/products.service"
import { getSizes } from "@/services/sizes.service"
import { getIdFromSlug } from "@/lib/get-id-from-slug"
import type { IPageProps } from "./page.props"

const CatalogPage: React.FC<IPageProps> = async ({ params: { catalogSlug }, searchParams: { color, size } }) => {
  const catalogId = getIdFromSlug(catalogSlug)

  const products = await getProducts({
    params: {
      categoryId: catalogId,
      colorId: color,
      sizeId: size,
    },
  })

  const category = await getCategory(catalogId)

  const sizes = await getSizes()
  const colors = await getColors()

  return (
    <Catalog
      category={category}
      products={products}
      sizes={sizes}
      colors={colors}
    />
  )
}
export default CatalogPage
