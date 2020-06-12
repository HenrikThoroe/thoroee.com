import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss"
import ReactProps from "../../utils/ReactProps";

export interface Props extends ReactProps<HTMLDivElement> {
    padding?: "1" | "2" | "3" | string
    fill?: boolean
}

export default function Container(props: Props) {
    const { className, padding, fill, style, ...other } = props
    const paddingClass = 
        padding === "1" ? "p1" : 
        padding === "2" ? "p2" : 
        padding === "3" ? "p3" : 
        null

    const customStyle = typeof padding === "string" ? 
        { ...style, padding: padding } : 
        { ...style }

    return (
        <div {...other} style={customStyle} className={classNames("container", paddingClass, { fill: fill }, className)}>
            { props.children }
        </div>
    )
}