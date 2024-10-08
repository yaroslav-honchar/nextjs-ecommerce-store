import type { Metadata } from "next"
import type { PropsWithChildren } from "react"
import { ModalProvider } from "@/providers/modal-provider"
import { ToastProvider } from "@/providers/toast-provider"
import { Footer } from "@/components/footer/footer"
import { Header } from "@/components/header/header"
import { Urbanist } from "next/font/google"
import "./globals.css"

export const revalidate = 0

const font = Urbanist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "E-commerce store",
  description: "E-commerce store",
}

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <div className={"flex flex-col size-full"}>
          <Header />
          <main className={"flex-grow flex flex-col pt-[var(--header-height)]"}>{children}</main>
          <Footer />
          <ModalProvider />
          <ToastProvider />
        </div>
      </body>
    </html>
  )
}
