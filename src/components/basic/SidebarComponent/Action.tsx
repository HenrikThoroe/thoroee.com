import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
    children: string
    callback: () => void
    leading?: ReactNode
    active?: boolean
}

export default function Action(props: Props) {
    return (
        <button className="action" onClick={props.callback}>
            <div className={classNames({icon: true, leading: true, visible: props.leading})}>
                { props.leading }
            </div>
            <span className={classNames({text: true, active: props.active})}>{ props.children }</span>
        </button>
    )
}