import cn from "classnames"
import React, { forwardRef } from "react"
import { LinkRoot } from "@/components/ui/links/link-root/link-root"
import type { ILinkButtonProps } from "./link-button.props"

export const LinkButton = forwardRef<HTMLAnchorElement, ILinkButtonProps>(
  ({ children, className, href, size = "md", variant = "primary", ...rest }, ref) => {
    return (
      <LinkRoot
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-colors duration-300 hover:bg-black hover:bg-opacity-75",
          className,
          {
            "px-3 py-1 text-sm": size === "sm",
            "px-4 py-2 text-sm": size === "md",
            "px-6 py-3 text-lg": size === "lg",
            "size-9 text-sm": size === "icon",
            "w-fit": size !== "icon",
            "bg-black text-white": variant === "primary",
            "bg-gray-700 text-white": variant === "secondary",
            "bg-transparent text-primary-600 hover:text-white": variant === "ghost",
          },
        )}
        href={href}
        {...rest}
      >
        {children}
      </LinkRoot>
    )
  },
)
