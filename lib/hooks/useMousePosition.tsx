import { RefObject, useEffect, useState } from "react"

export interface MousePosition {
  /**
   * The absolute x position
   */
  x: number

  /**
   * The absolute y position
   */
  y: number

  /**
   * The relative position
   */
  relative?: {
    /**
     * The relative x position
     */
    x: number

    /**
     * The relative y position
     */
    y: number
  }
}

export interface Options {
  /**
   * Flag whether the mouse position should be reported even
   * when the cursor is outside of the observed element.
   */
  fireWhenNotInBounds?: boolean
}

function inBounds(val: number) {
  return val >= 0 && val <= 1
}

/**
 * React hook to track the mouse position inside of another component.
 *
 * @param ref Reference to element in which the mouse position should be tracked.
 * @param options Further options which customize the bahviour of the hook
 * @returns The current absolute and relative mouse position and a flag whether the cursor is inside the
 *          referenced element.
 */
export default function useMousePosition(
  ref: RefObject<HTMLElement | undefined>,
  options?: Options,
): [MousePosition | null, boolean] {
  const [position, setPosition] = useState<MousePosition | null>(null)

  const isInParent = () => {
    if (ref.current && position) {
      const bounds = ref.current.getBoundingClientRect()
      const inX =
        position.x >= bounds.left && position.x <= bounds.left + bounds.width
      const inY =
        position.y >= bounds.top && position.y <= bounds.top + bounds.height

      return inX && inY
    }

    return false
  }

  const getRelativePosition = (x: number, y: number) => {
    let relX: number | undefined
    let relY: number | undefined

    if (ref.current) {
      const bounds = ref.current.getBoundingClientRect()
      relX = (x - bounds.left) / bounds.width

      relY = (y - bounds.top) / bounds.height
    }

    if (
      relX !== undefined &&
      relY !== undefined &&
      inBounds(relX) &&
      inBounds(relY)
    ) {
      return {
        x: relX,
        y: relY,
      }
    }
  }

  const handleUpdate = (e: MouseEvent) => {
    const x = e.clientX
    const y = e.clientY
    const relative = getRelativePosition(x, y)
    const didLeave = position?.relative !== undefined && relative === undefined

    if (relative || options?.fireWhenNotInBounds || didLeave) {
      setPosition({
        x,
        y,
        relative,
      })
    }
  }

  useEffect(() => {
    window.addEventListener("mousemove", handleUpdate)
    window.addEventListener("mouseleave", handleUpdate)

    return () => {
      window.removeEventListener("mousemove", handleUpdate)
      window.removeEventListener("mouseleave", handleUpdate)
    }
  }, [])

  return [position, isInParent()]
}
