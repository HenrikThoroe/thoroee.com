import SidebarComponent from "../basic/SidebarComponent";
import React, { useState } from "react";
import Header from "../basic/SidebarComponent/Header";
import Title from "../basic/SidebarComponent/Title";
import Group from "../basic/SidebarComponent/Group";
import Caption from "../basic/SidebarComponent/Caption";
import Action from "../basic/SidebarComponent/Action";
import Body from "../basic/SidebarComponent/Body";
import GroupHeader from "../basic/SidebarComponent/GroupHeader";
import Button from "../basic/Button";
import { Link, useLocation } from "react-router-dom";
import Icon from "../basic/Icon"
import { useSelector } from "react-redux";
import selectDarkMode from "../../redux/selectors/selectDarkMode";

export interface Props {
    collapsed: boolean
    onSidebarToggle: (collapsed: boolean) => void
}

export default function Sidebar(props: Props) {
    const [displayedGroup, changeDisplayedGroup] = useState<"legal" | "products">("products")
    const location = useLocation()

    return (
        <SidebarComponent hidden={props.collapsed}>
            <Header>
                <Icon name="logo" className="header-icon" />
                <Title>Thorøe</Title> 
            </Header>

            <Body>
                <Link to="/">
                    <Action active={location.pathname === "/"} leading={<Icon name="person"/>}>
                        About Me
                    </Action>
                </Link>

                <Action callback={() => window.open("https://github.com", "_blank")} leading={<Icon name="github"/>}>GitHub</Action>

                <Link to="/feedback">
                    <Action active={location.pathname === "/feedback"} leading={<Icon name="envelop-open"/>}>
                        Feedback
                    </Action>
                </Link>
                
                <Group collapsed={displayedGroup !== "products"}>
                    <GroupHeader>
                        <Caption>Products</Caption>
                        <Button style="inline" label="+" onClick={() => changeDisplayedGroup("products")} />
                    </GroupHeader>
                    <Action callback={() => {}}>Castle</Action>
                </Group>
                <Group collapsed={displayedGroup !== "legal"}>
                    <GroupHeader>
                        <Caption>Legal</Caption>
                        <Button style="inline" label="+" onClick={() => changeDisplayedGroup("legal")} />
                    </GroupHeader>
                    <Action callback={() => {}} leading={<Icon name="textfile"/>}>Data Protection</Action>
                    <Action callback={() => {}} leading={<Icon name="textfile"/>}>Legal Disclosure</Action>
                </Group>
            </Body>
        </SidebarComponent>
    )
}