import React, { useRef, ReactNode } from "react"
import './index.scss'
import classNames from "classnames"

interface Props {
    hidden?: boolean
    children: ReactNode
}

export default function SidebarComponent(props: Props) {
    return (
        <div className={classNames({ sidebar: true, hidden: props.hidden })}>
            { props.children }
        </div>
    )
}