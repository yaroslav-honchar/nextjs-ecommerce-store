import cn from "classnames"
import React from "react"
import type { IContainerProps } from "./container.props"

export const Container: React.FC<IContainerProps> = ({ size = "xl", className, ...rest }) => {
  return (
    <div
      className={cn("container", className, {
        "max-w-2xl": size === "md",
        "max-w-6xl": size === "xl",
      })}
      {...rest}
    ></div>
  )
}
