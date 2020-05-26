import Modal from "../../basic/Modal";
import React, { useState } from "react";
import Icon from "../../basic/Icon";
import "./Captcha.scss"
import HStack from "../../basic/Stacks/HStack";
import VStack from "../../basic/Stacks/VStack";
import Text from "../../basic/Text"
import classNames from "classnames";
import Feedback from "../../../model/Feedback";
import sleep from "../../../utils/sleep";
import Lottie from "react-lottie"
import successAnimation from "../../../assets/animations/success.json"
import spinnerAnimation from "../../../assets/animations/spinner.json"

export interface Props {
    shown?: boolean
    onHide?: () => void
    form: Feedback
    onSubmitted: () => void
}

export default function Captcha(props: Props) {
    const [clicked, setClicked] = useState(false)
    const [state, setState] = useState<"waiting" | "sending" | "done">("waiting")

    const handleClick = async () => {
        setClicked(true)
        await sleep(1000)
        setState("sending")
        await sleep(10000)
        setState("done")
    }

    const handleHide = () => {
        setState("waiting")
        setClicked(false)
        props.onSubmitted()
        props.onHide?.call(null)
    }

    const StateText = (props: {state: typeof state}) => {
        switch (props.state) {
            case "waiting":
                return <Text className="description">Please click the paperplane to finally submit your feedback.</Text>
            case "sending":
                return <Text className="description">Your feedback is on the way. Please wait...</Text>
            case "done":
                return <Text className="description">Your feedback has been sent. Thank you!</Text>
        }
    }

    return (
        <Modal shown={props.shown} onHide={handleHide} centered>
            <Modal.Header>Launch your Feedback</Modal.Header>
            <Modal.Body>
                <VStack spacing="1rem">
                    <HStack alignment="center" verticalAlignment="center">
                        {
                            (() => {
                                switch (state) {
                                    case "waiting":
                                        return <Icon onClick={handleClick} className={classNames("icon", clicked ? "sent" : undefined)} name="sendmail" />
                                    case "sending":
                                        return <Lottie options={{ animationData: spinnerAnimation, loop: true, autoplay: true}} width={100} height={100} />
                                    case "done":
                                        return <Lottie options={{ animationData: successAnimation, loop: false, autoplay: true}} width={100} height={100} />
                                }
                            })()
                        }
                    </HStack>
                    <HStack alignment="center">
                        <StateText state={state} />
                    </HStack>
                </VStack>
            </Modal.Body>
        </Modal>
    )
}

