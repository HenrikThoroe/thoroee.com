import React, { useRef, ReactNode } from "react"
import './index.scss'

interface Props {
    hidden?: boolean
    children: ReactNode
}

export default function SidebarComponent(props: Props) {
    return (
        <div className={`bt_sidebar ${props.hidden ? "hidden" : ""}`}>
            { props.children }
        </div>
    )
}