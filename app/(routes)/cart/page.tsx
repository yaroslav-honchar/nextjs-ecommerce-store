"use client"

import { Suspense } from "react"
import { CartTable } from "@/components/cart-table/cart-table"

export default function CartPage() {
  return (
    <Suspense>
      <CartTable />
    </Suspense>
  )
}
