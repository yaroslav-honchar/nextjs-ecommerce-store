import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"

export interface ICheckboxProps
  extends PropsWithChildren<
    Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "name">
  > {
  name: string
  disabled?: boolean
}
