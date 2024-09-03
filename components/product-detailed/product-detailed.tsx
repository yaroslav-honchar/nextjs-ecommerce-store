import React from "react"
import { Gallery } from "@/components/ui/gallery/gallery"
import { ProductsDetails } from "@/components/ui/products-details/products-details"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"
import type { IProductDetailedProps } from "./product-detailed.props"

export const ProductDetailed: React.FC<IProductDetailedProps> = ({ data }) => {
  return (
    <Section>
      <Container className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
        <Gallery
          images={data.images}
          productName={data.name}
        />
        <ProductsDetails data={data} />
      </Container>
    </Section>
  )
}
