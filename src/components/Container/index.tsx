import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss"
import ReactProps from "../../utils/ReactProps";

export interface Props extends ReactProps<HTMLDivElement> {
    padding?: "1" | "2" | "3"
    fill?: boolean
}

export default function Container(props: Props) {
    const { className, padding, fill, ...other } = props
    const paddingClass = 
        padding === "1" ? "p1" : 
        padding === "2" ? "p2" : 
        padding === "3" ? "p3" : 
        null

    return (
        <div {...other} className={classNames("container", paddingClass, { fill: fill }, className)}>
            { props.children }
        </div>
    )
}