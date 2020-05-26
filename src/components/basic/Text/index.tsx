import ReactProps from "../../../utils/ReactProps";
import React from "react";
import classNames from "classnames";

export type TextType = "body"

export interface Props extends ReactProps<HTMLSpanElement> {
    type?: TextType
}

export default function Text(props: Props) {
    const { type, className, children, ...other } = props

    return (
        <span className={classNames("text", type, className)} {...other}>
            { children }
        </span>
    )
}