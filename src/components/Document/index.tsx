import ChildrenProps from "../../utils/ChildrenProps";
import React, { ReactNode } from "react";
import Headline from "../TextContent";
import Container from "../Container";
import style from "./index.module.scss"
import TextContent from "../Headline";
import VStack from "../Stacks/VStack";
import HStack from "../Stacks/HStack";

Document.Title = (props: ChildrenProps) => (
    <Headline component="h1" size="2.5rem" className={style.title} bold>
        { props.children }
    </Headline>
)

Document.FirstHeadline = (props: ChildrenProps) => (
    <Headline component="h2" size="2.2rem" className={style.firstHeading} bold>
        { props.children }
    </Headline>
)

Document.SecondHeadline = (props: ChildrenProps) => (
    <Headline component="h3" size="1.8rem" className={style.secondHeading} bold>
        { props.children }
    </Headline>
)

Document.ThirdHeadline = (props: ChildrenProps) => (
    <Headline component="h4" size="1.8rem" className={style.thirdHeading}>
        { props.children }
    </Headline>
)

Document.Paragraph = (props: ChildrenProps) => (
    <Headline component="span" size="1.2rem" className={style.paragraph}>
        { props.children }
    </Headline>
)

Document.Important = (props: ChildrenProps) => (
    <Headline component="h1" size="1.2rem" className={style.important} bold>
        { props.children }
    </Headline>
)

Document.List = (props: ChildrenProps) => (
    <ul className={style.list}>
        { props.children }
    </ul>
)

Document.ListItem = (props: ChildrenProps) => (
    <li className={style.listItem}>
        <TextContent size="1.2rem">
            { props.children }
        </TextContent>
    </li>
)

Document.AssociativeList = (props: ChildrenProps) => (
    <VStack className={style.associativeList} >
        { props.children }
    </VStack>
)

Document.AssociativeListItem = (props: { name: ReactNode, value: ReactNode }) => (
    <HStack className={style.associativeListItem}>
        <TextContent className={style.associativeListItemKey} size="1.2rem" bold>{ props.name }</TextContent>
        <TextContent className={style.associativeListItemValue} size="1.2rem">{ props.value }</TextContent>
    </HStack>
)

Document.Section = (props: ChildrenProps) => (
    <Container padding="2rem 0px">
        <VStack spacing=".2rem">
            { props.children }
        </VStack>
    </Container>
)

Document.FreeStanding = (props: ChildrenProps) => (
    <Container padding="1rem .5rem">
        { props.children }
    </Container>
) 

export default function Document(props: ChildrenProps) {
    return (
        <Container padding="2" className={style.document}>
            { props.children }
        </Container>
    )
}