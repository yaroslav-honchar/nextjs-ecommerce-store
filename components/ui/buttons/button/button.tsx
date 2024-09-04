import cn from "classnames"
import React, { forwardRef } from "react"
import type { IButtonProps } from "./button.props"

export const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ children, className, disabled, type, size = "md", variant = "primary", ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center transition-colors duration-300 hover:bg-black hover:bg-opacity-75",
          className,
          {
            "px-3 py-1 text-sm": size === "sm",
            "px-4 py-2 text-sm": size === "md",
            "px-6 py-3 text-lg": size === "lg",
            "size-9 text-sm": size === "icon",
            "w-fit": size !== "icon",
            "bg-black text-white": variant === "primary",
            "bg-gray-700 text-white": variant === "secondary",
            "bg-transparent text-primary-600 hover:text-white": variant === "ghost",
            "cursor-not-allowed opacity-50": disabled,
          },
        )}
        type={type ?? "button"}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    )
  },
)
