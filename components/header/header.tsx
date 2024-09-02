import React from "react"
import { HeaderClient } from "@/components/header/header.client"
import { LinkLogo } from "@/components/ui/links/link-logo/link-logo"
import { getCategories } from "@/services/categories.service"
import { Navigation } from "./components/navigation"

export const Header: React.FC = async () => {
  const categories = await getCategories()

  return (
    <HeaderClient>
      <LinkLogo className={"lg:me-12 relative z-20"} />
      <Navigation categories={categories} />
    </HeaderClient>
  )
}
