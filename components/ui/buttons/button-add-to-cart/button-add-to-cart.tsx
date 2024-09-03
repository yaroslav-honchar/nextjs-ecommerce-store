"use client"

import { ShoppingCart } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/buttons/button/button"
import { useCart } from "@/hooks/use-cart.hook"
import type { IButtonAddToCartProps } from "./button-add-to-cart.props"

export const ButtonAddToCart: React.FC<IButtonAddToCartProps> = ({ data, iconOnly = false, size, ...rest }) => {
  const cart = useCart()

  const onClick = () => {
    cart.addItem(data)
  }

  return (
    <Button
      {...rest}
      onClick={onClick}
      size={iconOnly ? "icon" : size}
    >
      <ShoppingCart size={20} />
      {!iconOnly && "Add to cart"}
    </Button>
  )
}
