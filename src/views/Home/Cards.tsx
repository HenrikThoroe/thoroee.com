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
import Translation from "../../components/Translation";
import redirect from "../../utils/redirect";

type ProjectState = "InDevelopment" | "Abandoned" | "Maintained"

function ProjectCard(props: { name: ReactNode, short: ReactNode, state: ProjectState, stateText: ReactNode, body: ReactNode, buy?: string, github?: string, info?: string, download?: string }) {
    const enableToggle = () => width < remToPx(55)
    const width = useCurrentWitdh()
    const [open, setOpen] = useState(enableToggle())

    useEffect(() => {
        setOpen(!enableToggle())
    }, [width])

    const State = () => {
        switch (props.state) {
            case "InDevelopment":
                return <StatusIndicator status="active">{ props.stateText }</StatusIndicator>
            case "Maintained":
                return <StatusIndicator status="maintained">{ props.stateText }</StatusIndicator>
            case "Abandoned":
                return <StatusIndicator status="abandoned">{ props.stateText }</StatusIndicator>
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

                    <If condition={props.buy}>
                        <Button 
                            icon={<Icon color="input" name="heart-fill"/>} 
                            onClick={() => redirect(props.github!)}
                            label={<Translation select={lang => lang.general.buy} />} 
                            style="primary" 
                            size="large" 
                        />
                    </If>

                    <If condition={props.github}>
                        <Button 
                            icon={<Icon color="input" name="github"/>} 
                            onClick={() => redirect(props.github!)}
                            label="GitHub"
                            style="primary" 
                            size="large" 
                        />
                    </If>

                    <If condition={props.download}>
                        <Button 
                            icon={<Icon color="input" name="download"/>} 
                            label={<Translation select={lang => lang.general.download} />} 
                            style="primary" 
                            size="large" 
                            link={`/download/${props.download}`}
                        />
                    </If>

                    <If condition={props.info}>
                        <Button 
                            icon={<Icon color="input" name="info-circle"/>} 
                            link={props.info} 
                            label={<Translation select={lang => lang.general.learnMore} />}  
                            style="primary" 
                            size="large" 
                        />
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
                name={<Translation select={lang => lang.home.projects.cards.castle.title}/>}
                short={<Translation select={lang => lang.home.projects.cards.castle.subtitle}/>}
                stateText={<Translation select={lang => lang.home.projects.cards.castle.status}/>}
                body={<Translation select={lang => lang.home.projects.cards.castle.body}/>}
                state="Maintained"
                buy="https://apps.apple.com/de/app/castle-password-manager/id1474114435?l=en&mt=12"
                info="/products/castle"
            /> 

            <ProjectCard 
                name={<Translation select={lang => lang.home.projects.cards.website.title}/>}
                short={<Translation select={lang => lang.home.projects.cards.website.subtitle}/>}
                stateText={<Translation select={lang => lang.home.projects.cards.website.status}/>}
                body={<Translation select={lang => lang.home.projects.cards.website.body}/>}
                state="InDevelopment"
                github="https://github.com/HenrikThoroe/thoroee.com"
            /> 

            <ProjectCard 
                name={<Translation select={lang => lang.home.projects.cards.swc1.title}/>}
                short={<Translation select={lang => lang.home.projects.cards.swc1.subtitle}/>}
                stateText={<Translation select={lang => lang.home.projects.cards.swc1.status}/>}
                body={<Translation select={lang => lang.home.projects.cards.swc1.body}/>}
                state="Abandoned"
                github="https://github.com/HenrikThoroe/swc-common-client"
                info="https://www.software-challenge.de"
            /> 

            <ProjectCard 
                name={<Translation select={lang => lang.home.projects.cards.quickNote.title}/>}
                short={<Translation select={lang => lang.home.projects.cards.quickNote.subtitle}/>}
                stateText={<Translation select={lang => lang.home.projects.cards.quickNote.status}/>}
                body={<Translation select={lang => lang.home.projects.cards.quickNote.body}/>}
                state="Abandoned"
                download="quickNote"
            /> 

            <ProjectCard 
                name={<Translation select={lang => lang.home.projects.cards.quickColor.title}/>}
                short={<Translation select={lang => lang.home.projects.cards.quickColor.subtitle}/>}
                stateText={<Translation select={lang => lang.home.projects.cards.quickColor.status}/>}
                body={<Translation select={lang => lang.home.projects.cards.quickColor.body}/>}
                state="Abandoned"
                download="quickColor"
            /> 

            <ProjectCard 
                name={<Translation select={lang => lang.home.projects.cards.escapeRoom.title}/>}
                short={<Translation select={lang => lang.home.projects.cards.escapeRoom.subtitle}/>}
                stateText={<Translation select={lang => lang.home.projects.cards.escapeRoom.status}/>}
                body={<Translation select={lang => lang.home.projects.cards.escapeRoom.body}/>}
                state="Abandoned"
                info="https://www.knowit.eu"
            /> 

            <ProjectCard 
                name={<Translation select={lang => lang.home.projects.cards.more.title}/>}
                short={<Translation select={lang => lang.home.projects.cards.more.subtitle}/>}
                stateText={<Translation select={lang => lang.home.projects.cards.more.status}/>}
                body={<Translation select={lang => lang.home.projects.cards.more.body}/>}
                state="InDevelopment"
            /> 
        </Container>
    )
}