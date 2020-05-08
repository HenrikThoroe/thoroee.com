import React, { useEffect } from "react"
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

function SampleCard() {
    return (
        <Card width="min(90%, 20rem)">
            <Card.Title>Project</Card.Title>
            <Card.Subtitle>A Very Fancy Project</Card.Subtitle>
            <Card.Section>
                Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                pariatur. 
            </Card.Section>
            <Card.Section>
                <Button icon={<Icon color="input" name="sun"/>} label="Buy" style="primary" size="large" />
                <Button label="GitHub" style="primary" size="large" />
                <Button label="Learn More" style="primary" size="large" />
            </Card.Section>
        </Card>
    )
}

export default function Home() {
    const language = useSelector(selectLanguage)

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

    return (
        <Container className="home">
            <Container padding="1" className="helloworld">
                <Typewriter>
                    Hello, World! \n 
                    Lorem ipsum, dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
                    irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia 
                    deserunt mollit anim id est laborum.
                </Typewriter>
            </Container>
            <Container className="project">
                <h2 className="projectHeading">Projects</h2>
                <Container className="projectCards scrollBox">
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                    <SampleCard />
                </Container>
            </Container>
        </Container>
    )
}