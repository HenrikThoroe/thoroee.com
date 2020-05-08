import React, { useState, useEffect } from "react"
import Layout from "../basic/Layout"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Navbar from "./Navigation"
import currentBreakpoint from "../../utils/currentBreakpoint"
import Modal from "react-bootstrap/Modal"
import { Switch, Route } from "react-router-dom"

export interface Props {
}
export default function Page(props: Props) {
    const [sidebarCollapsed, changeSidebar] = useState(currentBreakpoint() !== "desktop")

    useEffect(() => {
        const navigation = document.querySelector(".navigation")

        if (navigation) {
            const height = window.innerHeight - navigation.clientHeight
            document.documentElement.style.setProperty("--content-height", `${height}px`)
        }
    })

    return (
        <>
        <Layout hideSidebar={sidebarCollapsed}>
            <Sidebar collapsed={sidebarCollapsed} onSidebarToggle={() => {}} />
            <Navbar onToggleSidebar={() => changeSidebar(!sidebarCollapsed)} open={!sidebarCollapsed}/>
            <Switch>
                <Route path="/feedback">
                    <h2>Feedback</h2>
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Layout>
        </>
    )
}