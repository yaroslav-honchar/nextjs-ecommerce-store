import React from "react"
import { LinkLogo } from "@/components/ui/links/link-logo/link-logo"
import { Container } from "@/components/ui/wrappers/container/container"

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
