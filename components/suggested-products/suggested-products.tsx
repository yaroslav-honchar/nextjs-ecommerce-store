import React from "react"
import type { IProduct } from "@/types/product.interface"
import { CardProduct } from "@/components/ui/cards/card-product/card-product"
import { Title } from "@/components/ui/topography/title/title"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"
import type { ISuggestedProductsProps } from "./suggested-products.props"

export const SuggestedProducts: React.FC<ISuggestedProductsProps> = ({ data }) => {
  return (
    <Section>
      <Container>
        <Title className={"text-center mb-12"}>Related products</Title>

        <ul className={"grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"}>
          {data.map((product: IProduct) => {
            return (
              <li key={product.id}>
                <CardProduct product={product} />
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
