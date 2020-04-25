import React from "react"
import ContentPageComponent from "../basic/ContentPageComponent"
import LargeTextComponent from "../basic/LargeTextComponent"
import GridComponent from "../basic/GridComponent"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import "../style/card.scss"

export default function Home() {
    return (
        <ContentPageComponent>
            <LargeTextComponent>Hello, World!</LargeTextComponent>
            <GridComponent title="Projects">
                <Card style={{ minWidth: "15rem", maxWidth: "min(20rem, 100%)" }}>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#info">
                            <Nav.Item>
                                <Nav.Link href="#info">Info</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="#tech">Tech</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>Castle</Card.Title>
                        <Card.Subtitle>Password Manager for macOS</Card.Subtitle>
                        <Card.Text>
                            Castle was created to combine the best of two worlds.
                            I wanted a secure and private password manager but with a great UX.
                            Most offline (-> private) password managers ship without any possibility to 
                            access your passwords on all your devices.
                            That's why Castle is capable to share the stored passwords over the LAN.
                            This is the best compromise between UX and privacy.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button>Learn More</Button>
                        <Button>Buy</Button>
                    </Card.Footer>
                </Card>
            </GridComponent>
        </ContentPageComponent>
    )
}