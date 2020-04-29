import React, { useState } from "react"
import Layout from "../basic/Layout"
import SidebarComponent from "../basic/SidebarComponent"
import Header from "../basic/SidebarComponent/Header"
import Title from "../basic/SidebarComponent/Title"
import Group from "../basic/SidebarComponent/Group"
import Caption from "../basic/SidebarComponent/Caption"
import Action from "../basic/SidebarComponent/Action"
import Dropdown from "../basic/SidebarComponent/Dropdown"
import Body from "../basic/SidebarComponent/Body"
import Footer from "../basic/SidebarComponent/Footer"
import Footnote from "../basic/SidebarComponent/Footnote"
import NavbarComponent from "../basic/NavbarComponent"
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