import CVEvent from "../../redux/state/CVEvent";
import Modal from "../../components/Modal";
import React from "react";
import VStack from "../../components/Stacks/VStack";
import HStack from "../../components/Stacks/HStack";
import { Link } from "react-router-dom";
import formatDate from "../../utils/formatDate";

export interface Props {
    event: CVEvent
    shown: boolean
    onHide: () => void
}

function dateDescription(date: Date) {
    const today = new Date()

    if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        return "Now"
    } else {
        return formatDate(date)
    }
}

function Footer(props: { event: CVEvent }) {
    return (
        <VStack spacing=".8rem">
            <strong style={{borderTop: "1px solid var(--text-primary)", paddingTop: ".5rem"}}>Further Links</strong>
            <VStack spacing=".2rem">
                { props.event.resources.map(resource => <Link className="inlineLink" to="" onClick={() => window.location.href = resource}>{ resource }</Link>) }
            </VStack>
        </VStack>
    )
}

export default function EventDescription(props: Props) {
    return (
        <Modal centered shown={props.shown} onHide={props.onHide} style={{maxWidth: "30rem"}}>
            <Modal.Header>{ props.event.name }</Modal.Header>
            <Modal.Body>
                <VStack spacing="2rem">
                    <VStack spacing=".8rem">
                        <HStack spacing="10px" minItemWidth="3rem">
                            <strong>From:</strong>
                            <span>{ dateDescription(props.event.date[0]) }</span>
                        </HStack>
                        <HStack spacing="10px" minItemWidth="3rem">
                            <strong>To:</strong>
                            <span>{ dateDescription(props.event.date[1]) }</span>
                        </HStack>
                    </VStack>
                    <span> { props.event.description } </span>
                    { props.event.resources.length > 0 ? <Footer event={props.event} /> : undefined }
                </VStack>
            </Modal.Body>
        </Modal>
    )
}