import React from "react";
import Container from "../../components/Container";
import Icon from "../../components/Icon";
import HStack from "../../components/Stacks/HStack";
import VStack from "../../components/Stacks/VStack";
import Headline from "../../components/Headline";
import "./index.scss"
import Slideshow from "../../components/Slideshow";
import Slide from "../../components/Slideshow/Slide";

export default function Castle() {
    return (
        <Slideshow>
            <Slideshow.Cover>
                <Container padding="2" style={{height: "100%"}}>
                    <VStack alignment="center" style={{height: "100%"}}>
                        <HStack verticalAlignment="center" spacing="4rem">
                            <Icon name="castle" style={{width: "50%"}} />
                            <VStack spacing="2rem" alignment="center">
                                <Headline size="10rem" style={{fontWeight: "bolder", color: "#5d80ae"}} component="h1">Castle</Headline>
                                <Headline className="a" size="6rem" style={{fontWeight: "bold"}} component="h2">Your passwords stay where you are!</Headline>
                            </VStack>
                        </HStack>
                    </VStack>
                </Container>
            </Slideshow.Cover>
            <Slideshow.Body>
                <Headline type="centered" size="10rem">Hello, World!</Headline>
                <Headline type="centered" size="10rem">Hello, World!</Headline>
                <Headline type="centered" size="10rem">Hello, World!</Headline>
                <Headline type="centered" size="10rem">Hello, World!</Headline>
                <Headline type="centered" size="10rem">Hello, World!</Headline>
            </Slideshow.Body>
        </Slideshow>
    )
}