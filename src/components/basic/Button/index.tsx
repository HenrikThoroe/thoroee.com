import React, { ReactNode, useRef } from "react";
import classNames from "classnames";
import "./index.scss"

export type ButtonType = 
    "inline" | 
    "primary" | 
    "search"

export interface Props {
    imageButton?: boolean
    icon?: ReactNode
    label?: string
    flat?: boolean
    style: ButtonType
    onClick?: () => any
}

export default function Button(props: Props) {
    let content: ReactNode
    const buttonRef = useRef<HTMLButtonElement>(null)
    let timeout: NodeJS.Timeout

    switch (props.style) {
        case "inline":
            content = props.icon ? props.icon : props.label
            break
        case "search":
        case "primary":
            content = <div>{ props.icon } { props.label ? <span>{ props.label }</span> : undefined}</div>
            break
    }

    const handleClick = (event: React.MouseEvent) => {
        const button = buttonRef.current

        if (button && props.style !== "inline") {
            const delay = 400
            const rect = button.getBoundingClientRect()
            const x = Math.floor(event.clientX - rect.left)
            const y = Math.floor(event.clientY - rect.top)

            button.style.setProperty("--x", `${x}`)
            button.style.setProperty("--y", `${y}`)
            button.style.setProperty("--r", `${Math.max(rect.width, rect.height) * 2}`)
            button.style.setProperty("--d", `${delay}`)
            button.classList.add("ripple")

            timeout = setTimeout(() => button?.classList.remove("ripple"), delay)
        }

        props.onClick?.call(null)
    }

    return (
        <button ref={buttonRef} className={classNames({ button: true, inline: props.style === "inline", flat: props.flat, search: props.style === "search" })} onClick={handleClick}>
            { content }
        </button>
    )
}