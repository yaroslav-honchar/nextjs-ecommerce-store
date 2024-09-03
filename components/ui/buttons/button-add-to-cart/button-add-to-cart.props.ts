import type { IProduct } from "@/types/product.interface"
import type { IButtonProps } from "@/components/ui/buttons/button/button.props"

export interface IButtonAddToCartProps extends Omit<IButtonProps, "onClick"> {
  data: IProduct
  iconOnly?: boolean
}
