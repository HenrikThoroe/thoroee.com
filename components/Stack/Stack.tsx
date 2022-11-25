import classNames from "classnames"
import React, { CSSProperties, ReactNode } from "react"
import { createElement } from "react"
import { parseSpacing } from "../../lib/utils/Spacing"
import SharedProps from "./SharedProps"
import style from "./style.module.css"

/**
 * Alignment of children in flex boxes.
 */
export type Alignment = "trailing" | "leading" | "center" | "space-between"

interface StackProps {
  /**
   * The vertical alignment of children.
   * Works the same in column and row mode.
   * @default center
   */
  verticalAlignment?: Alignment

  /**
   * The horizontal alignment of children.
   * Works the same in column and row mode.
   * @default center
   */
  horizontalAlignment?: Alignment

  /**
   * The flex direction of the container.
   * The direction determines how the children are ordered.
   * In row mode, children are placed horizontally, in column mode
   * vertically.
   * @default row
   */
  direction?: "row" | "column"
}

/**
 * A `Stack` is a wrapper for flexboxes. It renders to the given HTML component
 * and applies flex properties to it.
 */
export default function Stack(props: StackProps & SharedProps): JSX.Element {
  const {
    container,
    children,
    verticalAlignment,
    horizontalAlignment,
    direction,
    spacing,
    padding,
    grow,
  } = props

  const defaultAlignment = "center"
  const parseAlignment = (a: Alignment) => {
    if (a === "leading") {
      return "flex-start"
    }

    if (a == "trailing") {
      return "flex-end"
    }

    return a
  }

  const createAlignmentGuides = () => {
    if (direction == "column") {
      return {
        alignItems: parseAlignment(horizontalAlignment ?? defaultAlignment),
        justifyContent: parseAlignment(verticalAlignment ?? defaultAlignment),
      }
    } else {
      return {
        alignItems: parseAlignment(verticalAlignment ?? defaultAlignment),
        justifyContent: parseAlignment(horizontalAlignment ?? defaultAlignment),
      }
    }
  }

  const withSpacing = (children: ReactNode[]) => {
    const spaced: ReactNode[] = []
    const spacingKey = direction === "column" ? "marginBottom" : "marginRight"
    const spacingVal = parseSpacing(spacing ?? 0)

    for (const [index, child] of children.entries()) {
      spaced.push(child)

      if (index < children.length - 1) {
        spaced.push(
          <div className={style.spacer} style={{ [spacingKey]: spacingVal }} />,
        )
      }
    }

    return spaced
  }

  const withStyling = (style: CSSProperties): CSSProperties => {
    if (grow === "both" || grow === true) {
      style.width = "100%"
      style.height = "100%"
    }

    if (grow === "horizontal") {
      style.width = "100%"
    }

    if (grow === "vertical") {
      style.height = "100%"
    }

    if (padding !== undefined) {
      style.padding = [padding].flat().map(parseSpacing).join(" ")
    }

    return style
  }

  return createElement(container ?? "div", {
    children: withSpacing(React.Children.toArray(children)),
    className: classNames(
      style.stack,
      style[direction ?? "row"],
      props.className,
    ),
    style: withStyling({
      ...props.style,
      ...{
        flexDirection: direction,
        ...createAlignmentGuides(),
      },
    }),
  })
}
