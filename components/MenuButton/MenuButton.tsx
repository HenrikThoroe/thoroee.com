"use client"

import classNames from "classnames"
import { useState } from "react"
import style from "./style.module.css"

interface Props {
  /**
   * Event handler called when the button was pressed.
   * A flag is provided whether the button is in a state
   * that will open the menu dialouge or close it.
   */
  onClick: (open: boolean) => void
}

/**
 * A menu button can have to states. Open or closed.
 * In the open state it will show a burger menu.
 * In the closed state a cross is shown. The states
 * signalize whether a menu can be opened using the button or
 * closed.
 */
export default function MenuButton(props: Props) {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    props.onClick(!open)
    setOpen(!open)
  }

  return (
    <button
      className={classNames(style.button, { [style.open]: open })}
      onClick={handleClick}
    >
      <span className={style.bar} />
      <span className={style.bar} />
      <span className={style.bar} />
    </button>
  )
}
