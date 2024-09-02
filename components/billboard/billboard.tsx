import cn from "classnames"
import React from "react"
import { Container } from "@/components/ui/wrappers/container/container"
import { Section } from "@/components/ui/wrappers/section/section"
import Image from "next/image"
import type { IBillboardProps } from "./billboard.props"

export const Billboard: React.FC<IBillboardProps> = ({ data, className }) => {
  return (
    <Section
      spacing={"none"}
      className={cn(className, "relative lg:h-[50vh] min-h-fit overflow-hidden")}
    >
      <div className="relative size-full flex flex-col">
        <Image
          src={data.imageUrl}
          alt={data.label}
          className="object-cover object-center size-full opacity-100 absolute m-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          width={1920}
          height={1080}
        />
        <Container className={" max-lg:px-0 py-16 relative z-20 my-auto"}>
          <div className="w-full lg:w-fit mx-auto flex flex-col gap-4 items-center justify-center bg-black bg-opacity-50 py-6 lg:py-8 px-8 lg:px-16">
            <h1 className="text-white text-3xl xl:text-5xl text-center font-bold">{data.label}</h1>
          </div>
        </Container>
      </div>
    </Section>
  )
}
