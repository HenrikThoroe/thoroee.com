import { ReactNode } from "react"
import style from "./style.module.css"

interface Props extends React.HTMLProps<HTMLDivElement> {
  background: ReactNode
}

/**
 * A `ZStack` displays a background below the components
 * children. The background is positioned absolute
 * and any overflowing parts will not be shown.
 */
export default function ZStack(props: Props) {
  const { background, children, ...other } = props

  return (
    <div className={style.zstack} {...other}>
      <div className={style["zstack-background"]}>{background}</div>
      {children}
    </div>
  )
}
