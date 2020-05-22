import React, { ReactNode, useRef } from "react";
import classNames from "classnames";
import "./index.scss"
import HStack from "../Stacks/HStack";

export type ButtonType = 
    "inline" | 
    "primary" | 
    "search"

export interface Props {
    imageButton?: boolean
    icon?: ReactNode
    label?: ReactNode
    flat?: boolean
    style?: ButtonType
    size?: "small" | "default" | "large"
    onClick?: () => any
    submit?: boolean
}

export default function Button(props: Props) {
    let content: ReactNode
    const buttonRef = useRef<HTMLButtonElement>(null)
    let timeout: NodeJS.Timeout

    switch (props.style || "primary") {
        case "inline":
            content = props.icon ? props.icon : props.label
            break
        case "search":
        case "primary":
            content = <div>{ props.icon } { props.label ? <span>{ props.label }</span> : undefined}</div>
            break
    }

    const handleClick = (event: React.MouseEvent) => {
        event.preventDefault()

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

    const handleTouchStart = (e: React.TouchEvent) => {
        e.preventDefault()
        buttonRef.current?.classList.add("btnActive")
    }

    const handleTouchEnd = (e: React.TouchEvent) => {
        // e.preventDefault()
        buttonRef.current?.classList.remove("btnActive")
    }

    return (
        <button 
            ref={buttonRef} 
            className={classNames({ 
                button: true, 
                inline: props.style === "inline", 
                flat: props.flat, 
                search: props.style === "search",
                large: props.size === "large",
                small: props.size === "small"})} 
            onClick={handleClick}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            type={props.submit ? "submit" : "button"}
            onFocus={(e) => {
                e.preventDefault()
                e.target?.focus({ preventScroll: true })
            }}>
            <HStack verticalAlignment="center" alignment="center" spacing="5px">
                { props.icon ? props.icon : undefined }
                { props.label ? props.label : undefined }
            </HStack>
        </button>
    )
}