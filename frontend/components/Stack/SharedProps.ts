import React from "react"
import { Spacing } from "../../lib/Spacing"

export default interface SharedProps extends React.HTMLProps<any> {
  /**
   * The container element used for flex boxes.
   * Can be anny valid HTML element.
   * @default div
   */
  container?: keyof React.ReactHTML

  /**
   * The gap between children elements.
   * Can be a key for default spacing or a custom value.
   * The spacing will create hidden div element
   * between children which creates the appropiate spacing.
   * @default 0
   */
  spacing?: Spacing

  /**
   * A flag whether the `Stack` should take `100%` width and/or height.
   * @default false
   */
  grow?: "vertical" | "horizontal" | "both" | boolean

  /**
   * A value for applied padding.
   * When an tuple array is passed it will be trated as CSS
   * multi value padding.
   * @default 0
   */
  padding?: Spacing | [Spacing, Spacing] | [Spacing, Spacing, Spacing, Spacing]

  children?: React.ReactNode
}
