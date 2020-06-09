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
            {/* <Container padding="1" className="helloworld">
                <Typewriter>
                    Hello, World! \n
                    My name is Henrik Thorøe. I am a young but, as far as I can say, experienced student from beautiful northern Germany.
                    I enjoy learning new stuff all the day, which is why I am so entusiastic about developing.
                    Today I try to work with as much languages and technologies as possible to gather a wide knowledge base.
                    I do not write code for the sake of writing code. I write code because I want to express my mind and create stunning stuff.
                </Typewriter>
            </Container> */}
            {/* <AboutMeComic /> */}
            <Container padding="1" className="helloworld">
                <VStack spacing="3rem">
                    <Headline type="centered" size="3rem">Hello, There!</Headline>
                    <TextContent size="1.5rem">
                        You are probably here to learn something about me.
                        If you want to, you can take an interactive journey an learn about my previous life.
                        Or you can scroll down and have a look at my CV and projects.
                    </TextContent>
                    <Button link="/comic" label="Take the Journey" style="comic" />
                </VStack>
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
                        <Timeline.Event>
                            <Timeline.DateRange>January 2003</Timeline.DateRange>
                            <Timeline.Title>Birth</Timeline.Title>
                            <Timeline.Subtitle>Hello, World!</Timeline.Subtitle>
                            <Timeline.Body>
                                Well, I guess it is self explaining.
                                PS: I was born in Germany, where I am still living.
                            </Timeline.Body>
                        </Timeline.Event>
                        <Timeline.Event>
                            <Timeline.DateRange>2009 - 2013</Timeline.DateRange>
                            <Timeline.Title>Grammar School</Timeline.Title>
                            {/* <Timeline.Subtitle>Hello, World!</Timeline.Subtitle> */}
                            <Timeline.Body>
                                From 2009 until 2013 I attended a small school near the village I have been living.  
                            </Timeline.Body>
                        </Timeline.Event>
                        <Timeline.Event>
                            <Timeline.DateRange>2013 - 2021</Timeline.DateRange>
                            <Timeline.Title>High School</Timeline.Title>
                            <Timeline.Subtitle>It's party time!</Timeline.Subtitle>
                            <Timeline.Body>
                                This is what I am stil doing. I am attending the Highschool in Altenhoz. 
                                It's not a very big one but I like it. My main subject is physic, which is also the 
                                subject my exams will be about in spring 2021.
                            </Timeline.Body>
                        </Timeline.Event>
                        <Timeline.Event>
                            <Timeline.DateRange>June 2019</Timeline.DateRange>
                            <Timeline.Title>Internship at Naymspace</Timeline.Title>
                            <Timeline.Subtitle>My inspiration for web development.</Timeline.Subtitle>
                            <Timeline.Body>
                                In June 2019 I had a short but very nice internship at naymspace.
                                I enjoied it and discovered my interest in web development and design.
                                My continous interest in React, TypeScript and all the other web-stuff started 
                                with this internship.
                            </Timeline.Body>
                        </Timeline.Event>
                        <Timeline.Event>
                            <Timeline.DateRange>February 2020</Timeline.DateRange>
                            <Timeline.Title>Internship at Knowit</Timeline.Title>
                            <Timeline.Subtitle>Conding in Norway</Timeline.Subtitle>
                            <Timeline.Body>
                                In February 2020 I had a two week internship at Knowit (wish it would have been more weeks).
                                It was my first contact with a large company and the daily work of developers.
                                The fact that it was in Norway (remember: I am from Germany) just made it more 
                                exiting for me. I setup an internal SwiftUI applications during my two weeks at Knowit just 
                                in case someone wonders what I was doing there.
                            </Timeline.Body>
                        </Timeline.Event>
                        <Timeline.Event>
                            <Timeline.DateRange>The Future</Timeline.DateRange>
                            <Timeline.Title>Hopefully a lot of interesting stuff.</Timeline.Title>
                            {/* <Timeline.Subtitle>My inspiration for web development.</Timeline.Subtitle> */}
                            <Timeline.Body>
                                I hope I can write much more interesting events of my life down here. 
                                In autumn 2021 I will probably add that I started to study and maybe 
                                some more exiting internships. 
                            </Timeline.Body>
                        </Timeline.Event>
                    </Timeline>
                </Container>
        </Container>
    )
}