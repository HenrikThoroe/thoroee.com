import React from "react";
import Container from "../../basic/Container";
import TextField from "../../basic/TextField";
import Card from "../../basic/Card";
import "./index.scss"

export default function Feedback() {
    return (
        // <Container padding="3" className="form">
        //     <TextField style="default" label="Subject" inline flat />
        //     <TextField style="default" label="Your E-Mail" inline flat />
        //     <TextField style="default" label="Subject" inline flat />
        // </Container>
        <Container padding="3">
            <Card>
                <Card.Title>
                    Say Hello
                </Card.Title>
                <Card.Section className="inputGroup">
                    <TextField inputStyle="default" label="Subject" inline flat required />
                    <TextField inputStyle="email" label="Your E-Mail" inline flat required />
                    <TextField inputStyle="default" placeholder="Your Message goes Here" inline flat required multiline />
                </Card.Section>
            </Card>
        </Container>
    )
}