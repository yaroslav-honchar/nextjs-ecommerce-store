import type { DetailedHTMLProps, HTMLAttributes } from "react"

export interface ITitleProps extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  size?: "xs" | "sm" | "md" | "lg"
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span"
}
