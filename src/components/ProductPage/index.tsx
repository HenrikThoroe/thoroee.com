import VStack from "../Stacks/VStack";
import React, { ReactNode } from "react";
import Headline from "../TextContent";
import TextContent from "../Headline";
import VisualContent from "./VisualContent";

interface ChildrenProps {
    children: ReactNode
}

ProductPage.Title = (p: ChildrenProps) => (
    <Headline component="h1" type="centered" className="title" size="4rem" bold>{ p.children }</Headline>
)

ProductPage.Headline = (p: ChildrenProps) => (
    <Headline component="h2" type="centered" className="headline" size="3rem" bold>{ p.children }</Headline>
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
    <VStack spacing="2rem">
        { p.children }
    </VStack>
)

ProductPage.VisualContent = VisualContent

export default function ProductPage(props: ChildrenProps) {
    return (
        <VStack alignment="start" horizontalAlignment="start" spacing="10rem">
            { props.children }
        </VStack>
    )
}