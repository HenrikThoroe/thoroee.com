import ReactProps from "../../utils/ReactProps";
import React from "react";
import classNames from "classnames";
import "./index.scss"

export interface Props extends ReactProps<HTMLDivElement> {
    status: "active" | "maintained" | "abandoned"
}

export default function StatusIndicator(props: Props) {
    const { status: type, className, children, ...other } = props
    const statusClass = { 
        statusActive: type === "active", 
        statusMaintained: type === "maintained", 
        statusAbandoned: type === "abandoned" 
    }

    return (
        <div className={classNames("status", statusClass, className)} {...other}>
            { children }
        </div>
    )
}