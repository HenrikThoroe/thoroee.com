import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss"
import ReactProps from "../../../game/utils/ReactProps";

export interface Props extends ReactProps<HTMLDivElement> {
    padding?: "1" | "2" | "3"
}

export default function Container(props: Props) {
    const { className, padding, ...other } = props
    const paddingClass = 
        padding === "1" ? "p1" : 
        padding === "2" ? "p2" : 
        padding === "3" ? "p3" : 
        null

    return (
        <div {...other} className={classNames("container", paddingClass, className)}>
            { props.children }
        </div>
    )
}