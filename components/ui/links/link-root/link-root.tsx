import React from "react"
import Link from "next/link"
import type { ILinkRootProps } from "./link-root.props"

export const LinkRoot: React.FC<ILinkRootProps> = ({ href, children, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
}
