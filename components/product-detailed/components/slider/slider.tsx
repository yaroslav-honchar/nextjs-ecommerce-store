"use client"

import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react"
import React from "react"
import { SliderTab } from "./components/slider-tab"
import Image from "next/image"
import type { ISliderProps } from "./slider.props"

export const Slider: React.FC<ISliderProps> = ({ images, productName }) => {
  return (
    <TabGroup
      as={"div"}
      className={"flex flex-col-reverse"}
    >
      <div className={"mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"}>
        <TabList
          as={"div"}
          className={"grid grid-cols-4 gap-6"}
        >
          {images.map((image) => (
            <SliderTab
              key={image.id}
              image={image}
              alt={productName}
            />
          ))}
        </TabList>
      </div>
      <TabPanels className={"aspect-square w-full"}>
        {images.map((image) => (
          <TabPanel key={image.id}>
            <div className={"aspect-square relative size-full overflow-hidden"}>
              <Image
                className={"object-center object-cover"}
                src={image.url}
                alt={productName}
                fill={true}
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  )
}
