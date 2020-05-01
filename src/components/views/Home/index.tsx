import React from "react"
import Typewriter from "../../basic/Typewriter"
import Container from "../../basic/Container"
import "./index.scss"
import Card from "../../basic/Card"
import Button from "../../basic/Button"
import Icon from "../../basic/Icon"

function SampleCard() {
    return (
        <Card width="min(90%, 20rem)">
            <Card.Title>Project</Card.Title>
            <Card.Subtitle>A Very Fancy Project</Card.Subtitle>
            <Card.Section>
                Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                deserunt mollit anim id est laborum.
            </Card.Section>
            <Card.Section>
                <Button icon={<Icon color="input" name="sun"/>} label="Buy" style="primary" />
                <Button label="GitHub" style="primary" />
                <Button label="Learn More" style="primary" />
            </Card.Section>
        </Card>
    )
}

export default function Home() {
    return (
        <Container>
            <Container padding="1" className="helloworld">
                <Typewriter>
                    Hello, World! \n
                    Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </Typewriter>
            </Container>
            <Container className="project">
                <h2 className="projectHeading">Projects</h2>
                <Container className="projectCards">
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                </Container>
            </Container>
        </Container>
    )
}