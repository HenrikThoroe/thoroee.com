import React from "react";
import NavbarComponent from "../basic/NavbarComponent";
import Toggle from "../basic/NavbarComponent/Toggle";
import Controls from "../basic/NavbarComponent/Controls";
import Group from "../basic/SidebarComponent/Group";
import Button from "../basic/Button";
import TextField from "../basic/TextField";
import currentBreakpoint from "../../utils/currentBreakpoint";
import useCurrentBreakpoint from '../../utils/hooks/useCurrentBreakpoint'
import Icon from "../basic/Icon";

export interface Props {
    open?: boolean
    onToggleSidebar: () => any
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("darkMode")
}

function desktopControls() {
    return (
        <Controls>
            <Group>
                <Button label="Dark" style="primary" onClick={toggleDarkMode}/>
                <Button label="en" style="primary" onClick={() => {}}/>
                {/* <Button icon={<Icon name="moon" />} style="inline" size="large" onClick={() => {}}/>
                <Button icon={<Icon name="language" />} style="inline" size="large" onClick={() => {}}/> */}
            </Group>
            <Group>
                <TextField style="default" label="Search" inline flat />
                <Button label="Find" style="search" onClick={() => {}}/>
            </Group>
        </Controls>
    )
}

function mobileControls() {
    return (
        <Controls>
            <Group>
                <Button icon={<Icon name="sun" />} style="inline" size="large" onClick={toggleDarkMode}/>
                <Button icon={<Icon name="language" />} style="inline" size="large" onClick={() => {}}/>
                <Button icon={<Icon name="research" />} style="inline" size="large" onClick={() => {}}/>
            </Group>
        </Controls>
    )
}

export default function Navbar(props: Props) {
    let breakpoint = useCurrentBreakpoint()

    return (
        <NavbarComponent>
            <Toggle onClick={props.onToggleSidebar} open={props.open} />

            { breakpoint === "desktop" ? desktopControls() : mobileControls() }
        </NavbarComponent>
    )
}