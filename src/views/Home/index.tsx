import React from "react"
import Typewriter from "../../components/Typewriter"
import Container from "../../components/Container"
import "./index.scss"
import FluidBox from "../../components/FluidBox"
import Timeline from "../../components/Timeline"
import Headline from "../../components/Headline"
import Cards from "./Cards"
import Icon from "../../components/Icon"
import AboutMeComic from "../AboutMeComic"
import TextContent from "../../components/Headline"
import Button from "../../components/Button"
import VStack from "../../components/Stacks/VStack"
import { Link } from "react-router-dom"
import Translation from "../../components/Translation"

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
                <VStack spacing="3rem">
                    <Headline type="centered" size="3rem">
                        <Translation select={lang => lang.home.welcome.hello}/>
                    </Headline>
                    <TextContent size="1.5rem">
                        <Translation select={lang => lang.home.welcome.hero}/>
                    </TextContent>
                    <Button link="/comic" label={<Translation select={lang => lang.home.welcome.button}/>} style="comic" />
                </VStack>
            </Container>
            <FluidBox type="Wave" fill="var(--background-secondary)" className="projectBackground">
                <Container className="project">
                    <Headline spacing="2rem" type="stroke-left" size="xl" component="h2">
                        <Translation select={lang => lang.home.projects.title}/>
                    </Headline>
                    <Cards />
                </Container>
            </FluidBox>
            <Container padding="3">
                    <Headline spacing={["2rem", "0px", "5rem", "0px"]} type="centered-light" size="xl" component="h2">
                        <Translation select={lang => lang.home.cv.title} />
                    </Headline>
                    <Timeline>

                        <Timeline.Event>
                            <Timeline.DateRange>
                                <Translation select={lang => lang.home.cv.events.birth.date} />
                            </Timeline.DateRange>
                            <Timeline.Title>
                                <Translation select={lang => lang.home.cv.events.birth.title} />
                            </Timeline.Title>
                            <Timeline.Subtitle>
                                <Translation select={lang => lang.home.cv.events.birth.subtitle} />
                            </Timeline.Subtitle>
                            <Timeline.Body>
                                <Translation select={lang => lang.home.cv.events.birth.body} />
                            </Timeline.Body>
                        </Timeline.Event>

                        <Timeline.Event>
                            <Timeline.DateRange>
                                <Translation select={lang => lang.home.cv.events.grammarSchool.date} />
                            </Timeline.DateRange>
                            <Timeline.Title>
                                <Translation select={lang => lang.home.cv.events.grammarSchool.title} />
                            </Timeline.Title>
                            <Timeline.Body>
                                <Translation select={lang => lang.home.cv.events.grammarSchool.body} /> 
                            </Timeline.Body>
                        </Timeline.Event>

                        <Timeline.Event>
                            <Timeline.DateRange>
                                <Translation select={lang => lang.home.cv.events.highSchool.date} />
                            </Timeline.DateRange>
                            <Timeline.Title>
                                <Translation select={lang => lang.home.cv.events.highSchool.title} />
                            </Timeline.Title>
                            <Timeline.Subtitle>
                                <Translation select={lang => lang.home.cv.events.highSchool.subtitle} />
                            </Timeline.Subtitle>
                            <Timeline.Body>
                                <Translation select={lang => lang.home.cv.events.highSchool.body} />
                            </Timeline.Body>
                        </Timeline.Event>

                        <Timeline.Event>
                            <Timeline.DateRange>
                                <Translation select={lang => lang.home.cv.events.naymspace.date} />
                            </Timeline.DateRange>
                            <Timeline.Title>
                                <Translation select={lang => lang.home.cv.events.naymspace.title} />
                            </Timeline.Title>
                            <Timeline.Subtitle>
                                <Translation select={lang => lang.home.cv.events.naymspace.subtitle} />
                            </Timeline.Subtitle>
                            <Timeline.Body>
                                <Translation select={lang => lang.home.cv.events.naymspace.body} />
                            </Timeline.Body>
                        </Timeline.Event>

                        <Timeline.Event>
                            <Timeline.DateRange>
                                <Translation select={lang => lang.home.cv.events.knowit.date} />
                            </Timeline.DateRange>
                            <Timeline.Title>
                                <Translation select={lang => lang.home.cv.events.knowit.title} />
                            </Timeline.Title>
                            <Timeline.Subtitle>
                                <Translation select={lang => lang.home.cv.events.knowit.subtitle} />
                            </Timeline.Subtitle>
                            <Timeline.Body>
                                <Translation select={lang => lang.home.cv.events.knowit.body} />
                            </Timeline.Body>
                        </Timeline.Event>

                        <Timeline.Event>
                            <Timeline.DateRange>
                                <Translation select={lang => lang.home.cv.events.abi.date} />
                            </Timeline.DateRange>
                            <Timeline.Title>
                                <Translation select={lang => lang.home.cv.events.abi.title} />
                            </Timeline.Title>
                            <Timeline.Subtitle>
                                <Translation select={lang => lang.home.cv.events.abi.subtitle} />
                            </Timeline.Subtitle>
                            <Timeline.Body>
                                <Translation select={lang => lang.home.cv.events.abi.body} />
                            </Timeline.Body>
                        </Timeline.Event>

                        <Timeline.Event>
                            <Timeline.DateRange>
                                <Translation select={lang => lang.home.cv.events.future.date} />
                            </Timeline.DateRange>
                            <Timeline.Title>
                                <Translation select={lang => lang.home.cv.events.future.title} />
                            </Timeline.Title>
                            <Timeline.Body>
                                <Translation select={lang => lang.home.cv.events.future.body} />
                            </Timeline.Body>
                        </Timeline.Event>
                        
                    </Timeline>
                </Container>
        </Container>
    )
}