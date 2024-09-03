"use client"

import React from "react"
import { Gallery } from "@/components/ui/gallery/gallery"
import { Modal } from "@/components/ui/modal/modal"
import { ProductsDetails } from "@/components/ui/products-details/products-details"
import { usePreviewModal } from "@/hooks/use-preview-modal.hook"

export const PreviewModal: React.FC = () => {
  const { data, onClose, isOpen } = usePreviewModal()

  if (!data) {
    return null
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className={"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8"}>
        <div className={"sm:col-span-4 lg:col-span-5"}>
          <Gallery
            images={data.images}
            productName={data.name}
          />
        </div>
        <div className={"sm:col-span-8 lg:col-span-7"}>
          <ProductsDetails data={data} />
        </div>
      </div>
    </Modal>
  )
}
