import React, { useState } from "react";
import VStack from "../../components/Stacks/VStack";
import HStack from "../../components/Stacks/HStack";
import Button from "../../components/Button";
import Headline from "../../components/TextContent";
import useCurrentBreakpoint from "../../utils/hooks/useCurrentBreakpoint";
import TextContent from "../../components/Headline";
import Picture from "../../components/Picture";
import Container from "../../components/Container";
import { Link, useHistory } from "react-router-dom";
import Icon from "../../components/Icon";

const Text = ({ index = 1 }) => {
    switch (index) {
        case 1:
            return <span>Hello, World! That's me. I'm a 17 year old student from Germany.</span>
        case 2:
            return <span>I had my first contact with the world of programming back when I was about 13 years old. I actually managed to turn on some LEDs. #YAY</span>
        case 3:
            return <span>Later on I built and programmed a self driving modell-car. I certainly were no Tesal engineer these days.</span>
        case 4:
            return <span>I took my first real steps in programming on my sister's IPad. You will be surprised how much you can do on one of these things. JavaScript, Swift, Java, Python, ...</span>
        case 5:
            return <span>After a few years my first laptop unlocked more possibilities for me. And YES it MUST has been a MacBook Pro!</span>
        case 6:
            return <span>I started to seriously learn Swift and Xcode and wrote some small and not so small apps. You can even buy my biggest one. It's a very nice password manager.</span>
        case 7:
            return <span>After a very interesting internship at Naymspace (more about it in my CV) I started to learn TypeScript and React. You're seeing the results of my efforts right now.</span>
        case 8:
            return <span>The current episode in my life is my highschool graduation. My primary subject is physic and I have to learn much to pass my exam in spring 2021.</span>
        case 9:
        default:
            return <span>Thank's for your interest into my previous life. My next step will be to study something math related. But if you want to hire me for whatever reasons don't hestiate (; Bye</span>
    }
}

export default function AboutMeComic() {
    const bp = useCurrentBreakpoint()
    const [index, setIndex] = useState(1)
    const history = useHistory()

    const Default = () => (
        <HStack spacing="1rem" style={{ position: "relative", flexGrow: 1, width: "100%" }} verticalAlignment="center" alignment="center">
            <TextContent size="2rem" style={{fontFamily: "Comic Sans MS", maxWidth: "20rem", flexGrow: 0}}>
                <Text index={index} />
            </TextContent>
            {/* <Container style={{ position: "relative", border: "1px solid red", height: "100%" }}>
                
            </Container> */}

            <HStack alignment="center" style={{flexGrow: 1, position: "relative"}}>
                <Picture src={`Scene ${index}.svg`} style={{ width: "70vmin", minWidth: "70vmin", maxWidth: "70vmin", objectFit: "scale-down" }} />
            </HStack>
            
            {/* <VStack horizontalAlignment="center" alignment="stretch" style={{border: "3px solid blue", alignSelf: "stretch"}}>
                <Picture src={`Scene ${index}.svg`} style={{ flexGrow: 1 }} />
            </VStack> */}
        </HStack>
    )

    const Mobile = () => (
        <VStack style={{ position: "relative" }}>
            <TextContent size="1.5rem" style={{fontFamily: "Comic Sans MS"}}>
                <Text index={index} />
            </TextContent>
            <Container style={{ position: "relative" }}>
                <Picture src={`Scene ${index}.svg`} style={{ width: "100vw" }} />
            </Container>
        </VStack>
    )

    return (
        <VStack alignment="spaceBetween" spacing="1rem" style={{overflow: "hidden", padding: "4rem 2rem"}}>
            <HStack verticalAlignment="start" spacing="2rem">
                <Button style="comic" label="Back to Homepage" onClick={() => history.push("/")} fitContent />
                <Button style="comic" label="Previous" onClick={() => setIndex(index - 1)} disabled={index <= 1} fitContent />
                <Button style="comic" label="Next" onClick={() => setIndex(index + 1)} disabled={index >= 9}  fitContent />
            </HStack>
            { bp === "desktop" ? <Default /> : <Mobile /> }
        </VStack>
    )
}