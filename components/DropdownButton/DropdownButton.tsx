"use client"

import classNames from "classnames"
import React, { createContext, ReactElement, useContext, useState } from "react"
import ClickListener from "../listener/ClickListener"
import HStack from "../Stack/HStack"
import VStack from "../Stack/VStack"
import Text from "../Text/Text"
import style from "./style.module.css"

interface Props<T> {
  /**
   * The displayed label of the button.
   */
  title: string

  /**
   * The style of the button.
   * - action: Static label, `onChange` is called on each selection and will close the dropdown
   * @default action
   */
  variant?: "action"

  /**
   * Callback which is invoked when a `DropdownItem` is clicked.
   */
  onChange: (item: T) => void

  children: ReactElement<ItemProps<T>> | ReactElement<ItemProps<T>>[]
}

interface ItemProps<T> {
  /**
   * The associated value which will be given to `onChange`
   * of the parent `DropdownButton`.
   */
  value: T

  /**
   * The displayed label of the item.
   */
  label: string
}

interface Context<T> {
  setSelected: (item: T) => void
  close: () => void
}

// TODO: Use generic context
const DropdownContext = createContext<Context<any>>({
  setSelected: () => {},
  close: () => {},
})

/**
 * A dropdown item can be used as child of a `DropdownButton`.
 * The values given to each `DropdownItem` will be forwarded to the parents
 * `onChange` callback.
 */
export function DropdownItem<T>(props: ItemProps<T>) {
  const { value, label } = props
  const { setSelected, close } = useContext<Context<T>>(DropdownContext)

  const handleClick = () => {
    close()
    setSelected(value)
  }

  return (
    <ClickListener className={style.item} onClick={handleClick} preventDefault>
      <HStack alignment="leading">
        <Text variant="body">{label}</Text>
      </HStack>
    </ClickListener>
  )
}

/**
 * A `DropdownButton` can have two states.
 * - inactive: Look similiar to a normal primary `Button` component
 * - active: An absolute positioned dropdown list is diplayed
 *           below the button.
 *
 * Depending on the `variant` of the button, the component will behave differently
 * on user input. See the docs of the `variant` prop for more information.
 */
export default function DropdownButton<T>(props: Props<T>) {
  const [open, setOpen] = useState(false)

  return (
    <div className={style.container}>
      <button className={style.button} onClick={() => setOpen(!open)}>
        <HStack spacing="l">
          <Text variant="body">{props.title}</Text>
          <VStack className={style["arrow-box"]}>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.70711 0.292893C8.31658 -0.097631 7.68342 -0.097631 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 2V1H7V2H9Z" />
            </svg>
            <svg
              width="16"
              height="9"
              viewBox="0 0 16 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" />
            </svg>
          </VStack>
        </HStack>
      </button>
      <DropdownContext.Provider
        value={{ setSelected: props.onChange, close: () => setOpen(false) }}
      >
        <VStack
          className={classNames(style.popover, { [style.hidden]: !open })}
          horizontalAlignment="leading"
          spacing="s"
        >
          {props.children}
        </VStack>
      </DropdownContext.Provider>
    </div>
  )
}
