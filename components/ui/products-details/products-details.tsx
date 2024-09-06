import React from "react"
import { ButtonAddToCart } from "@/components/ui/buttons/button-add-to-cart/button-add-to-cart"
import { ButtonAddToWishlist } from "@/components/ui/buttons/button-add-to-wishlist/button-add-to-wishlist"
import { Title } from "@/components/ui/topography/title/title"
import { priceFormatter } from "@/lib/price-formatter"
import type { IProductDetailsProps } from "./products-details.props"

export const ProductsDetails: React.FC<IProductDetailsProps> = ({ data }) => {
  return (
    <div className={"flex flex-col gap-6"}>
      <div className={"flex flex-col gap-2"}>
        <Title
          size={"md"}
          tag={"h1"}
        >
          {data.name}
        </Title>
        <Title size={"sm"}>{priceFormatter(data.price)}</Title>
      </div>
      <hr className={"my-5"} />
      <ul>
        <li>
          <p>
            <b>Size:</b> {data.size.name}
          </p>
        </li>
        <li>
          <p className={"flex gap-2 items-center"}>
            <b>Color:</b>
            <span
              className={"block size-4 rounded-full aspect-square border-2"}
              style={{ background: data.color.value }}
            />
            {data.color.name}
          </p>
        </li>
      </ul>
      <div className={"flex gap-5 flex-wrap items-center"}>
        <ButtonAddToCart
          data={data}
          className={"gap-2"}
        />
        <ButtonAddToWishlist
          data={data}
          className={"gap-2"}
        />
      </div>
    </div>
  )
}
