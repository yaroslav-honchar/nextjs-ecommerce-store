import React from "react"
import type { IProduct } from "@/types/product.interface"
import type { IFeaturedProductsProps } from "@/components/featured-products/featured-products.props"
import { CardProduct } from "@/components/ui/cards/card-product/card-product"
import { Title } from "@/components/ui/topography/title/title"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"

export const FeaturedProducts: React.FC<IFeaturedProductsProps> = ({ data }) => {
  return (
    <Section>
      <Container>
        <Title className={"text-center mb-12"}>Featured products</Title>

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
