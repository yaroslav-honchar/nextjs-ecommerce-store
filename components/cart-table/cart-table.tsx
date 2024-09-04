"use client"

import React from "react"
import { Title } from "@/components/ui/topography/title/title"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"
import { useCart } from "@/hooks/use-cart.hook"
import { useMounted } from "@/hooks/use-mounted.hook"
import { CartItem } from "./components/cart-item/cart-item"
import { Summary } from "./components/summary/summary"

export const CartTable: React.FC = () => {
  const isMounted = useMounted()
  const { items, removeItem } = useCart()

  if (!isMounted) {
    return null
  }

  return (
    <Section>
      <Container>
        <div className={"px-4 py-16 sm:px-6 lg:px-8"}>
          <Title
            className={"mb-12"}
            tag={"h1"}
          >
            Shopping Cart
          </Title>
          <div className={"lg:grid lg:grid-cols-12 lg:items-start gap-x-12"}>
            <div className={"lg:col-span-7"}>
              {items.length < 1 ? (
                <div className={"py-8"}>
                  <p className={"text-center text-neutral-500"}>No items in cart</p>
                </div>
              ) : (
                items.map((item) => (
                  <CartItem
                    onRemove={removeItem}
                    key={item.id}
                    data={item}
                  />
                ))
              )}
            </div>

            <Summary />
          </div>
        </div>
      </Container>
    </Section>
  )
}
