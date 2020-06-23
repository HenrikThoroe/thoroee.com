import ReactProps from "../../utils/ReactProps";
import React from "react";
import "./index.scss"
import classNames from "classnames";

interface Props extends ReactProps<HTMLDivElement> {
    direction?: "x" | "y" | "xy"
    hideScrollBars?: boolean
}

export default function ScrollView(props: Props) {
    const { direction, style, className, hideScrollBars, ...other } = props
    const xStyle: React.CSSProperties = { overflowX: "scroll" }
    const yStyle: React.CSSProperties = { overflowY: "scroll" }
    let customStyle = style

    switch (direction) {
        case "x":
            customStyle = { ...style, ...xStyle }
        case "y":
            customStyle = { ...style, ...yStyle }
        case "xy":
        default:
            customStyle = { ...style, ...xStyle, ...yStyle }
    }

    return (
        <div className={classNames(hideScrollBars ? "hideScrollBars" : undefined)} style={customStyle} {...other} />
    )
}