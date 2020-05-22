import React from "react";
import Container from "../../basic/Container";
import TextField from "../../basic/TextField";
import Card from "../../basic/Card";
import "./index.scss"
import VStack from "../../basic/Stacks/VStack";
import HStack from "../../basic/Stacks/HStack";
import Button from "../../basic/Button";
import Icon from "../../basic/Icon";
import { Link } from "react-router-dom";

export default function Feedback() {
    return (
        // <Container padding="3" className="form">
        //     <TextField style="default" label="Subject" inline flat />
        //     <TextField style="default" label="Your E-Mail" inline flat />
        //     <TextField style="default" label="Subject" inline flat />
        // </Container>
        <Container>
            <HStack alignment="center" verticalAlignment="center" className="fillContentHeight">
                <Card>
                    <Card.Title>
                        Say Hello
                    </Card.Title>
                    <Card.Section className="inputGroup">
                        <VStack spacing="3rem">
                            <VStack spacing="1rem">
                                <TextField inputStyle="default" label="Subject" inline flat required />
                                <TextField inputStyle="email" label="Your E-Mail" inline flat required />
                                <TextField inputStyle="default" placeholder="Message" inline flat required multiline />
                            </VStack>
                            <HStack alignment="spaceBetween" spacing="1rem" verticalAlignment="center">
                                <div style={{fontSize: ".8rem"}}>
                                    <span>By submitting I agree to the </span>
                                    <Link className="inlineLink" to="/">Terms and Conditions</Link>
                                </div>
                                <Button label="submit" icon={<Icon name="sendmail"/>} submit />
                            </HStack>
                        </VStack>
                    </Card.Section>
                </Card>
            </HStack>
        </Container>
    )
}