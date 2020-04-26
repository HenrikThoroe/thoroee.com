import React from "react";
import NavbarComponent from "../basic/NavbarComponent";
import Toggle from "../basic/NavbarComponent/Toggle";
import Controls from "../basic/NavbarComponent/Controls";
import Group from "../basic/SidebarComponent/Group";
import Button from "../basic/Button";
import TextField from "../basic/TextField";

export interface Props {
    open?: boolean
    onToggleSidebar: () => any
}

export default function Navbar(props: Props) {
    return (
        <NavbarComponent>
            <Toggle onClick={props.onToggleSidebar} open={props.open} />

            <Controls>
                <Group>
                    <Button label="Dark" style="primary" onClick={() => {}}/>
                    <Button label="en" style="primary" onClick={() => {}}/>
                </Group>
                <Group>
                    <TextField style="default" label="Search" inline flat />
                    <Button label="Find" style="search" onClick={() => {}}/>
                </Group>
            </Controls>
        </NavbarComponent>
    )
}