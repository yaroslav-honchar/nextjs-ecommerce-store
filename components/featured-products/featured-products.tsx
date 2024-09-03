import React from "react"
import type { IFeaturedProductsProps } from "@/components/featured-products/featured-products.props"
import { ProductsList } from "@/components/ui/products-list/products-list"
import { Title } from "@/components/ui/topography/title/title"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"

export const FeaturedProducts: React.FC<IFeaturedProductsProps> = ({ data }) => {
  return (
    <Section>
      <Container>
        <Title className={"text-center mb-12"}>Featured products</Title>
        <ProductsList data={data} />
      </Container>
    </Section>
  )
}
