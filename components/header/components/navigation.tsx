"use client"

import cn from "classnames"
import { HeartIcon, Menu, ShoppingBasket } from "lucide-react"
import React, { useState } from "react"
import type { ICategory } from "@/types/category.interface"
import { Button } from "@/components/ui/buttons/button/button"
import { LinkButton } from "@/components/ui/links/link-button/link-button"
import { ClientRoutes } from "@/routes/client.routes"
import { useCart } from "@/hooks/use-cart.hook"
import { useWishList } from "@/hooks/use-wish-lisht.hook"
import { Scrollbar } from "@/utils/scrollbar"
import Link from "next/link"
import type { INavigationProps } from "./navigation.props"

export const Navigation: React.FC<INavigationProps> = ({ className, categories }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const cartItems = useCart((state) => state.items)
  const wishItems = useWishList((state) => state.items)

  const onToggleNav = (value?: boolean) => {
    setIsOpen((prev: boolean): boolean => {
      const newState = value ?? !prev

      if (newState) {
        Scrollbar.lock()
      } else {
        Scrollbar.unlock()
      }

      return newState
    })
  }

  return (
    <nav className={cn("w-full flex items-center gap-3 xl:gap-6", className)}>
      <div
        className={cn(
          "max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-white max-lg:size-full max-lg:z-10 max-lg:pt-[calc(var(--header-height)+2rem)] max-lg:pb-8 max-lg:px-5",
          "max-lg:transition-all max-lg:duration-500",
          {
            "max-lg:opacity-0 max-lg:invisible": !isOpen,
          },
        )}
      >
        <ul className={"flex lg:items-center max-lg:flex-col max-lg:gap-6 lg:gap-4"}>
          {categories.map(({ name, slug }: ICategory) => (
            <li key={ClientRoutes.catalog(slug)}>
              <Link
                className={
                  "font-medium max-lg:text-2xl lg:text-sm text-black hover:text-cyan-600 transition-colors duration-300"
                }
                href={ClientRoutes.catalog(slug)}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <LinkButton
        href={ClientRoutes.wishlist}
        size={"icon"}
        variant={"ghost"}
        className={"ms-auto font-bold gap-1 relative"}
      >
        <HeartIcon size={24} />
        <span
          className={
            "flex items-center justify-center absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-black rounded-full size-5 text-xs text-white"
          }
        >
          {wishItems.length}
        </span>
      </LinkButton>
      <LinkButton
        href={ClientRoutes.cart}
        size={"icon"}
        variant={"ghost"}
        className={"font-bold gap-1 relative"}
      >
        <ShoppingBasket size={24} />
        <span
          className={
            "flex items-center justify-center absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-black rounded-full size-5 text-xs text-white"
          }
        >
          {cartItems.length}
        </span>
      </LinkButton>
      <Button
        size={"icon"}
        className={cn("lg:hidden relative z-20", {
          "bg-cyan-600": isOpen,
        })}
        onClick={() => onToggleNav()}
      >
        <Menu size={20} />
      </Button>
    </nav>
  )
}
