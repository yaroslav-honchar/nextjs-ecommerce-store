import React from "react"
import { Billboard } from "@/components/billboard/billboard"
import { Filters } from "@/components/catalog/components/filters/filters"
import { ProductsList } from "@/components/ui/products-list/products-list"
import { Container } from "@/components/ui/wrappers/container/container"
import type { ICatalogProps } from "./catalog.props"

export const Catalog: React.FC<ICatalogProps> = ({ category, products, colors, sizes }) => {
  return (
    <>
      <Billboard data={category.billboard} />
      <Container>
        <div className={"flex gap-4 flex-col lg:flex-row py-8"}>
          <div className={"w-full lg:max-w-[16rem]"}>
            <Filters
              colors={colors}
              sizes={sizes}
            />
          </div>
          {products.length > 0 ? (
            <ProductsList data={products} />
          ) : (
            <div className={"py-8 flex-grow flex items-center justify-center"}>
              <p className={"text-center"}>No products found</p>
            </div>
          )}
        </div>
      </Container>
    </>
  )
}
