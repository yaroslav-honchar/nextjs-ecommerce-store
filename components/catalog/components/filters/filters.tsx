"use client"

import cn from "classnames"
import { X } from "lucide-react"
import React, { useEffect, useState } from "react"
import { Button } from "@/components/ui/buttons/button/button"
import { CheckboxButton } from "@/components/ui/form/checkbox-button/checkbox-button"
import { Title } from "@/components/ui/topography/title/title"
import { Scrollbar } from "@/utils/scrollbar"
import { useRouter, useSearchParams } from "next/navigation"
import type { IFiltersProps } from "./filters.props"

export const Filters: React.FC<IFiltersProps> = ({ sizes, colors }) => {
  const [isLocked, setIsLocked] = useState<boolean>(true)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const router = useRouter()
  const searchParams = useSearchParams()

  const isFilterActive = (key: string, value: string) => {
    const newSearchParams = new URLSearchParams(searchParams.toString())
    return newSearchParams.has(key, value)
  }

  const toggleFilter = (key: string, value: string) => {
    setIsLocked(true)
    const newSearchParams = new URLSearchParams(searchParams.toString())

    if (isFilterActive(key, value)) {
      newSearchParams.delete(key, value)
    } else {
      newSearchParams.append(key, value)
    }

    router.replace(window.location.href.split("?")[0] + "?" + newSearchParams.toString())
  }

  const toggleFiltersOpen = (value?: boolean) => {
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

  useEffect(() => {
    if (isLocked) {
      setIsLocked(false)
    }
  }, [searchParams, router])

  return (
    <div className={"flex gap-4"}>
      <Button
        className={"lg:hidden"}
        onClick={() => toggleFiltersOpen(true)}
      >
        Filters
      </Button>
      <div
        className={cn("lg:hidden fixed inset-0 z-[60] bg-black bg-opacity-50 transition-all duration-500", {
          "opacity-0 invisible pointer-events-none": !isOpen,
        })}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            toggleFiltersOpen(false)
          }
        }}
      />

      <div
        className={cn(
          "flex flex-col gap-4 w-full",
          "max-lg:h-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:z-[70] max-lg:bg-white max-lg:max-w-[16rem] max-lg:px-5 max-lg:py-10 max-lg:transition-all max-lg:duration-500",
          {
            "max-lg:opacity-0 max-lg:invisible max-lg:translate-x-[-100%] max-lg:pointer-events-none": !isOpen,
          },
        )}
      >
        <Button
          size={"icon"}
          variant={"ghost"}
          className={"lg:hidden absolute top-4 right-2"}
          onClick={() => toggleFiltersOpen(false)}
        >
          <X className={"w-4 h-4"} />
        </Button>
        <div>
          <Title
            className={"mb-4"}
            size={"sm"}
            tag={"span"}
          >
            Sizes
          </Title>
          <ul className={"flex flex-wrap gap-4"}>
            {sizes.map(({ id, name }) => (
              <li key={id}>
                <CheckboxButton
                  name={"size" + id}
                  disabled={isLocked}
                  onChange={() => toggleFilter("size", id)}
                  defaultChecked={isFilterActive("size", id)}
                >
                  {name}
                </CheckboxButton>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Title
            className={"mb-4"}
            size={"sm"}
            tag={"span"}
          >
            Colors
          </Title>
          <ul className={"flex flex-wrap gap-4"}>
            {colors.map(({ id, name }) => (
              <li key={id}>
                <CheckboxButton
                  name={"color" + id}
                  disabled={isLocked}
                  onChange={() => toggleFilter("color", id)}
                  defaultChecked={isFilterActive("color", id)}
                >
                  {name}
                </CheckboxButton>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
