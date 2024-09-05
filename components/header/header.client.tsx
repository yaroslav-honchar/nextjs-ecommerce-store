"use client"

import cn from "classnames"
import type { PropsWithChildren } from "react"
import React, { useEffect, useRef, useState } from "react"
import { Container } from "@/components/ui/wrappers/container/container"
import { throttle } from "@/lib/throttle"
import { DocumentWorker } from "@/utils/document-worker"

export const HeaderClient: React.FC<PropsWithChildren> = ({ children }) => {
  const headerRef = useRef<HTMLDivElement>(null)
  const currentScrollYPosition = useRef<number>(0)
  const [isHeaderVisible, setHeaderVisible] = useState<boolean>(true)

  useEffect((): (() => void) | void => {
    const headerEl = headerRef.current
    if (!headerEl) {
      return
    }

    const updateHeaderCSSVariables = (): void => {
      DocumentWorker.setCSSVar("header-height", `${headerEl.offsetHeight}px`)
    }

    const updateHeaderVisibleOnMousemoveHandler = ({ clientY }: MouseEvent): void => {
      if (clientY >= headerEl.offsetHeight) {
        setHeaderVisible(true)
      }
    }

    const updateHeaderVisibleOnScrollHandler = (): void => {
      if (currentScrollYPosition.current < window.scrollY && window.scrollY > headerEl.offsetHeight) {
        setHeaderVisible(false)
      } else {
        setHeaderVisible(true)
      }

      currentScrollYPosition.current = window.scrollY
    }

    updateHeaderVisibleOnScrollHandler()

    setTimeout(() => {
      updateHeaderCSSVariables()
    }, 100)

    const windowResizeHandler = throttle<(event: UIEvent) => void>((): void => {
      updateHeaderCSSVariables()
    }, 100)
    const windowMousemoveHandler = throttle<(event: MouseEvent) => void>(updateHeaderVisibleOnMousemoveHandler, 75)
    const windowScrollHandler = throttle<(event: Event) => void>(updateHeaderVisibleOnScrollHandler, 50)

    window.addEventListener("resize", windowResizeHandler)
    window.addEventListener("mousemove", windowMousemoveHandler)
    window.addEventListener("scroll", windowScrollHandler)

    return (): void => {
      window.removeEventListener("resize", windowResizeHandler)
      window.removeEventListener("mousemove", windowMousemoveHandler)
      window.removeEventListener("scroll", windowScrollHandler)
    }
  }, [headerRef, currentScrollYPosition, setHeaderVisible])

  return (
    <header
      ref={headerRef}
      className={cn(
        "border-b w-full py-5 fixed top-0 left-0 z-50 bg-white transition-transform duration-500 pe-[var(--scrollbar-offset)]",
        {
          "opacity-0": !isHeaderVisible,
        },
      )}
    >
      <Container>
        <div className={"flex items-center"}>{children}</div>
      </Container>
    </header>
  )
}
