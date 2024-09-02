"use client"

import cn from "classnames"
import React, { useEffect, useRef, useState } from "react"
import { Container } from "@/components/ui/container/container"
import { LinkLogo } from "@/components/ui/links/link-logo/link-logo"
import { throttle } from "@/lib/throttle"
import { Navigation } from "./components/navigation"
import { DocumentWorker } from "@/utils/document-worker"

export const Header: React.FC = () => {
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
      className={cn("border-b w-full py-5", {
        "translate-[-100%]": !isHeaderVisible,
      })}
    >
      <Container>
        <div className={"flex items-center"}>
          <LinkLogo className={"me-12 relative z-20"} />
          <Navigation />
        </div>
      </Container>
    </header>
  )
}
