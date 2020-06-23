import React, { ReactType } from "react"
import ReactProps from "../../utils/ReactProps";
import classNames from "classnames";
import './index.scss'

type Size = "s" | "m" | "l" | "xl" | "xxl" | string

type Type = "stroke" | "stroke-left" | "centered" | "centered-light" | "light" | "subtitle"

type Component = 
    "h1" | 
    "h2" | 
    "h3" |
    "h4" | 
    "h5" |
    "h6" | 
    "span"

type Spacing = string | [string, string] | [string, string, string, string]

export interface Props<T> extends ReactProps<T> {
    size?: Size
    type?: Type
    component?: T
    spacing?: Spacing
    bold?: boolean
}

export default function Headline<T extends Component>(props: Props<T>) {
    const Comp = (props.component || "span") as unknown as ReactType
    const { size, type, bold, spacing, className, style, ...other } = props

    const customStyle = {
        ...style,
        ["--size" as any]: translateSize(size || "m"),
        ["--spacing" as any]: translateSpacing(spacing || "0px")
    }

    return (
        <Comp className={classNames("headline", type, bold ? "bold" : undefined, className)} style={customStyle} {...other} />
    )
}

function translateSpacing(spacing: Spacing) {
    if (typeof spacing === "string") {
        return spacing
    } else {
        return spacing.join(" ")
    }
}

function translateSize(size: Size) {
    switch (size) {
        case "s":
            return ".8rem"
        case "m":
            return "1.2rem"
        case "l":
            return "1.5rem"
        case "xl":
            return "2rem"
        case "xxl":
            return "3rem"
        default:
            return size
    }
}