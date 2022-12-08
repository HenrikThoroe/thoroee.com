import { ReactElement } from "react"
import { ClusterNodeProps } from "./ClusterNode"
import style from "./style.module.scss"

interface Props {
  /**
   * An array or `ClusterNode`s.
   * The children will be aranged in a CSS grid.
   */
  children: ReactElement<ClusterNodeProps>[]
}

/**
 * A `Cluster` is a component that displays `ClusterNode`s in a grid.
 * It will max out at 3 columns and fall back to 2 or 1 column depending on the available
 * screen size. Not all children might be displayed dependng on the number of displayed
 * columns.
 */
export default function Cluster(props: Props) {
  return <div className={style.cluster}>{props.children}</div>
}
