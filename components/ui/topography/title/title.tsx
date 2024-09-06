import cn from "classnames"
import type React from "react"
import type { ITitleProps } from "./title.props"

export const Title: React.FC<ITitleProps> = ({ className, size = "md", tag = "h2", ...rest }) => {
  const props = {
    className: cn("block font-medium text-black", className, {
      "text-lg": size === "xs",
      "text-2xl": size === "sm",
      "text-4xl": size === "md",
      "text-5xl": size === "lg",
    }),
    ...rest,
  }

  switch (tag) {
    case "h1":
      return <h1 {...props} />
    case "h2":
      return <h2 {...props} />
    case "h3":
      return <h3 {...props} />
    case "h4":
      return <h4 {...props} />
    case "h5":
      return <h5 {...props} />
    case "h6":
      return <h6 {...props} />
    case "span":
      return <span {...props} />
  }
}
