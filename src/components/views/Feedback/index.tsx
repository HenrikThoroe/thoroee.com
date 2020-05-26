import React, { useState, useRef } from "react";
import Container from "../../basic/Container";
import TextField from "../../basic/TextField";
import Card from "../../basic/Card";
import "./index.scss"
import VStack from "../../basic/Stacks/VStack";
import HStack from "../../basic/Stacks/HStack";
import Button from "../../basic/Button";
import Icon from "../../basic/Icon";
import { Link } from "react-router-dom";
import Captcha from "../Modals/Captcha";

export default function Feedback() {
    const [showCaptcha, setShowCaptcha] = useState(false)
    const [subject, setSubject] = useState("")
    const [sender, setSender] = useState("")
    const [message, setMessage] = useState("")

    const fetchContent = () => ({ subject, sender, message })
    const filled = () => subject.length > 0 && sender.length > 0 && message.length > 0

    const clearForm = () => {
        setSubject("")
        setSender("")
        setMessage("")
    }

    return (
        <Container>
            <HStack alignment="center" verticalAlignment="center" className="fillContentHeight">
                <Card>
                    <Card.Title>
                        Say Hello
                    </Card.Title>
                    <Card.Section className="inputGroup">
                        <VStack spacing="3rem">
                            <VStack spacing="1rem">
                                <TextField content={subject} onUpdate={setSubject} inputStyle="default" label="Subject" inline flat required />
                                <TextField content={sender} onUpdate={setSender} inputStyle="email" label="Your E-Mail" inline flat required />
                                <TextField content={message} onUpdate={setMessage} inputStyle="default" placeholder="Message" inline flat required multiline />
                            </VStack>
                            <HStack alignment="spaceBetween" spacing="1rem" verticalAlignment="center">
                                <div className="terms">
                                    <span>By submitting I agree to the </span>
                                    <Link className="inlineLink" to="/">Terms and Conditions</Link>
                                </div>
                                <Button disabled={!filled()} label="submit" icon={<Icon name="sendmail"/>} onClick={() => setShowCaptcha(true)} submit />
                            </HStack>
                        </VStack>
                    </Card.Section>
                </Card>
            </HStack>
            <Captcha form={fetchContent()} shown={showCaptcha} onHide={() => setShowCaptcha(false)} onSubmitted={clearForm} />
        </Container>
    )
}