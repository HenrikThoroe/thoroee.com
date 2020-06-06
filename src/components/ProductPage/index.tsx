import VStack from "../Stacks/VStack";
import React, { ReactNode } from "react";
import Headline from "../TextContent";
import TextContent from "../Headline";
import VisualContent from "./VisualContent";
import "./index.scss"

interface ChildrenProps {
    children: ReactNode
}

ProductPage.Title = (p: ChildrenProps) => (
    <Headline component="h1" type="centered" className="title" size="var(--title-size)" bold>{ p.children }</Headline>
)

ProductPage.Headline = (p: ChildrenProps) => (
    <Headline component="h2" type="centered" className="headline" size="var(--headline-size)" bold>{ p.children }</Headline>
)

ProductPage.CaptionHeadline = (p: ChildrenProps) => (
    <Headline component="h3" className="headline" size="1.5rem" bold>{ p.children }</Headline>
)

ProductPage.HeroText = (p: ChildrenProps) => (
    <TextContent component="span" type="centered" className="hero-text" size="1.5rem">{ p.children }</TextContent>
)

ProductPage.BodyText = (p: ChildrenProps) => (
    <TextContent component="span" className="body-text" size="1.1rem">{ p.children }</TextContent>
)

ProductPage.Group = (p: ChildrenProps) => (
    <VStack className="group" spacing="2rem" style={{position: "relative"}}>
        { p.children }
    </VStack>
)

ProductPage.VisualContent = VisualContent

export default function ProductPage(props: ChildrenProps) {
    return (
        <VStack className="productPage" alignment="start" horizontalAlignment="start" spacing="0px">
            { props.children }
        </VStack>
    )
}