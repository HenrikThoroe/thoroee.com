import ReactProps from "../../utils/ReactProps"
import React from "react"
import classNames from "classnames"

export default function Slide(props: ReactProps<HTMLDivElement>) {
    const { className, ...other } = props

    return (
        <div className={classNames("slide", className)} {...other} />
    )
}