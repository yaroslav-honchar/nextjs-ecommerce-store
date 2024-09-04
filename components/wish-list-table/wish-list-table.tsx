"use client"

import React from "react"
import { Button } from "@/components/ui/buttons/button/button"
import { Title } from "@/components/ui/topography/title/title"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"
import { useMounted } from "@/hooks/use-mounted.hook"
import { useWishList } from "@/hooks/use-wish-lisht.hook"
import { WishItem } from "./components/wish-item/wish-item"

export const WishListTable: React.FC = () => {
  const isMounted = useMounted()
  const { items, removeItem, clear } = useWishList()

  if (!isMounted) {
    return null
  }

  return (
    <Section>
      <Container>
        <div className={"px-4 py-16 sm:px-6 lg:px-8"}>
          <div className={"flex gap-4 lg:gap-6 flex-col sm:flex-row justify-between items-start mb-8 lg:mb-12"}>
            <Title tag={"h1"}>Shopping Cart</Title>
            <Button onClick={clear}>Clear wishlist</Button>
          </div>
          <div className={"flex flex-col gap-x-12"}>
            {items.length < 1 ? (
              <div className={"py-8"}>
                <p className={"text-center text-neutral-500"}>No items in wishlist</p>
              </div>
            ) : (
              items.map((item) => (
                <WishItem
                  onRemove={removeItem}
                  key={item.id}
                  data={item}
                />
              ))
            )}
          </div>
        </div>
      </Container>
    </Section>
  )
}
