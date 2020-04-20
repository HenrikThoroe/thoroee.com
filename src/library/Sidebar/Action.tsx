import React, { ReactNode } from "react";

interface Props {
    children: string
    callback: () => void
    leading?: ReactNode
    trailing?: ReactNode
}

export default function Action(props: Props) {
    return (
        <button className="bt_sidebar-action" onClick={props.callback}>
            <div className="bt_sidebar-action-icon bt_sidebar-action-leading">
                { props.leading }
            </div>
            <span className={props.leading ? "" : "shift"}>{ props.children }</span>
            <div className="bt_sidebar-action-icon bt_sidebar-action-trailing">
                { props.trailing }
            </div>
        </button>
    )
}