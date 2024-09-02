import cn from "classnames"
import React from "react"
import type { ILinkLogoProps } from "@/components/ui/links/link-logo/link-logo.props"
import { LinkRoot } from "@/components/ui/links/link-root/link-root"
import { ClientRoutes } from "@/routes/client.routes"

export const LinkLogo: React.FC<ILinkLogoProps> = ({ className }) => {
  return (
    <LinkRoot
      className={cn("font-bold text-2xl text-black hover:text-cyan-600 transition-colors duration-300", className)}
      href={ClientRoutes.home}
    >
      FakeStore
    </LinkRoot>
  )
}
