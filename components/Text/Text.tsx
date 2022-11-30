import classNames from "classnames"
import { createElement } from "react"
import style from "./style.module.scss"

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
  | "heading"
  | "body-secondary"
  | "code"
  | "hero-heading"
  | "graph-label"
  | "graph-label-large"
  | "graph-label-secondary"

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
   * Optional parameter to override default
   * text size.
   *
   * @note Use with caution. `Text` is designed to be used as-is.
   */
  size?: string | number

  /**
   * Additional class name to be used for the
   * HTML component.
   */
  className?: string

  /**
   * The displayed text or a any component.
   */
  children: React.ReactNode | string
}

/**
 * A `Text` component displays text which is formatted with
 * predefined styles. `Text`s can be of any reasonable underlying
 * HTML type.
 */
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
      fontSize: props.size,
    },
    className: classNames(
      style.text,
      style[props.variant ?? "body"],
      props.className,
    ),
  })
}
