import React from "react"
import { Container } from "@/components/ui/container/container"
import { LinkLogo } from "@/components/ui/links/link-logo/link-logo"

export const Footer: React.FC = () => {
  const year = new Date().getFullYear()

  return (
    <footer className={"bg-white"}>
      <Container>
        <div className={"pt-12 pb-7 border-t"}>
          <LinkLogo className={"me-12"} />
        </div>
        <div className={"py-5 border-t"}>
          <p className={"text-center text-xs text-black"}>© {year} Fake Store. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
