import React, { useState, useRef } from "react";
import Container from "../../components/Container";
import TextField from "../../components/TextField";
import Card from "../../components/Card";
import "./index.scss"
import VStack from "../../components/Stacks/VStack";
import HStack from "../../components/Stacks/HStack";
import Button from "../../components/Button";
import Icon from "../../components/Icon";
import { Link } from "react-router-dom";
import Captcha from "../Modals/Captcha";
import Translation from "../../components/Translation";
import translate from "../../localisation/translate";
import { useSelector } from "react-redux";
import selectLanguage from "../../redux/selectors/selectLanguage";

export default function Feedback() {
    const [showCaptcha, setShowCaptcha] = useState(false)
    const [subject, setSubject] = useState("")
    const [sender, setSender] = useState("")
    const [message, setMessage] = useState("")
    const language = useSelector(selectLanguage)

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
                        <Translation select={lang => lang.feedback.title} />
                    </Card.Title>
                    <Card.Section className="inputGroup">
                        <VStack spacing="3rem">
                            <VStack spacing="1rem">
                                <TextField content={subject} onUpdate={setSubject} inputStyle="default" label={<Translation select={lang => lang.feedback.subject} />} inline flat required />
                                <TextField content={sender} onUpdate={setSender} inputStyle="email" label={<Translation select={lang => lang.feedback.email} />} inline flat required />
                                <TextField content={message} onUpdate={setMessage} inputStyle="default" placeholder={translate(language, lang => lang.feedback.message)} inline flat required multiline />
                            </VStack>
                            <HStack alignment="spaceBetween" spacing="1rem" verticalAlignment="center">
                                <div className="terms">
                                    <Translation select={lang => lang.feedback.agree} />
                                    <Link className="inlineLink" to="/dataprotection">
                                        <Translation select={lang => lang.links.terms.name} />
                                    </Link>
                                </div>
                                <Button disabled={!filled()} label={<Translation select={lang => lang.general.submit} />} icon={<Icon name="sendmail"/>} onClick={() => setShowCaptcha(true)} submit />
                            </HStack>
                        </VStack>
                    </Card.Section>
                </Card>
            </HStack>
            <Captcha form={fetchContent()} shown={showCaptcha} onHide={() => setShowCaptcha(false)} onSubmitted={clearForm} />
        </Container>
    )
}