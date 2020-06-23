import Picture from "../Picture";
import React from "react";
import "./index.scss"
import ReactProps from "../../utils/ReactProps";
import classNames from "classnames";
import containerBuilder from "../../utils/builder/containerBuilder";

interface Props extends ReactProps<HTMLDivElement> {
    type?: "macbook-pro" | "monitor"
}

Mockup.Window = containerBuilder("window")
Mockup.Screen = containerBuilder("screen")
Mockup.SmallWindow = containerBuilder("window small")

export default function Mockup(props: Props) {
    const { type, children, className, ...other } = props
    const src = type === "monitor" ? "monitor.png" : "macbook-pro.png"

    return (
        <div className={classNames("mockup-container", className, { monitor: type === "monitor", macbookPro: type !== "monitor" })} {...other}>
            <Picture className="device" src={src} />
            <div className="content">
                { children }
            </div>
        </div>
    )
}