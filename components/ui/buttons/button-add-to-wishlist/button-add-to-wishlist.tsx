"use client"

import { HeartIcon } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/buttons/button/button"
import { useWishList } from "@/hooks/use-wish-lisht.hook"
import type { IButtonAddToWishListProps } from "./button-add-to-wishlist.props"

export const ButtonAddToWishlist: React.FC<IButtonAddToWishListProps> = ({ data, iconOnly = false, size, ...rest }) => {
  const addItem = useWishList((state) => state.addItem)

  const onClick = () => {
    addItem(data)
  }

  return (
    <Button
      {...rest}
      onClick={onClick}
      size={iconOnly ? "icon" : size}
    >
      <HeartIcon size={20} />
      {!iconOnly && "Add to wishlist"}
    </Button>
  )
}
