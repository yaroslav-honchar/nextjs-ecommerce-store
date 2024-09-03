import { Dialog, DialogPanel, Transition, TransitionChild } from "@headlessui/react"
import { X } from "lucide-react"
import React, { Fragment } from "react"
import { Button } from "@/components/ui/buttons/button/button"
import type { IModalProps } from "./modal.props"

export const Modal: React.FC<IModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <Transition
      show={isOpen}
      appear
      as={Fragment}
    >
      <Dialog
        onClose={onClose}
        className={"relative z-[60]"}
        as={"div"}
      >
        <div className={"fixed inset-0 size-full bg-opacity-50 bg-black"}></div>
        <div className={"fixed inset-0 overflow-y-auto"}>
          <div className={"flex min-w-full size-full items-center justify-center p-4 text-center"}>
            <TransitionChild
              as={Fragment}
              enter={"ease-out duration-300"}
              enterFrom={"opacity-0 scale-95"}
              enterTo={"opacity-100 scale-100"}
              leave={"ease-in duration-200"}
              leaveFrom={"opacity-100 scale-100"}
              leaveTo={"opacity-0 scale-95"}
            >
              <DialogPanel className={"w-full max-w-3xl overflow-hidden text-left align-middle"}>
                <div
                  className={
                    "relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 lg:p-8"
                  }
                >
                  {children}

                  <Button
                    className={"absolute right-4 top-4"}
                    size={"icon"}
                    variant={"ghost"}
                    onClick={onClose}
                  >
                    <X className={"w-4 h-4"} />
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
