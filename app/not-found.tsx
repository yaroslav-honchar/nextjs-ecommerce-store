import type { Metadata } from "next"
import React from "react"
import { LinkRoot } from "@/components/ui/links/link-root/link-root"
import { Title } from "@/components/ui/topography/title/title"
import { Section } from "@/components/ui/wrappers/section/section"
import { ClientRoutes } from "@/routes/client.routes"

export const metadata: Metadata = {
  robots: "noindex, nofollow",
}

export default function NotFoundPage() {
  return (
    <Section
      spacing={"md"}
      className={"flex-grow flex flex-col gap-12 items-center justify-center"}
    >
      <Title
        size={"lg"}
        className={"text-9xl font-black text-black"}
      >
        404
      </Title>
      <Title tag={"h3"}>Page Not Found</Title>
      <LinkRoot
        className={
          "text-md text-black hover:text-white transition-all duration-300 border-2 border-black hover:bg-black px-8 py-3"
        }
        href={ClientRoutes.home}
      >
        Go to home
      </LinkRoot>
    </Section>
  )
}
