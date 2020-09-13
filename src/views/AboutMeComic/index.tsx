import React, { useState } from "react";
import VStack from "../../components/Stacks/VStack";
import HStack from "../../components/Stacks/HStack";
import Button from "../../components/Button";
import useCurrentBreakpoint from "../../utils/hooks/useCurrentBreakpoint";
import TextContent from "../../components/Headline";
import Picture from "../../components/Picture";
import { useSelector } from "react-redux";
import selectDarkMode from "../../redux/selectors/selectDarkMode";
import "./index.scss"

const Text = ({ index = 1 }) => {
    switch (index) {
        case 1:
            return <span>Hello, World! That's me. I'm a 17-year-old student from Germany.</span>
        case 2:
            return <span>I had my first contact with the world of programming back when I was about 13 years old. I managed to turn on some LEDs. #YAY</span>
        case 3:
            return <span>Later on, I built and programmed a self-driving model car. I certainly was no Tesla engineer these days.</span>
        case 4:
            return <span>I took my first real steps in programming on my sister's IPad. You will be surprised how much you can do on one of these things. JavaScript, Swift, Java, Python, ...</span>
        case 5:
            return <span>After a few years, my first laptop unlocked more possibilities for me. And YES it MUST have been a MacBook Pro!</span>
        case 6:
            return <span>I started to seriously learn Swift and Xcode and wrote some small and not so small apps. You can even buy my largest one. It's a very nice password manager.</span>
        case 7:
            return <span>After a very interesting internship at Naymspace (more about it in my CV), I started to learn TypeScript and React. You're seeing the results of my efforts right now.</span>
        case 8:
            return <span>The current episode in my life is my high school graduation. My primary subject is physic and I have to learn much to pass my exam in spring 2021.</span>
        case 9:
        default:
            return <span>Thank's for your interest in my previous life. My next step will be to study something math-related. But if you want to hire me for whatever reasons don't hesitate (; Bye</span>
    }
}

export default function AboutMeComic() {
    const bp = useCurrentBreakpoint()
    const [index, setIndex] = useState(1)
    const darkMode = useSelector(selectDarkMode)

    const pictureSource = () => `Scene ${index}${darkMode ? " - Dark" : ""}.svg`

    const Default = () => (
        <HStack spacing="1rem" style={{ position: "relative", flexGrow: 1, width: "100%" }} verticalAlignment="center" alignment="center">
            <TextContent size="2rem" style={{fontFamily: "Open Sans", maxWidth: "20rem", flexGrow: 0}}>
                <Text index={index} />
            </TextContent>

            <HStack alignment="center" style={{flexGrow: 1, position: "relative"}}>
                <Picture src={pictureSource()} style={{ width: "70vmin", minWidth: "70vmin", maxWidth: "70vmin", objectFit: "scale-down" }} />
            </HStack>
        </HStack>
    )

    const Mobile = () => (
        <VStack style={{ position: "relative" }} horizontalAlignment="center" spacing="1rem">
            <TextContent size="1.2rem" style={{fontFamily: "Open Sans"}}>
                <Text index={index} />
            </TextContent>
            <Picture src={pictureSource()} style={{ width: "100%" }} />
        </VStack>
    )

    if (bp === "desktop") {
        return (
            <VStack alignment="spaceBetween" spacing="1rem" style={{overflow: "hidden", padding: "4rem 2rem"}}>
                <HStack verticalAlignment="start" spacing="2rem">
                    <Button style="comic" label="Back to Homepage" link="/" fitContent />
                    <Button style="comic" label="Previous" onClick={() => setIndex(index - 1)} disabled={index <= 1} fitContent />
                    <Button style="comic" label="Next" onClick={() => setIndex(index + 1)} disabled={index >= 9}  fitContent />
                </HStack>
                <Default />
            </VStack>
        )
    }

    return (
        <VStack alignment="start" horizontalAlignment="stretch" spacing="2rem" style={{overflow: "hidden", padding: "4rem 2rem"}}>
            <HStack style={{ minWidth: "100%" }} alignment="start" verticalAlignment="center" spacing="2rem">
                <Button style="comic" label="Previous" onClick={() => setIndex(index - 1)} disabled={index <= 1} />
                <Button style="comic" label="Next" onClick={() => setIndex(index + 1)} disabled={index >= 9} />
            </HStack>
            <Mobile />
            <Button style="comic" label="Back to Homepage" link="/" />
        </VStack>
    )
}