import cn from "classnames"
import React from "react"
import type { ISectionProps } from "./section.props"

export const Section: React.FC<ISectionProps> = ({ className, children, spacing = "md", ...rest }) => {
  return (
    <section
      className={cn("bg-white", className, {
        "py-4": spacing === "sm",
        "py-8": spacing === "md",
        "py-12": spacing === "lg",
        "py-0": spacing === "none",
      })}
      {...rest}
    >
      {children}
    </section>
  )
}
