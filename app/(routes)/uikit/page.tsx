import { Webhook } from "lucide-react"
import { Button } from "@/components/ui/buttons/button/button"
import type { IButtonProps } from "@/components/ui/buttons/button/button.props"
import { Container } from "@/components/ui/wrappers/container/container"

export default function UIKit() {
  const buttons: IButtonProps[][] = [
    [
      { size: "icon", variant: "primary" },
      { size: "sm", variant: "primary" },
      { size: "md", variant: "primary" },
      { size: "lg", variant: "primary" },
    ],
    [
      { size: "icon", variant: "secondary" },
      { size: "sm", variant: "secondary" },
      { size: "md", variant: "secondary" },
      { size: "lg", variant: "secondary" },
    ],
    [
      { size: "icon", variant: "ghost" },
      { size: "sm", variant: "ghost" },
      { size: "md", variant: "ghost" },
      { size: "lg", variant: "ghost" },
    ],
  ]

  return (
    <Container>
      {buttons.map((buttons, index) => (
        <div
          key={index}
          className={"flex flex-col gap-2 mb-4 py-8"}
        >
          {buttons.map((button, index) => (
            <Button
              key={index}
              size={button.size}
              variant={button.variant}
            >
              {button.size === "icon" ? (
                <Webhook
                  size={24}
                  className={"size-6"}
                />
              ) : (
                `Button ${button.variant} ${button.size}`
              )}
            </Button>
          ))}
        </div>
      ))}
    </Container>
  )
}
