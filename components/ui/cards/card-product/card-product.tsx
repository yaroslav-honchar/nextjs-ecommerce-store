"use client"

import cn from "classnames"
import { ExpandIcon, HeartIcon, ShoppingCartIcon } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/buttons/button/button"
import { LinkRoot } from "@/components/ui/links/link-root/link-root"
import { Title } from "@/components/ui/topography/title/title"
import { ClientRoutes } from "@/routes/client.routes"
import { usePreviewModal } from "@/hooks/use-preview-modal.hook"
import { priceFormatter } from "@/lib/price-formatter"
import Image from "next/image"
import type { ICardProductProps } from "./card-product.props"

export const CardProduct: React.FC<ICardProductProps> = ({ product }) => {
  const previewModal = usePreviewModal()
  const { name, price, images, category } = product

  const onPreviewClick = () => {
    previewModal.onOpen(product)
  }

  return (
    <div className={"group flex flex-col gap-6 bg-white"}>
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
                "lg:opacity-0 lg:invisible lg:pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto",
                "absolute bottom-0 left-0 z-10",
              )}
            >
              <Button
                size={"icon"}
                onClick={onPreviewClick}
              >
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
        <LinkRoot href={ClientRoutes.product(product.id)}>
          <Title
            tag={"span"}
            size={"xs"}
            className={"hover:text-cyan-600 transition-colors duration-300"}
          >
            {name}
          </Title>
        </LinkRoot>

        <p className={"text-gray-500"}>{category.name}</p>
        <p className={"text-md text-black font-medium"}>{priceFormatter(price)}</p>
      </div>
      <div></div>
    </div>
  )
}
