import cn from "classnames"
import type { FormEvent } from "react"
import React, { forwardRef, useState } from "react"
import type { ICheckboxButtonProps } from "./checkbox-button.props"

export const CheckboxButton = forwardRef<HTMLInputElement, ICheckboxButtonProps>(
  ({ name, className, children, defaultChecked = false, disabled = false, onChange, ...rest }, ref) => {
    const [isChecked, setChecked] = useState<boolean>(defaultChecked)

    const onCheckedChange = (event: FormEvent<HTMLInputElement>) => {
      if (disabled) {
        return
      }

      setChecked((prev: boolean): boolean => !prev)
      onChange?.(event)
    }

    return (
      <label
        htmlFor={name}
        className={cn("cursor-pointer relative", className, {
          "opacity-70 pointer-events-none": disabled,
        })}
      >
        <input
          {...rest}
          ref={ref}
          className={"appearance-none z-10 absolute inset-0 size-full"}
          name={name}
          type="checkbox"
          onChange={onCheckedChange}
          disabled={disabled}
        />
        <span
          className={cn(
            "flex items-center justify-center py-2 px-4 text-sm text-black border-1 border-black font-semibold transition-all duration-300 pointer-events-none",
            {
              "bg-black text-white": isChecked,
            },
          )}
        >
          {children}
        </span>
      </label>
    )
  },
)
