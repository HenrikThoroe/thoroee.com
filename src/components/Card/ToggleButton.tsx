import React from "react"
import classNames from "classnames"
import Icon from "../Icon"

export interface Props {
    open?: boolean
    onClick?: () => void
}

export default function ToggleButton(props: Props) {
    return (
        <div className={classNames("expandButton", { open: props.open })} onClick={props.onClick}>
            <div />
            <div />
            <div />
        </div>
    )
}