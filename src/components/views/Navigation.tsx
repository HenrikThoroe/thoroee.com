import React, { useState, useEffect } from "react";
import NavbarComponent from "../basic/NavbarComponent";
import Toggle from "../basic/NavbarComponent/Toggle";
import Controls from "../basic/NavbarComponent/Controls";
import Group from "../basic/SidebarComponent/Group";
import Button from "../basic/Button";
import TextField from "../basic/TextField";
import currentBreakpoint from "../../utils/currentBreakpoint";
import useCurrentBreakpoint from '../../utils/hooks/useCurrentBreakpoint'
import Icon from "../basic/Icon";
import LanguageSelection from "./Modals/LanguageSelection";
import Modal from "../basic/Modal";

export interface Props {
    open?: boolean
    onToggleSidebar: () => any
}

interface ControlProps {
    onChooseLanguage: () => void
}

function toggleDarkMode() {
    document.documentElement.classList.toggle("darkMode")
}

function DesktopControls(props: ControlProps) {
    return (
        <Controls>
            <Group>
                <Button label="Dark" style="primary" onClick={toggleDarkMode}/>
                <Button label="en" style="primary" onClick={props.onChooseLanguage}/>
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

function MobileControls(props: ControlProps) {
    return (
        <Controls>
            <Group>
                <Button icon={<Icon name="sun" />} style="inline" size="large" onClick={toggleDarkMode}/>
                <Button icon={<Icon name="language" />} style="inline" size="large" onClick={props.onChooseLanguage}/>
                <Button icon={<Icon name="research" />} style="inline" size="large" onClick={() => {}}/>
            </Group>
        </Controls>
    )
}

export default function Navbar(props: Props) {
    let breakpoint = useCurrentBreakpoint()
    const [showLanguagePicker, setShowLanguagePicker] = useState(false)

    return (
        <NavbarComponent>
            <Toggle onClick={props.onToggleSidebar} open={props.open} />

            { 
                breakpoint === "desktop" ? 
                <DesktopControls onChooseLanguage={() => setShowLanguagePicker(true)}/> : 
                <MobileControls onChooseLanguage={() => setShowLanguagePicker(true)}/> 
            }

            <Modal shown={showLanguagePicker} onHide={() => setShowLanguagePicker(false)} centered>
                <Modal.Header>Choose you Language</Modal.Header>
                <Modal.Body>World</Modal.Body>
            </Modal>
        </NavbarComponent>
    )
}