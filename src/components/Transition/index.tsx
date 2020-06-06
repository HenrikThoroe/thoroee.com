import { ReactNode, useState, useEffect } from "react";
import React from "react";
import classNames from "classnames";
import "./index.scss"

export default function Transition(props: { children: ReactNode }) {
    // const [toggle, setToggle] = useState(false)

    // useEffect(() => {
    //     setToggle(!toggle)
    // }, [])
//, toggle ? "toggled" : "toggled-alt"
    return (
        <div className={classNames("transition")}>
            { props.children }
        </div>
    )
}