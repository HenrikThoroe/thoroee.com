import React, { useEffect, useRef, useState } from "react"
import Typewriter from "../../components/Typewriter"
import Container from "../../components/Container"
import "./index.scss"
import Card from "../../components/Card"
import Button from "../../components/Button"
import Icon from "../../components/Icon"
import useCurrentWitdh from "../../utils/hooks/useCurrentWidth"
import { useSelector } from "react-redux"
import RootState from "../../redux/state"
import selectLanguage from "../../redux/selectors/selectLanguage"
import Translation from "../../components/Translation"
import translationKeys from "../../localisation/keys"
import Canvas from "../../canvas"
import Game from "../../canvas/Game"
import CV from "../../canvas/CV"
import CVEvent from "../../redux/state/CVEvent"
import Modal from "../../components/Modal"
import VStack from "../../components/Stacks/VStack"
import HStack from "../../components/Stacks/HStack"
import selectCV from "../../redux/selectors/selectCV"
import EventDescription from "../Modals/EventDescription"
import useCurrentBreakpoint from "../../utils/hooks/useCurrentBreakpoint"
import StatusIndicator from "../../components/StatusIndicator"
import FluidBox from "../../components/FluidBox"
import Header from "../../components/Modal/Header"
import remToPx from "../../utils/remToPx"
import Timeline from "../../components/Timeline"
import Headline from "../../components/Headline"

function SampleCard() {
    const enableToggle = () => width < remToPx(55)
    const width = useCurrentWitdh()
    const [open, setOpen] = useState(enableToggle())

    useEffect(() => {
        setOpen(!enableToggle())
    }, [width])

    return (
        <Card className="projectCard" expanded={open} enableToggle={enableToggle()}>
            <Card.Header>
                <HStack>
                    <VStack>
                        <Card.Title>Castle</Card.Title>
                        <Card.Subtitle>macOS Password Manager</Card.Subtitle>
                    </VStack>
                    <Card.ToggleButton onClick={() => setOpen(!open)}/>
                </HStack>
            </Card.Header>
            <Card.Body>
                <Card.Section>
                    <VStack spacing="1rem">
                        <StatusIndicator status="active">In Active Development</StatusIndicator>
                        <span>
                            Castle is a not cloud-based password manager for macOS. It's purpose is simplicity and security. 
                            The great benefit of cloud-based password managers is their ability to share passwords across devices.
                            Castle does not lack this feature! You can share your passwords simple over your local Wi-Fi.
                            Of course Castle provides many more features like automatic backups and multi-user support. Check it out!
                        </span>
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

function SampleEvent() {
    return (
        <Timeline.Event>
            <Timeline.DateRange>2013 - 2014</Timeline.DateRange>
            <Timeline.Title>Lorem Ipsum</Timeline.Title>
            <Timeline.Subtitle>Lorem ipsum dolor sit amet</Timeline.Subtitle>
            <Timeline.Body>
                My name is Henrik Thorøe. I am a young but, as far as I can say, 
                experienced student from beautiful northern Germany. I enjoy learning 
                new stuff all the day, which is why I am so entusiastic about developing. 
                Today I try to work with as much languages and technologies as possible to 
                gather a wide knowledge base. I do not write code for the sake of writing 
                code. I write code because I want to express my mind and create stunning stuff.
            </Timeline.Body>
        </Timeline.Event>
    )
}

export default function Home() {
    const language = useSelector(selectLanguage)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [presentedEvent, setPresentedEvent] = useState<CVEvent | null>(null)
    const cvEvents = useSelector(selectCV)
    const [shownCard, setShownCard] = useState(-1)

    useEffect(() => {
        const box = document.querySelector<HTMLDivElement>(".scrollBox")
        const cards = document.querySelectorAll<HTMLDivElement>(".scrollBox .card")

        if (box) {
            const scrollListener = (e: Event) => {
                const scrollPercentage = box.scrollLeft / (box.scrollWidth - box.clientWidth)
                let card = Math.floor(6 * scrollPercentage)

                if (card >= 5) card = 5
                if (card <= 0) card = 0

                for (let i = 0; i < 6; ++i) {
                    if (i === card || (card > 5)) {
                        cards[card].classList.add("shown")
                    } else {
                        cards[i].classList.remove("shown")
                    }
                }
            }

            box.addEventListener("scroll", scrollListener)
            cards[0].classList.add("shown")

            return () => {
                box.removeEventListener("scroll", scrollListener)
            }
        }
    }, [])

    useEffect(() => {
        if (canvasRef.current) {
            new CV(canvasRef.current, cvEvents, event => {
                setPresentedEvent(event)
            })
        }
    }, [canvasRef])

    return (
        <Container className="home">
            <Container padding="1" className="helloworld">
                <Typewriter>
                    Hello, World! \n
                    My name is Henrik Thorøe. I am a young but, as far as I can say, experienced student from beautiful northern Germany.
                    I enjoy learning new stuff all the day, which is why I am so entusiastic about developing.
                    Today I try to work with as much languages and technologies as possible to gather a wide knowledge base.
                    I do not write code for the sake of writing code. I write code because I want to express my mind and create stunning stuff.
                </Typewriter>
            </Container>
            <FluidBox type="Wave" fill="var(--background-secondary)" className="projectBackground">
                <Container className="project">
                    <Headline spacing="2rem" type="stroke-left" size="xl" component="h2">My Work</Headline>
                    <Container className="projectCards">
                        <SampleCard />
                        <SampleCard />
                        <SampleCard />
                        <SampleCard />
                        <SampleCard />
                        <SampleCard />
                    </Container>
                </Container>
                {/* <Container className="gameContainer" padding="1">
                    <Card style={{width: "100%"}}>
                        <Card.Title>Curriculum Vitae</Card.Title>
                        <Card.Section>
                            <canvas ref={canvasRef} />
                        </Card.Section>
                    </Card>
                </Container> */}
            </FluidBox>
            <Container padding="3">
                    <Headline spacing={["2rem", "0px", "5rem", "0px"]} type="centered-light" size="xl" component="h2">
                        Curriculum Vitae
                    </Headline>
                    <Timeline>
                        <SampleEvent />
                        <SampleEvent />
                        <SampleEvent />
                        <SampleEvent />
                        <SampleEvent />
                        <SampleEvent />
                        <SampleEvent />
                        <SampleEvent />
                        <SampleEvent />
                    </Timeline>
                </Container>
            { presentedEvent ? <EventDescription shown onHide={() => setPresentedEvent(null)} event={presentedEvent!} /> : undefined }
        </Container>
    )
}