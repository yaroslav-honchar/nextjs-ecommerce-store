import React, { forwardRef } from "react"
import Link from "next/link"
import type { ILinkRootProps } from "./link-root.props"

export const LinkRoot = forwardRef<HTMLAnchorElement, ILinkRootProps>(({ href, children, ...rest }, ref) => {
  return (
    <Link
      ref={ref}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  )
})
