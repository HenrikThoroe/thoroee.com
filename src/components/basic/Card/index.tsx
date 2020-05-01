import React, { ReactNode } from "react";
import classNames from "classnames";
import "./index.scss"
import Title from "./Title";
import Subtitle from "./Subtitle";
import Section from "./Section";

export interface Props {
    width?: string
    children: ReactNode
}

Card.Title = Title
Card.Subtitle = Subtitle
Card.Section = Section

export default function Card(props: Props) {
    const style = props.width ? { width: props.width } : {}

    return (
        <div className={classNames("card")} style={style}>
            { props.children }
        </div>
    )
}