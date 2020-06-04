import Picture from "../Picture";
import React from "react";
import "./index.scss"
import ReactProps from "../../utils/ReactProps";
import classNames from "classnames";
import containerBuilder from "../../utils/builder/containerBuilder";

interface Props extends ReactProps<HTMLDivElement> {

}

Mockup.Window = containerBuilder("window")

export default function Mockup(props: Props) {
    const { children, className, ...other } = props

    return (
        <div className={classNames("mockup-container", className)} {...other}>
            <Picture className="device" src="macbook-pro.png" />
            <div className="content">
                { children }
            </div>
        </div>
    )
}