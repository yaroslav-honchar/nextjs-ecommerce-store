import cn from "classnames"
import { CheckIcon } from "lucide-react"
import type { FormEvent } from "react"
import React, { forwardRef, useState } from "react"
import type { ICheckboxProps } from "./checkbox.props"

export const Checkbox = forwardRef<HTMLInputElement, ICheckboxProps>(
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
        className={cn("flex gap-2 cursor-pointer relative", className, {
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
            "flex items-center justify-center size-5 border-1 border-black pointer-events-none transition-all duration-300",
            {
              "bg-black": isChecked,
              "bg-white": !isChecked,
            },
          )}
        >
          <CheckIcon
            className={cn("size-4 text-white transition-all duration-300", {
              "opacity-100": isChecked,
              "opacity-0": !isChecked,
            })}
          />
        </span>
        {children}
      </label>
    )
  },
)
