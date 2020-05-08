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
import ListSelection from "../basic/ListSelection";
import Translation from "../basic/Translation";
import translationKeys from "../../Localisation/keys";
import { useSelector, useDispatch } from "react-redux";
import selectDarkMode from "../../redux/selectors/selectDarkMode";
import setDarkMode from "../../redux/actions/setDarkMode";

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
    const darkMode = useSelector(selectDarkMode)
    const dispatch = useDispatch()

    const handleDarkMode = () => {
        toggleDarkMode()
        dispatch(setDarkMode(!darkMode))
    }

    return (
        <Controls>
            <Group>
                <Button label={<Translation for={darkMode ? translationKeys.general.light : translationKeys.general.dark} />} style="primary" onClick={handleDarkMode}/>
                <Button label="en" style="primary" onClick={props.onChooseLanguage}/>
            </Group>
            <Group>
                <TextField style="default" label={<Translation for={translationKeys.general.search} />} inline flat />
                <Button label={<Translation for={translationKeys.general.find} />} style="search" onClick={() => {}}/>
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

            <LanguageSelection shown={showLanguagePicker} onHide={() => setShowLanguagePicker(false)}/>
        </NavbarComponent>
    )
}