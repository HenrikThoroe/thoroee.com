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

export interface Props {
}

export default function Page(props: Props) {
    const shouldCollapseSidebar = () => {
        const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        return vw < (20 * 16 * 3) // Three times the width of the sidebar (20rem * 3)
    }
    const [sidebarCollapsed, changeSidebar] = useState(shouldCollapseSidebar())
    const [scrollPosition, setScrollPosition] = useState(0)

    return (
        <Layout>
            <Sidebar collapsed={false} onSidebarToggle={() => {}} />
            <div></div>
            <div>
            </div>
        </Layout>
    )
}