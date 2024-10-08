import { X } from "lucide-react"
import React from "react"
import { ButtonAddToCart } from "@/components/ui/buttons/button-add-to-cart/button-add-to-cart"
import { Button } from "@/components/ui/buttons/button/button"
import { Title } from "@/components/ui/topography/title/title"
import { priceFormatter } from "@/lib/price-formatter"
import Image from "next/image"
import type { ICartItemProps } from "./wish-item.props"

export const WishItem: React.FC<ICartItemProps> = ({ data, onRemove }) => {
  const { id, name, price, color, size, images, category } = data

  return (
    <div className={"flex gap-4 md:gap-6 py-6"}>
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
        <div className={"flex flex-col gap-3 absolute z-10 right-0 top-0"}>
          <Button
            size={"icon"}
            onClick={() => onRemove(id)}
            aria-label={`Remove ${name} item from cart`}
          >
            <X className={"size-5"} />
          </Button>
          <ButtonAddToCart
            data={data}
            iconOnly={true}
          />
        </div>

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
