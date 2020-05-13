import React, { useState, useEffect } from "react"
import Layout from "../basic/Layout"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Navbar from "./Navigation"
import currentBreakpoint from "../../utils/currentBreakpoint"
import Modal from "react-bootstrap/Modal"
import { Switch, Route } from "react-router-dom"
import Feedback from "./Feedback"
import useCurrentHeight from "../../utils/hooks/useCurrentHeight"

export interface Props {
}
export default function Page(props: Props) {
    const [sidebarCollapsed, changeSidebar] = useState(currentBreakpoint() !== "desktop")
    const height = useCurrentHeight()

    useEffect(() => {
        const navigation = document.querySelector(".navigation")

        if (navigation) {
            const contentHeight = height - navigation.clientHeight
            document.documentElement.style.setProperty("--content-height", `${contentHeight}px`)
        }
    }, [height])

    return (
        <>
        <Layout hideSidebar={sidebarCollapsed}>
            <Sidebar collapsed={sidebarCollapsed} onSidebarToggle={() => {}} />
            <Navbar onToggleSidebar={() => changeSidebar(!sidebarCollapsed)} open={!sidebarCollapsed}/>
            <Switch>
                <Route path="/feedback">
                    <Feedback />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Layout>
        </>
    )
}