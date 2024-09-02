import type { PropsWithChildren } from "react"
import type { LinkProps } from "next/link"

export interface ILinkRootProps extends PropsWithChildren<LinkProps> {
  className?: string
}
