import React, { ReactNode, useRef } from "react";
import classNames from "classnames";
import "./index.scss"
import HStack from "../Stacks/HStack";
import { useHistory } from "react-router-dom";
import redirect from "../../utils/redirect";

export type ButtonType = 
    "inline" | 
    "primary" | 
    "search" |
    "comic" |
    "text"

export interface Props {
    imageButton?: boolean
    icon?: ReactNode
    label?: ReactNode
    flat?: boolean
    style?: ButtonType
    size?: "small" | "default" | "large"
    onClick?: () => any
    submit?: boolean
    disabled?: boolean
    fitContent?: boolean
    link?: string
}

export default function Button(props: Props) {
    let content: ReactNode
    const buttonRef = useRef<HTMLButtonElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    let timeout: NodeJS.Timeout
    const history = useHistory()

    switch (props.style || "primary") {
        case "inline":
            content = props.icon ? props.icon : props.label
            break
        case "text":
            content = props.label
            break
        case "comic":
        case "search":
        case "primary":
            content = <div>{ props.icon } { props.label ? <span>{ props.label }</span> : undefined}</div>
            break
    }

    const handleClick = (event: React.MouseEvent) => {
        // event.preventDefault()

        if (props.disabled) {
            return
        }

        const button = containerRef.current

        if (button && props.style !== "inline" && props.style !== "comic" && props.style !== "text") {
            const delay = 400
            const rect = button.getBoundingClientRect()
            const x = Math.floor(event.clientX - rect.left)
            const y = Math.floor(event.clientY - rect.top)

            button.style.setProperty("--x", `${x}`)
            button.style.setProperty("--y", `${y}`)
            button.style.setProperty("--r", `${Math.max(rect.width, rect.height) * 2}`)
            button.style.setProperty("--d", `${delay}`)
            button.classList.add("ripple")

            timeout = setTimeout(() => {
                button?.classList.remove("ripple")
                props.onClick?.call(null)
            }, delay)
        } else {
            props.onClick?.call(null)
        }

        if (props.link) {
            if (props.link.startsWith("https://") || props.link.startsWith("http://")) {
                redirect(props.link)
            } else {
                history.push(props.link)
            }
        }
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
                shrink: props.fitContent,
                button: true, 
                disabled: props.disabled,
                inline: props.style === "inline", 
                comic: props.style === "comic",
                text: props.style === "text",
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
                <div ref={containerRef} className="rippleBox" />
            {/* {props.style === "primary" ? <div ref={containerRef} className="rippleBox" /> : undefined} */}
            <HStack verticalAlignment="center" alignment={props.style === "primary" ? "start" : "center"} spacing="5px">
                { props.icon ? props.icon : undefined }
                { props.label ? props.label : undefined }
            </HStack>
        </button>
    )
}