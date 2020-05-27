import React, { useState, useEffect, ReactNode } from "react";
import Container from "../../components/Container";
import remToPx from "../../utils/remToPx";
import useCurrentWitdh from "../../utils/hooks/useCurrentWidth";
import Card from "../../components/Card";
import HStack from "../../components/Stacks/HStack";
import VStack from "../../components/Stacks/VStack";
import StatusIndicator from "../../components/StatusIndicator";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

type ProjectState = "InDevelopment" | "Abandoned" | "Maintained"

function ProjectCard(props: { name: ReactNode, short: ReactNode, state: ProjectState, body: ReactNode }) {
    const enableToggle = () => width < remToPx(55)
    const width = useCurrentWitdh()
    const [open, setOpen] = useState(enableToggle())

    useEffect(() => {
        setOpen(!enableToggle())
    }, [width])

    const State = () => {
        switch (props.state) {
            case "InDevelopment":
                return <StatusIndicator status="active">In Active Development</StatusIndicator>
            case "Maintained":
                return <StatusIndicator status="maintained">Maintained</StatusIndicator>
            case "Abandoned":
                return <StatusIndicator status="abandoned">Abandoned</StatusIndicator>
        }
    }

    return (
        <Card className="projectCard" expanded={open} enableToggle={enableToggle()}>
            <Card.Header>
                <HStack>
                    <VStack>
                        <Card.Title>{ props.name }</Card.Title>
                        <Card.Subtitle>{ props.short }</Card.Subtitle>
                    </VStack>
                    <Card.ToggleButton onClick={() => setOpen(!open)}/>
                </HStack>
            </Card.Header>
            <Card.Body>
                <Card.Section>
                    <VStack spacing="1rem">
                        <State />
                        { props.body }
                    </VStack>
                </Card.Section>
                <Card.Section>
                    <Button icon={<Icon color="input" name="heart-fill"/>} label="Buy" style="primary" size="large" />
                    <Button icon={<Icon color="input" name="github"/>} label="GitHub" style="primary" size="large" />
                    <Button icon={<Icon color="input" name="info-circle"/>} label="Learn More" style="primary" size="large" />
                </Card.Section>
            </Card.Body>
        </Card>
    )
}

export default function Cards() {
    return (
        <Container className="projectCards">
            <ProjectCard 
                name={"Castle"}
                short={"macOS Password Manager"}
                state={"Maintained"}
                body={`Castle is a not cloud-based password manager for macOS. It's purpose is simplicity and security. 
                The great benefit of cloud-based password managers is their ability to share passwords across devices.
                Castle does not lack this feature! You can share your passwords simple over your local Wi-Fi.
                Of course Castle provides many more features like automatic backups and multi-user support. Check it out!`}
            /> 

            <ProjectCard 
                name={"SWC"}
                short={"Game AI"}
                state={"Abandoned"}
                body={``}
            /> 
            
            <ProjectCard 
                name={"thorøe.com"}
                short={"Portfolio Website"}
                state={"InDevelopment"}
                body={``}
            /> 
        </Container>
    )
}