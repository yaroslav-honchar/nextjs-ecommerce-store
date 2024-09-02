"use client"

import cn from "classnames"
import React, { useState } from "react"
import type { ICategory } from "@/types/category"
import { ClientRoutes } from "@/routes/client.routes"
import { Scrollbar } from "@/utils/scrollbar"
import Link from "next/link"
import type { INavigationProps } from "./navigation.props"

export const Navigation: React.FC<INavigationProps> = ({ className, categories }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const onToggleNav = (value?: boolean) => {
    setIsOpen((prev: boolean): boolean => {
      const newState = value ?? !prev

      if (newState) {
        Scrollbar.lock()
      } else {
        Scrollbar.unlock()
      }

      return newState
    })
  }

  return (
    <nav
      className={cn("max-lg:w-full", className, {
        open: isOpen,
      })}
    >
      <button
        className="block lg:hidden relative z-20 py-1 px-3 border-2 rounded-md text-sm text-black ms-auto"
        onClick={() => onToggleNav()}
      >
        {!isOpen ? "Menu" : "Close"}
      </button>
      <div
        className={cn(
          "max-lg:fixed max-lg:right-0 max-lg:top-0 max-lg:bg-white max-lg:size-full max-lg:z-10 max-lg:pt-[calc(var(--header-height)+2rem)] max-lg:pb-8 max-lg:px-5",
          "max-lg:transition-all max-lg:duration-500",
          {
            "max-lg:opacity-0 max-lg:invisible": !isOpen,
          },
        )}
      >
        <ul className={"flex lg:items-center max-lg:flex-col max-lg:gap-6 lg:gap-4"}>
          {categories.map(({ name }: ICategory) => (
            <li key={ClientRoutes.catalog("")}>
              <Link
                className={
                  "font-medium max-lg:text-2xl lg:text-sm text-black hover:text-cyan-600 transition-colors duration-300"
                }
                href={ClientRoutes.catalog("")}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
