import React from "react"
import { Details } from "@/components/product-detailed/components/details/details"
import { Slider } from "@/components/product-detailed/components/slider/slider"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"
import type { IProductDetailedProps } from "./product-detailed.props"

export const ProductDetailed: React.FC<IProductDetailedProps> = ({ data }) => {
  return (
    <Section>
      <Container className={"grid grid-cols-1 lg:grid-cols-2 gap-8"}>
        <Slider
          images={data.images}
          productName={data.name}
        />
        <Details data={data} />
      </Container>
    </Section>
  )
}
