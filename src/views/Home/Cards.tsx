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
import If from "../../components/If";

type ProjectState = "InDevelopment" | "Abandoned" | "Maintained"

function ProjectCard(props: { name: ReactNode, short: ReactNode, state: ProjectState, body: ReactNode, buy?: string, github?: string, info?: string, download?: string }) {
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

                    <If data={props.buy}>
                        <Button icon={<Icon color="input" name="heart-fill"/>} link={props.buy} label="Buy" style="primary" size="large" />
                    </If>

                    <If data={props.github}>
                        <Button icon={<Icon color="input" name="github"/>} link={props.github} label="GitHub" style="primary" size="large" />
                    </If>

                    <If data={props.download}>
                        <Button icon={<Icon color="input" name="download"/>} label="Download" style="primary" size="large" />
                    </If>

                    <If data={props.info}>
                        <Button icon={<Icon color="input" name="info-circle"/>} link={props.info} label="Learn More" style="primary" size="large" />
                    </If>
                    
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
                buy=""
                info=""
                body={`Castle is a not cloud-based password manager for macOS. It's purpose is simplicity and security. 
                The great benefit of cloud-based password managers is their ability to share passwords across devices.
                Castle does not lack this feature! You can share your passwords simple over your local Wi-Fi.
                Of course Castle provides many more features like automatic backups and multi-user support. Check it out!`}
            /> 

            <ProjectCard 
                name={"SWC 19/20"}
                short={"Game AI"}
                state={"Abandoned"}
                github=""
                info=""
                body={`This project is a game AI which competes with other AIs to win the "Software Challenge" driven by 
                CAU Kiel. My client is written in TypeScript and is using most of the common algorythms of game theory. 
                You are right, using TypeScript was a bad idea performancewise (;`}
            /> 
            
            <ProjectCard 
                name={"thorøe.com"}
                short={"Portfolio Website"}
                state={"InDevelopment"}
                github=""
                body={`You are currently viewing it. This site is written using React, SCSS and TypeScript. The site is not only 
                my online representation but also a big playground. I mainly developed it to practice my React skills.`}
            />

            <ProjectCard 
                name={"Quick Note"}
                short={"Menu Bar Note Taking App"}
                state={"Abandoned"}
                download=""
                body={`A dead simple note-taking app which lives in the macOS menu bar. It's one of my early projects I wrote to
                learn Swift. But funnily enough I'm still using it very often. Maybe you want to download the app plus source code.`}
            />

            <ProjectCard 
                name={"Quick Color"}
                short={"Menu Bar Color Picker"}
                state={"Abandoned"}
                download=""
                body={`It the sister of 'Quick Note'. Just another simple menu bar color picker. Very usefull when you want 
                to use your macOS color pallete in VSCode.`}
            />

            <ProjectCard 
                name={"Escape Room"}
                short={"Internship Project"}
                state={"Abandoned"}
                info=""
                body={`Unfourtnatly I'm not sure if I am allowed to show pictures or even the code of 'Escape Room'. 
                Because I don't want to be sued I'm not doing it. The app was my task when I had my internship at Knowit. 
                It's the barebone of a SwiftUI application for internal use at Knowit.`}
            />

            <ProjectCard 
                name={"Many More"}
                short={"Everything Else not Worth Mentioning or Unfinished"}
                state={"InDevelopment"}
                body={`There are so many more apps I wrote to learn different languages. Mainly Swift and TypeScript but also 
                some Java and C++ stuff.`}
            /> 
        </Container>
    )
}