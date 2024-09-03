import type { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react"

export interface ICheckboxButtonProps
  extends PropsWithChildren<
    Omit<DetailedHTMLProps<HTMLAttributes<HTMLInputElement>, HTMLInputElement>, "type" | "name">
  > {
  name: string
  disabled?: boolean
}
