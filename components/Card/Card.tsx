import classNames from "classnames"
import { CSSProperties } from "react"
import { parseAccentColor } from "../../lib/color"
import pixelize from "../../lib/pixelize"
import SharedProps, { BackgroundHighlight } from "./SharedProps"
import style from "./style.module.css"

interface Props extends SharedProps {
  /**
   * An optional highlight that is used for the
   * background of the card.
   */
  highlight?: BackgroundHighlight

  /**
   * A flag whether the card should react to
   * mouse hovering over the element.
   */
  hoverEffect?: boolean
}

/**
 * A `Card` is a special UI element that is used to highlight
 * prominent content. Card are usually elements that attract
 * user focus. When the content of the `Card` is not the main
 * focus of the page, it should be considered to use alternatives to `Card`s.
 *
 * Cards provide a highlighted background and a drop shadow to elevate them.
 * In addition a colorful background can be applied to cards as well.
 */
export default function Card(props: Props) {
  const { width, height, highlight, children, hoverEffect, className } = props

  const withSize = (style: CSSProperties): CSSProperties => {
    return {
      ...style,
      height: height ? pixelize(height) : style.minHeight,
      width: width ? pixelize(width) : style.minWidth,
    }
  }

  const withHighlight = (style: CSSProperties): CSSProperties => {
    if (!highlight) {
      return style
    }

    const x = `${highlight.x * 100}%`
    const y = `${highlight.y * 100}%`

    return {
      ...style,
      background: `radial-gradient(circle at ${x} ${y}, ${parseAccentColor(
        highlight.color,
      )}, var(--bg-highlight))`,
    }
  }

  return (
    <section
      className={classNames(style.card, className, {
        [style.hover]: hoverEffect,
      })}
      style={withHighlight(withSize({}))}
    >
      {children}
    </section>
  )
}
