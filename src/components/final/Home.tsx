import React from "react"
import ContentPageComponent from "../basic/ContentPageComponent"
import LargeTextComponent from "../basic/LargeTextComponent"
import GridComponent from "../basic/GridComponent"

export default function Home() {
    return (
        <ContentPageComponent>
            <LargeTextComponent>Hello, World!</LargeTextComponent>
            <GridComponent title="Projects">
                <span>Hello</span>
                <span>Hello</span>
                <span>Hello</span>
            </GridComponent>
        </ContentPageComponent>
    )
}