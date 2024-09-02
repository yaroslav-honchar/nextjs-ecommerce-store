"use client"

import cn from "classnames"
import { ExpandIcon, HeartIcon, ShoppingCartIcon } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/buttons/button/button"
import { Title } from "@/components/ui/topography/title/title"
import { priceFormatter } from "@/lib/price-formatter"
import Image from "next/image"
import type { ICardProductProps } from "./card-product.props"

export const CardProduct: React.FC<ICardProductProps> = ({ product }) => {
  const { name, price, images, category } = product
  return (
    <div className={"group flex flex-col gap-6 bg-white cursor-pointer"}>
      <div className={"aspect-square relative overflow-hidden"}>
        {images.length > 0 ? (
          <>
            <Image
              className={"object-contain size-full"}
              src={images[0].url}
              alt={name}
              width={200}
              height={200}
            />
            <div
              className={cn(
                "w-full flex gap-4 items-center justify-center p-2 transition-all duration-300",
                "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
                "absolute bottom-0 left-0 z-10 bg-black bg-opacity-50",
              )}
            >
              <Button size={"icon"}>
                <ExpandIcon size={20} />
              </Button>
              <Button size={"icon"}>
                <HeartIcon size={20} />
              </Button>
              <Button size={"icon"}>
                <ShoppingCartIcon size={20} />
              </Button>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
      <div className={"flex flex-col gap-2"}>
        <Title
          tag={"h3"}
          size={"sm"}
          className={"hover:text-cyan-600 transition-colors duration-300"}
        >
          {name}
        </Title>
        <p className={"text-gray-500"}>{category.name}</p>
        <p className={"text-md text-black font-medium"}>{priceFormatter(price)}</p>
      </div>
      <div></div>
    </div>
  )
}
