import classNames from "classnames"
import Link from "next/link"
import { ReactNode } from "react"
import style from "./style.module.scss"

export interface ClusterNodeProps {
  /**
   * When given, the node will be removed first, when
   * space is a concern. A `Cluster` might hide some nodes
   * to ensure a clean UI. Low priority nodes hint the
   * policy to remove the node first.
   */
  lowPriority?: boolean

  /**
   * An optional `href`. When given the node will act as
   * link component.
   */
  href?: string

  /**
   * The content of the node. Should either be a short text
   * component or an icon.
   */
  children: ReactNode
}

/**
 * A cluster node is displayed inside a `Cluster` component.
 * The node react to mouse hover events. When given a href property
 * the node will act as a `next/link`.
 */
export default function ClusterNode(props: ClusterNodeProps) {
  const Body = () => (
    <div
      className={classNames(style["cluster-node"], {
        [style["priority-low"]]: props.lowPriority,
      })}
    >
      <div className={style.anchor} />
      <div className={style.anchor} />
      <div className={style.anchor} />
      {props.children}
    </div>
  )

  if (props.href) {
    return (
      <Link href={props.href} target="__blank">
        <Body />
      </Link>
    )
  }

  return <Body />
}
