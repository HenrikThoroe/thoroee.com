import React, { useRef } from "react";

interface Props {
    closed?: boolean
    onClick: () => void
}

export default function Toggle(props: Props) {
    return (
        <div className={`bt_navigation-sidebar-toggle ${props.closed ? "sidebar-close" : ""}`} onClick={props.onClick}>
            <span className="bt_navigation-sidebar-toggle-el" />
            <span className="bt_navigation-sidebar-toggle-el" />
            <span className="bt_navigation-sidebar-toggle-el" />
        </div>
    )
}