import SidebarComponent from "../components/SidebarComponent";
import React, { useState } from "react";
import Header from "../components/SidebarComponent/Header";
import Title from "../components/SidebarComponent/Title";
import Group from "../components/SidebarComponent/Group";
import Caption from "../components/SidebarComponent/Caption";
import Action from "../components/SidebarComponent/Action";
import Body from "../components/SidebarComponent/Body";
import GroupHeader from "../components/SidebarComponent/GroupHeader";
import Button from "../components/Button";
import { Link, useLocation } from "react-router-dom";
import Icon from "../components/Icon"
import { useSelector } from "react-redux";
import selectDarkMode from "../redux/selectors/selectDarkMode";
import Translation from "../components/Translation";

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
                        <Translation select={lang => lang.links.about.name} />
                    </Action>
                </Link>

                <Action callback={() => window.open("https://github.com", "_blank")} leading={<Icon name="github"/>}>
                    <Translation select={lang => lang.links.github.name} />
                </Action>

                <Link to="/feedback">
                    <Action active={location.pathname === "/feedback"} leading={<Icon name="envelop-open"/>}>
                        <Translation select={lang => lang.links.feedback.name} />
                    </Action>
                </Link>
                
                <Group collapsed={displayedGroup !== "products"}>
                    <GroupHeader>
                        <Caption>Products</Caption>
                        <Button style="inline" label="+" onClick={() => changeDisplayedGroup("products")} />
                    </GroupHeader>
                    <Link to="/castle">
                        <Action leading={<Icon name="castle" format="png" />} active={location.pathname === "/castle"} callback={() => {}}>
                            <Translation select={lang => lang.links.castle.name} />
                        </Action>
                    </Link>
                </Group>
                <Group collapsed={displayedGroup !== "legal"}>
                    <GroupHeader>
                        <Caption>Legal</Caption>
                        <Button style="inline" label="+" onClick={() => changeDisplayedGroup("legal")} />
                    </GroupHeader>
                    <Link to="/dataprotection">
                        <Action callback={() => {}} leading={<Icon name="textfile"/>}>Data Protection</Action>
                    </Link>
                    <Action callback={() => {}} leading={<Icon name="textfile"/>}>Legal Disclosure</Action>
                </Group>
            </Body>
        </SidebarComponent>
    )
}