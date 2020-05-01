import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss"

export interface Props {
    padding?: "1" | "2" | "3"
    className?: string
    children: ReactNode
}

export default function Container(props: Props) {
    const paddingClass = 
        props.padding === "1" ? "p1" : 
        props.padding === "2" ? "p2" : 
        props.padding === "3" ? "p3" : 
        null

    return (
        <div className={classNames("container", props.className, paddingClass)}>
            { props.children }
        </div>
    )
}