import React, { ReactNode } from "react";
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

    switch (props.style) {
        case "inline":
            content = props.icon ? props.icon : props.label
            break
        case "search":
        case "primary":
            content = <div>{ props.icon } { props.label ? <span>{ props.label }</span> : undefined}</div>
            break
    }

    return (
        <button className={classNames({ button: true, inline: props.style === "inline", flat: props.flat })} onClick={props.onClick}>
            { content }
        </button>
    )
}