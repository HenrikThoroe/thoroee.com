import Modal from "../../components/Modal"
import React from "react"
import ListSelection from "../../components/ListSelection"
import currentBreakpoint from "../../utils/currentBreakpoint"
import { useSelector, useDispatch } from "react-redux"
import setLanguage from "../../redux/actions/setLanguage"
import selectLanguage from "../../redux/selectors/selectLanguage"

export interface Props {
    shown: boolean
    onHide: () => void
}

export default function LanguageSelection(props: Props) {
    const language = useSelector(selectLanguage)
    const dispatch = useDispatch()

    return (
        <Modal shown={props.shown} onHide={props.onHide} centered={currentBreakpoint() !== "desktop"}>
            <Modal.Header>Choose your Language</Modal.Header>
            <Modal.Body>
                <ListSelection>
                    <ListSelection.Item selected={language === "english"} onSelect={() => dispatch(setLanguage("english"))}>
                        English
                    </ListSelection.Item>
                    <ListSelection.Item selected={language === "german"} onSelect={() => dispatch(setLanguage("german"))}>
                        Deutsch
                    </ListSelection.Item>
                </ListSelection>
            </Modal.Body>
        </Modal>
    )
}