import type { DetailedHTMLProps, HTMLAttributes } from "react"

export interface ISectionProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  spacing?: "sm" | "md" | "lg" | "none"
}
