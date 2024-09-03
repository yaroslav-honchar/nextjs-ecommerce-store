"use client"

import React from "react"
import { PreviewModal } from "@/components/preview-modal/preview-modal"
import { useMounted } from "@/hooks/use-mounted.hook"

export const ModalProvider: React.FC = () => {
  const isMounted = useMounted()
  if (!isMounted) {
    return null
  }

  return (
    <>
      <PreviewModal />
    </>
  )
}
