import { AccentColors } from "../../lib/color"

export interface BackgroundHighlight {
  /**
   * The color used as an accent at the given position.
   */
  color: AccentColors

  /**
   * The x coordinate of the center of the highlight.
   * Should be in a range from 0 to 1.
   */
  x: number

  /**
   * The x coordinate of the center of the highlight.
   * Should be in a range from 0 to 1.
   */
  y: number
}

export default interface SharedProps {
  /**
   * The height used for the card. Numbers will be interpreted as pixels,
   * strings as CSS properties.
   */
  height?: number | string

  /**
   * The width used for the card. Numbers will be interpreted as pixels,
   * strings as CSS properties.
   */
  width?: number | string

  children?: React.ReactNode
}
