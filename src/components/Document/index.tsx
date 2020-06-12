import ChildrenProps from "../../utils/ChildrenProps";
import React, { ReactNode } from "react";
import Headline from "../TextContent";
import Container from "../Container";
import style from "./index.module.scss"

Document.Title = (props: ChildrenProps) => (
    <Headline component="h1" className={style.title}>
        { props.children }
    </Headline>
)

Document.FirstHeadline = (props: ChildrenProps) => (
    <Headline component="h2" className={style.firstHeading} bold>
        { props.children }
    </Headline>
)

Document.SecondHeadline = (props: ChildrenProps) => (
    <Headline component="h3" className={style.secondHeading} bold>
        { props.children }
    </Headline>
)

Document.ThirdHeadline = (props: ChildrenProps) => (
    <Headline component="h4" className={style.thirdHeading}>
        { props.children }
    </Headline>
)

Document.Paragraph = (props: ChildrenProps) => (
    <Headline component="span" className={style.paragraph}>
        { props.children }
    </Headline>
)

Document.Important = (props: ChildrenProps) => (
    <Headline component="h1" className={style.important} bold>
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
        { props.children }
    </li>
)

Document.AssociativeList = (props: ChildrenProps) => (
    <table className={style.associativeList}>
        { props.children }
    </table>
)

Document.AssociativeListItem = (props: { key: ReactNode, value: ReactNode }) => (
    <tr className={style.associativeListItem}>
        <td className={style.associativeListItemKey}>{ props.key }</td>
        <td className={style.associativeListItemValue}>{ props.value }</td>
    </tr>
)

Document.Section = (props: ChildrenProps) => (
    <Container padding="2rem 0px">
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