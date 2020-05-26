import React from "react";
import classNames from "classnames";

interface Props {
    open?: boolean
    onClick: () => void
}

export default function Toggle(props: Props) {
    return (
        <div className={classNames({ toggle: true, open: props.open })} onClick={props.onClick}>
            <span className="toggle-element" />
            <span className="toggle-element" />
            <span className="toggle-element" />
        </div>
    )
}