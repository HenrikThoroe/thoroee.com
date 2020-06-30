import Modal from "../../components/Modal";
import React, { useState, useRef, useEffect } from "react";
import Icon from "../../components/Icon";
import "./Captcha.scss"
import HStack from "../../components/Stacks/HStack";
import VStack from "../../components/Stacks/VStack";
import TextContent from "../../components/TextContent"
import classNames from "classnames";
import Feedback from "../../model/Feedback";
import sleep from "../../utils/sleep";
import Lottie from "react-lottie"
import successAnimation from "../../assets/animations/success.json"
import spinnerAnimation from "../../assets/animations/spinner.json"
import If from "../../components/If";
import Button from "../../components/Button";
import Translation from "../../components/Translation";

export interface Props {
    shown?: boolean
    onHide?: () => void
    form: Feedback
    onSubmitted: () => void
}

export default function Captcha(props: Props) {
    const [state, setState] = useState<"input" | "fail" | "success">("input")
    const [answer, setAnswer] = useState("")
    const [invalid, setInvalid] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)
    const fakeRef = useRef<HTMLInputElement>(null)
    const fakeRef2 = useRef<HTMLInputElement>(null)

    useEffect(() => {
        reset()
    }, [props.shown])

    const createCaptcha = () => {
        const f1 = fakeRef.current?.value || ""
        const f2 = fakeRef2.current?.value || ""
        return `${f1}${answer}${f2}`
    }

    const checkForInvalidity = () => {
        let invalid = false

        if (fakeRef.current) {
            if (fakeRef.current.value.length > 0) {
                invalid = true
            }
        } 

        if (fakeRef2.current) {
            if (fakeRef2.current.value.length > 0) {
                invalid = true
            }
        } 

        setInvalid(invalid)
    }

    const handleConfirm = () => {
        if (createCaptcha() === "6" && !invalid) {
            setState("success")
            send()
        } else {
            setState("fail")
        }
    }

    const send = () => {
        const captcha = createCaptcha()
        const data = new URLSearchParams()

        data.append("sender", props.form.sender)
        data.append("message", props.form.message)
        data.append("subject", props.form.subject)
        data.append("captcha", captcha.toString())

        fetch("/api/contact.php", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: data
        })
        .then(res => {
            if (!res.ok) {
                console.error("Failed to submit the form.", res.statusText)
            }
        })
        .catch(e => {
            console.error(e.message)
        })
    }

    const reset = () => {
        const clear = (ref: React.RefObject<HTMLInputElement>) => {
            if (ref?.current) {
                ref.current.value = ""
            }
        }

        setState("input")
        setAnswer("")
        setInvalid(false)
        clear(inputRef)
        clear(fakeRef)
        clear(fakeRef2)
    }

    const handleHide = () => {
        reset()
        props.onHide?.call(null)
    }

    return (
        <Modal style={{maxWidth: "min(90vw, 30rem)"}} shown={props.shown} onHide={handleHide} centered>
            <Modal.Header>
                <Translation select={lang => lang.captcha.title} />
            </Modal.Header>
            <Modal.Body>
                <If condition={state === "input"}>
                    <VStack spacing="1rem">
                        <TextContent>
                            <Translation select={lang => lang.captcha.input.message} />
                        </TextContent>
                        <HStack alignment="center" spacing="2rem">
                            <input 
                                type="text" 
                                className="captcha--rInput" 
                                ref={fakeRef}
                                onInput={checkForInvalidity}
                            />
                            <input 
                                type="text" 
                                ref={inputRef} 
                                className="captcha--cInput" 
                                onInput={() => setAnswer(inputRef.current?.value || answer)} 
                            />
                            <input 
                                type="text" 
                                className="captcha--rInput" 
                                ref={fakeRef2}
                                onInput={checkForInvalidity}
                            />
                        </HStack>
                        <HStack alignment="end">
                            <Button 
                                label={<Translation select={lang => lang.captcha.input.button} />} 
                                onClick={handleConfirm} 
                                fitContent 
                            />
                        </HStack>
                    </VStack>
                </If>
                <If condition={state === "fail"}>
                    <VStack spacing="1rem">
                        <TextContent>
                            <Translation select={lang => lang.captcha.fail.message} />
                        </TextContent>
                        <HStack alignment="end">
                            <Button 
                                label={<Translation select={lang => lang.captcha.fail.button} />} 
                                onClick={reset} 
                                fitContent
                            />
                        </HStack>
                    </VStack>
                </If>
                <If condition={state === "success"}>
                    <VStack spacing="1rem">
                        <TextContent>
                            <Translation select={lang => lang.captcha.success.message} />
                        </TextContent>
                        <HStack alignment="end">
                            <Button 
                                label={<Translation select={lang => lang.captcha.success.button} />} 
                                onClick={handleHide} 
                                fitContent 
                            />
                        </HStack>
                    </VStack>
                </If>
            </Modal.Body>
        </Modal>
    )
}

