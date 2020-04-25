import SidebarComponent from "../basic/SidebarComponent";
import React, { useState } from "react";
import Header from "../basic/SidebarComponent/Header";
import Title from "../basic/SidebarComponent/Title";
import Group from "../basic/SidebarComponent/Group";
import Caption from "../basic/SidebarComponent/Caption";
import Action from "../basic/SidebarComponent/Action";
import Dropdown from "../basic/SidebarComponent/Dropdown";
import Body from "../basic/SidebarComponent/Body";
import Footer from "../basic/SidebarComponent/Footer";
import Footnote from "../basic/SidebarComponent/Footnote";
import Icon from "../Icon";
import GroupHeader from "../basic/SidebarComponent/GroupHeader";
import Button from "../basic/Button";

export interface Props {
    collapsed: boolean
    onSidebarToggle: (collapsed: boolean) => void
}

export default function Sidebar(props: Props) {
    const [displayedGroup, changeDisplayedGroup] = useState<"legal" | "products">("products")

    return (
        <SidebarComponent hidden={props.collapsed}>
            <Header>
                <Icon name="bootstrap" className="header-icon"/>
                <Title>Thorøe</Title> 
            </Header>

            <Body>
                <Action callback={() => {}} leading={<Icon name="person" width="25px" height="25px"/>}>About Me</Action>
                <Action callback={() => {}} leading={<Icon name="github" width="25px" height="25px"/>}>GitHub</Action>
                <Action active callback={() => {}} leading={<Icon name="envelopOpen" width="25px" height="25px"/>}>Feedback</Action>
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
                    <Action callback={() => {}}>Data Protection</Action>
                    <Action callback={() => {}}>Legal Disclosure</Action>
                </Group>
            </Body>
        </SidebarComponent>
    )
}