import { useState, useEffect } from "react"
import Modal from "../../basic/Modal"
import React from "react"

export default function LanguageSelection() {
    const [show, setShow] = useState(false)

    // useEffect(() => {
    //     setTimeout(() => setShow(true), 2000)
    // }, [])

    return (
        <Modal>
            <Modal.Header>Hello</Modal.Header>
            <Modal.Body>World</Modal.Body>
        </Modal>
        // <Modal show={show} onHide={() => setShow(false)} animation={true}>
        //     <Modal.Header closeButton>
        //         <Modal.Title>Choose your Language</Modal.Title>
        //     </Modal.Header>
        //     <Modal.Body>
        //         Hello it's me
        //     </Modal.Body>
        // </Modal>
    )
}