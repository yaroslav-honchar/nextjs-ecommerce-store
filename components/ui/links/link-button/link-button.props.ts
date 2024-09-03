import type { ILinkRootProps } from "@/components/ui/links/link-root/link-root.props"

export interface ILinkButtonProps extends ILinkRootProps {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg" | "icon"
}
