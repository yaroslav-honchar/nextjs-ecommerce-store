import type { DetailedHTMLProps, HTMLAttributes } from "react"

export interface IContainerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  size?: "md" | "xl"
}
