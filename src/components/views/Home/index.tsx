import React, { useEffect, useRef, useState } from "react"
import Typewriter from "../../basic/Typewriter"
import Container from "../../basic/Container"
import "./index.scss"
import Card from "../../basic/Card"
import Button from "../../basic/Button"
import Icon from "../../basic/Icon"
import useCurrentWitdh from "../../../utils/hooks/useCurrentWidth"
import { useSelector } from "react-redux"
import RootState from "../../../redux/state"
import selectLanguage from "../../../redux/selectors/selectLanguage"
import Translation from "../../basic/Translation"
import translationKeys from "../../../Localisation/keys"
import Canvas from "../../../canvas"
import Game from "../../../canvas/Game"
import CV from "../../../canvas/CV"
import CVEvent from "../../../redux/state/CVEvent"
import Modal from "../../basic/Modal"
import VStack from "../../basic/Stacks/VStack"
import HStack from "../../basic/Stacks/HStack"
import selectCV from "../../../redux/selectors/selectCV"
import EventDescription from "../Modals/EventDescription"

function SampleCard() {
    return (
        <Card width="min(90%, 20rem)">
            <Card.Title>Castle</Card.Title>
            <Card.Subtitle>macOS Password Manager</Card.Subtitle>
            <Card.Section>
                <ul className="keywordsList">
                    <li>Swift</li>
                    <li>SwiftUI</li>
                    <li>iOS</li>
                    {
                        Math.random() > 0.5 ?
                        <li>HTML5</li> :
                        undefined
                    }
                </ul>
            </Card.Section>
            <Card.Section>
                <Button icon={<Icon color="input" name="heart-fill"/>} label="Buy" style="primary" size="large" />
                <Button icon={<Icon color="input" name="github"/>} label="GitHub" style="primary" size="large" />
                <Button icon={<Icon color="input" name="info-circle"/>} label="Learn More" style="primary" size="large" />
            </Card.Section>
        </Card>
    )
}

export default function Home() {
    const language = useSelector(selectLanguage)
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const [presentedEvent, setPresentedEvent] = useState<CVEvent | null>(null)
    const cvEvents = useSelector(selectCV)

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
            <Container className="project">
                <h2 className="projectHeading">My Work</h2>
                <Container className="projectCards scrollBox">
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                </Container>
            </Container>
            <Container className="gameContainer">
                <canvas ref={canvasRef} />
            </Container>
            { presentedEvent ? <EventDescription shown onHide={() => setPresentedEvent(null)} event={presentedEvent!} /> : undefined }
        </Container>
    )
}