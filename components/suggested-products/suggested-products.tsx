import React from "react"
import { ProductsList } from "@/components/ui/products-list/products-list"
import { Title } from "@/components/ui/topography/title/title"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"
import type { ISuggestedProductsProps } from "./suggested-products.props"

export const SuggestedProducts: React.FC<ISuggestedProductsProps> = ({ data }) => {
  return (
    <Section>
      <Container>
        <Title className={"text-center mb-12"}>Related products</Title>

        <ProductsList data={data} />
      </Container>
    </Section>
  )
}
