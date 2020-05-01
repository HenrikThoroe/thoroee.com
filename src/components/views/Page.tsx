import React, { useState } from "react"
import Layout from "../basic/Layout"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Navbar from "./Navigation"
import currentBreakpoint from "../../utils/currentBreakpoint"

export interface Props {
}

export default function Page(props: Props) {
    const [sidebarCollapsed, changeSidebar] = useState(currentBreakpoint() !== "desktop")

    return (
        <Layout hideSidebar={sidebarCollapsed}>
            <Sidebar collapsed={sidebarCollapsed} onSidebarToggle={() => {}} />
            <Navbar onToggleSidebar={() => changeSidebar(!sidebarCollapsed)} open={!sidebarCollapsed}/>
            <Home />
        </Layout>
    )
}