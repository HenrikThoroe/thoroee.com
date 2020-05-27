import React from "react"
import Typewriter from "../../components/Typewriter"
import Container from "../../components/Container"
import "./index.scss"
import FluidBox from "../../components/FluidBox"
import Timeline from "../../components/Timeline"
import Headline from "../../components/Headline"
import Cards from "./Cards"

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
                    <Cards />
                </Container>
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
        </Container>
    )
}