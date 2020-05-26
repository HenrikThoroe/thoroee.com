import React, { ReactNode } from "react";
import classNames from "classnames";

interface Props {
    children: ReactNode
    callback?: () => void
    leading?: ReactNode
    active?: boolean
}

export default function Action(props: Props) {
    const handleTouchStart = (e: React.TouchEvent) => {
        // e.preventDefault()
        e.currentTarget?.classList.add("btnActive")
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        // e.preventDefault()
        e.currentTarget?.classList.remove("btnActive")
    }

    return (
        <button className="action" onClick={props.callback} onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className={classNames({icon: true, leading: true, visible: props.leading})}>
                { props.leading }
            </div>
            <span className={classNames({text: true, active: props.active})}>{ props.children }</span>
        </button>
    )
}