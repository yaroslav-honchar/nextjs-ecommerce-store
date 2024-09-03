import cn from "classnames"
import { Tab } from "@headlessui/react"
import React from "react"
import Image from "next/image"
import type { IGalleryTabProps } from "./gallery-tab.props"

export const GalleryTab: React.FC<IGalleryTabProps> = ({ image, alt }) => {
  return (
    <Tab className={"relative flex aspect-square cursor-pointer items-center justify-center bg-white"}>
      {({ selected }) => (
        <div>
          <span className={"absolute h-full w-full aspect-square inset-0 overflow-hidden z-10"}>
            <Image
              src={image.url}
              alt={alt}
              fill={true}
              layout={"fill"}
              className={"object-center object-cover"}
            />
            <span
              className={cn("block absolute inset-0 size-full z-20 border-2 transition-all", {
                "border-black": selected,
                "border-transparent": !selected,
              })}
            ></span>
          </span>
        </div>
      )}
    </Tab>
  )
}
