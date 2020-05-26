import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import "./index.scss"
import Title from "./Title";
import Subtitle from "./Subtitle";
import Section from "./Section";
import ReactProps from "../../utils/ReactProps";
import Header from "./Header";
import ToggleButton from "./ToggleButton";
import Body from "./Body";

export interface Props extends ReactProps<HTMLDivElement> {
    expanded?: boolean
    enableToggle?: boolean
}

Card.Title = Title
Card.Subtitle = Subtitle
Card.Section = Section
Card.Header = Header
Card.ToggleButton = ToggleButton
Card.Body = Body

export default function Card(props: Props) {
    const { expanded, enableToggle, children, className, ...other } = props

    return (
        <div className={classNames("card", className, { enableToggle: enableToggle }, { expanded: expanded === undefined ? true : expanded })} {...other}>
            { children }
        </div>
    )
}