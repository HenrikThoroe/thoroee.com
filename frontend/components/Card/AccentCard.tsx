"use client"

import { useRef } from "react"
import useMousePosition from "../listener/useMousePosition"
import Card from "./Card"
import SharedProps, { BackgroundHighlight } from "./SharedProps"

interface Props extends SharedProps {
  /**
   * The used highlight. The given position will be the default
   * position used when the mouse is out of bounds.
   */
  highlight: BackgroundHighlight

  /**
   * A flag whether the background should be highlighted at
   * the default position when the cursor is out of bounds.
   * @default false
   */
  showWhenUnfocused?: boolean
}

/**
 * An accent card is a wrapper around normal `Card`s.
 * It tracks the mouse position and updates the highlighted
 * position of the background acordingly.
 *
 * **Important: ** The component is rendered client side and updates on each mouse position upadate!
 * Should be used with caution to provide good performance on weak client devices.
 */
export default function AccentCard(props: Props) {
  const { highlight, showWhenUnfocused, ...other } = props
  const ref = useRef<HTMLDivElement>(null)
  const [position, isInBounds] = useMousePosition(ref)

  const x = () => position?.relative?.x ?? highlight.x
  const y = () => position?.relative?.y ?? highlight.y
  const makeHighlight = () => ({ color: highlight.color, x: x(), y: y() })
  const shouldRebuild = () => (isInBounds || showWhenUnfocused) ?? false

  return (
    <div ref={ref} style={{ width: "max-content", height: "max-content" }}>
      <Card
        {...other}
        highlight={shouldRebuild() ? makeHighlight() : undefined}
      />
    </div>
  )
}
