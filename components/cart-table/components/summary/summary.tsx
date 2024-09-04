"use client"

import React, { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Button } from "@/components/ui/buttons/button/button"
import { Title } from "@/components/ui/topography/title/title"
import { sendCheckout } from "@/services/checkout.service"
import { useCart } from "@/hooks/use-cart.hook"
import { priceFormatter } from "@/lib/price-formatter"
import { useSearchParams } from "next/navigation"

export const Summary: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const items = useCart((state) => state.items)
  const clearCart = useCart((state) => state.clearCart)
  const totalPrice = items.reduce((acc, item) => acc + +item.price, 0)

  const onCheckout = async () => {
    if (isLoading || items.length === 0) {
      return
    }

    setIsLoading(true)

    try {
      const { url } = await sendCheckout({ productIds: items.map((item) => item.id) })

      window.location = url
    } catch (error: unknown) {
      console.log(error)
      toast.error("Failed to process order")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (searchParams.has("success")) {
      toast.success("Order successfully processed")

      clearCart()
    } else if (searchParams.has("cancelled")) {
      toast.error("Order cancelled")
    }
  }, [searchParams, clearCart])

  return (
    <div className={"pt-16 bg-gray-50 px-4 sm:p-6 lg:col-span-5 lg:pt-12"}>
      <Title
        size={"sm"}
        className={"mb-6"}
      >
        Order Summary
      </Title>
      <div className={"flex items-center justify-between border-t border-gray-200 pt-4 mb-8"}>
        <Title
          className={"font-normal"}
          size={"xs"}
          tag={"h3"}
        >
          Order Summary
        </Title>
        <p>{priceFormatter(totalPrice)}</p>
      </div>

      <Button
        disabled={items.length === 0}
        className={"w-full"}
        onClick={onCheckout}
      >
        Checkout
      </Button>
    </div>
  )
}
