import React from "react";
import ReactProps from "../../../utils/ReactProps";
import classNames from "classnames";
import "./index.scss"
import Body from "./Body";
import DateRange from "./DateRange";
import Event from "./Event";
import Subtitle from "./Subtitle";
import Title from "./Title";

Timeline.Body = Body
Timeline.DateRange = DateRange
Timeline.Event = Event
Timeline.Subtitle = Subtitle
Timeline.Title = Title

export default function Timeline(props: ReactProps<HTMLDivElement>) {
    const { children, className, ...other } = props
    return (
        <div className={classNames("timeline", className)} {...other}>
            { children }
        </div>
    )
}