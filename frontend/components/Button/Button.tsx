import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import HStack from "../Stack/HStack"
import Text, { TextVariant } from "../Text/Text"
import style from "./style.module.css"

interface Props {
  /**
   * The button variant. It determines the look of the
   * component.
   * @default primary
   */
  variant?: "contrast" | "primary"

  /**
   * The callback invoked when the user clicked the button
   * or when a string is passed the URL to open.
   * When a string is given an `<a>` element is rendered.
   * Otherwise a `<button>`
   */
  action: (() => void) | string

  /**
   * The URL of a trailing icon for the button.
   */
  trailing?: string

  children: string
}

/**
 * A `Button` is the standard way to request predefined user
 * input. Buttons can either be HTML `button`s or links.
 * A `Button` can choose from different styles for different levels
 * of priority or to adapt to the stylistic context of the
 * parent view.
 */
export default function Button(props: Props) {
  const { children: name, trailing, variant, action } = props
  const cn = classNames(style.button, variant && style[variant])
  const textVariant = `button-${variant ?? "primary"}` as TextVariant
  const text = <Text variant={textVariant}>{name}</Text>

  const withIcon = (name: React.ReactNode) => {
    if (trailing === undefined) {
      return name
    }

    return (
      <HStack spacing={12}>
        {name}
        <Image
          src={trailing}
          alt="trailing-icon"
          width={19}
          height={19}
          className={style.icon}
        />
      </HStack>
    )
  }

  if (typeof action === "string") {
    return (
      <Link href={action}>
        <span className={cn}>{withIcon(text)}</span>
      </Link>
    )
  }

  return (
    <button className={cn} onClick={action}>
      {withIcon(text)}
    </button>
  )
}
