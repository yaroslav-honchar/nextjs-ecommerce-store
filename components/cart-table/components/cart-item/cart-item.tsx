import { X } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/buttons/button/button"
import { Title } from "@/components/ui/topography/title/title"
import { priceFormatter } from "@/lib/price-formatter"
import Image from "next/image"
import type { ICartItemProps } from "./cart-item.props"

export const CartItem: React.FC<ICartItemProps> = ({ data, onRemove }) => {
  const { id, name, price, color, size, images, category } = data

  return (
    <div className={"flex gap-4 md:gap-6 py-6 border-b"}>
      <div className={"relative size-24 sm:size-48 overflow-hidden"}>
        <Image
          className={"object-center object-cover size-full"}
          src={images[0].url}
          alt={name}
          width={192}
          height={192}
        />
      </div>
      <div className={"relative flex flex-1 flex-col justify-between"}>
        <Button
          size={"icon"}
          className={"absolute z-10 right-0 top-0"}
          onClick={() => onRemove(id)}
        >
          <X className={"size-5"} />
        </Button>

        <div className={"relative pe-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0"}>
          <div className={"flex justify-between"}>
            <Title
              size={"sm"}
              tag={"span"}
            >
              {name}
            </Title>
          </div>
        </div>
        <div>
          <p className={"text-neutral-500"}>{category.name}</p>
        </div>
        <div>
          <p className={"text-neutral-500"}>
            <b>Size: </b>
            {size.name}
          </p>
        </div>
        <div>
          <p className={"text-neutral-500"}>
            <b>Color: </b>
            {color.name}
          </p>
        </div>
        <div>
          <p className={"text-neutral-500"}>{priceFormatter(price)}</p>
        </div>
      </div>
    </div>
  )
}
