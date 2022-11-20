import React, { ReactNode } from "react"

interface Props extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode

  /**
   * Callback which is invoked for each click event.
   */
  onClick: () => void

  /**
   * Optional flag whether the default behaviour of HTML click
   * events should be prevented.
   */
  preventDefault?: boolean
}

/**
 * A `ClickListener` is wrapper component that provides
 * some convenience parameters for easy click event
 * handeling.
 */
export default function ClickListener(props: Props) {
  const { children, onClick, preventDefault, ...other } = props

  const handle = (event: React.MouseEvent) => {
    if (preventDefault) {
      event.preventDefault()
    }
    onClick()
  }

  return (
    <div {...other} style={{ cursor: "pointer" }} onClick={handle}>
      {children}
    </div>
  )
}
