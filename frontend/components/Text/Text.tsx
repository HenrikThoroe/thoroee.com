import classNames from "classnames"
import { createElement } from "react"
import style from "./style.module.css"

/**
 * The text variant determines the look of a
 * `Text` component.
 */
export type TextVariant =
  | "body"
  | "banner"
  | "nav-link"
  | "hero-title"
  | "hero-subtitle"
  | "card-hero-title"
  | "card-hero-body"
  | "card-title"
  | "button-primary"
  | "button-contrast"

type HTMLTextComponent = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p"

interface Props {
  /**
   * The underlying component used by the `Text` view.
   * @default span
   */
  component?: HTMLTextComponent

  /**
   * The variant controls the look of a `Text` view.
   * @default body
   */
  variant?: TextVariant

  /**
   * The text alignment.
   * @default center
   */
  alignment?: "center" | "leading" | "trailing"

  /**
   * The displayed text or a any component.
   */
  children: React.ReactNode | string
}

export default function Text(props: Props) {
  const aligned = () => {
    if (props.alignment === "leading") {
      return "start"
    }

    if (props.alignment === "trailing") {
      return "end"
    }

    return "center"
  }

  return createElement(props.component ?? "span", {
    children: props.children,
    style: {
      textAlign: aligned(),
    },
    className: classNames(style.text, style[props.variant ?? "body"]),
  })
}
