import React, { ReactNode } from "react"
import './index.scss'
import classNames from "classnames"
import Action from "./Action"
import Body from "./Body"
import Header from "./Header"
import GroupHeader from "./GroupHeader"
import Group from "./Group"
import Title from "./Title"
import Caption from "./Caption"

interface Props {
    hidden?: boolean
    children: ReactNode
}

SidebarComponent.Action = Action
SidebarComponent.Body = Body
SidebarComponent.Header = Header
SidebarComponent.GroupHeader = GroupHeader
SidebarComponent.Group = Group
SidebarComponent.Title = Title
SidebarComponent.Caption = Caption

export default function SidebarComponent(props: Props) {
    return (
        <div className={classNames({ sidebar: true, hidden: props.hidden })}>
            { props.children }
        </div>
    )
}