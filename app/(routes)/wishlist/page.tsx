"use client"

import { Suspense } from "react"
import { WishListTable } from "@/components/wish-list-table/wish-list-table"

export default function CartPage() {
  return (
    <Suspense>
      <WishListTable />
    </Suspense>
  )
}
