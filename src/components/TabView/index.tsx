import ReactProps from "../../utils/ReactProps";
import { ReactNode } from "react";
import React from "react";
import VStack from "../Stacks/VStack";
import HStack from "../Stacks/HStack";
import Container from "../Container";
import classNames from "classnames";
import "./index.scss"
import Transition from "../Transition";
import ScrollView from "../ScrollView";

export interface Props extends ReactProps<HTMLDivElement> {
    tabs: string[]
    onSelectTab: (index: number) => void
    selectedTab: number
}

export default function TabView(props: Props) {
    const { tabs, onSelectTab, selectedTab, children, className, ...other } = props

    const createItem = (tab: string, index: number) => (
        <span 
            className={classNames("tabitem", index === selectedTab ? "active" : undefined)} 
            onClick={() => onSelectTab(index)}>
                { tab }
        </span>
    )

    return (
        <VStack className={classNames("tabview", className)} {...other}>
            <ScrollView direction="x" hideScrollBars>
                <HStack className="tabbar" alignment="spaceBetween" spacing="2rem">
                    { tabs.map(createItem) }
                </HStack>
            </ScrollView>
            <Container className="tabviewcontent">
                <Transition>
                    { children }
                </Transition>
            </Container>
        </VStack>
    )
}