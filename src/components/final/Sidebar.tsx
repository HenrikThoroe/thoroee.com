import SidebarComponent from "../basic/SidebarComponent";
import React from "react";
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

export interface Props {
    collapsed: boolean
    onSidebarToggle: (collapsed: boolean) => void
}

export default function Sidebar(props: Props) {
    return (
        <SidebarComponent hidden={props.collapsed}>
            <Header>
                <Icon name="bootstrap" className="bt_sidebar-heading_icon"/>
                <Title>Thorøe</Title> 
            </Header>

            <Body>
                <Action callback={() => {}} leading={<Icon name="person" />}>About Me</Action>
                <Action callback={() => {}} leading={<Icon name="github" />}>GitHub</Action>
                <Action callback={() => {}} leading={<Icon name="envelopOpen" />}>Feedback</Action>
                <Group>
                    <Caption>Portfolio</Caption>
                    <Action callback={() => {}}>Castle</Action>
                </Group>
                <Dropdown label="Legal">
                    <Action callback={() => {}}>Legal Disclosure</Action>
                    <Action callback={() => {}}>Data Protection Declaration</Action>
                </Dropdown>
            </Body>

            <Footer>
                <Action callback={() => props.onSidebarToggle(!props.collapsed)} trailing={<Icon name="chevron-left" />}>Hide</Action>
                <Footnote>&copy; Copyright 2020 - Henrik Thorøe</Footnote>
            </Footer>
        </SidebarComponent>
    )
}