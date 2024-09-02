/**
 * A utility class for managing scrollbar visibility and width.
 */
export class Scrollbar {
  // TODO: Add to tailwind configuration
  static scrollbarCSSVar: string = "--scrollbar-offset"
  static initialBodyOverflow: string = this.isClient() ? getComputedStyle(document.body).overflow : "visible"

  /**
   * Checks if the environment supports the Document interface.
   * @returns True if the Document interface is supported, false otherwise.
   */
  private static isClient(): boolean {
    return typeof document !== "undefined"
  }

  /**
   * Checks if the scrollbar is visible.
   * @returns True if the scrollbar is visible, false otherwise.
   */
  static isScrollbarVisible(): boolean {
    if (!this.isClient()) {
      return false
    }

    return document.documentElement.offsetWidth !== window.innerWidth
  }

  /**
   * Calculates the width of the scrollbar.
   * @returns The width of the scrollbar in pixels.
   */
  static getScrollbarWidth(): number {
    if (!this.isClient()) {
      return 0
    }

    const outer = document.createElement("div")
    outer.style.visibility = "hidden"
    outer.style.width = "100px"
    outer.style.height = "100px"
    outer.style.overflow = "scroll"
    document.body.appendChild(outer)

    const inner = document.createElement("div")
    inner.style.width = "100%"
    inner.style.height = "100%"
    outer.appendChild(inner)

    const widthDiff = outer.offsetWidth - inner.offsetWidth
    outer.remove()

    return widthDiff
  }

  /**
   * Locks the scrollbar by hiding it and storing its initial state.
   */
  static lock(): void {
    if (!this.isClient()) {
      return
    }

    const scrollbarWidth = this.getScrollbarWidth()
    this.initialBodyOverflow = getComputedStyle(document.body).overflow

    document.body.style.overflow = "hidden"
    document.documentElement.style.setProperty(this.scrollbarCSSVar, `${scrollbarWidth}px`)
  }

  /**
   * Unlocks the scrollbar by restoring its initial state.
   */
  static unlock(): void {
    if (!this.isClient()) {
      return
    }

    document.body.style.overflow = this.initialBodyOverflow
    document.documentElement.style.removeProperty(this.scrollbarCSSVar)
  }
}
