import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Navbar from "./Navigation"
import currentBreakpoint from "../utils/currentBreakpoint"
import Modal from "react-bootstrap/Modal"
import { Switch, Route, useLocation, useParams } from "react-router-dom"
import Feedback from "./Feedback"
import useCurrentHeight from "../utils/hooks/useCurrentHeight"
import Castle from "./Castle"
import AboutMeComic from "./AboutMeComic"
import DownloadPage from "./DownloadPage"
import DataProtectionDeclaration from "./DataProtectionDeclaration"
import LegalDisclosure from "./LegalDisclosure"
import CastleDataProtection from "./Castle/CastleDataProtection"

export interface Props {
}

export default function Page(props: Props) {
    const [sidebarCollapsed, changeSidebar] = useState(currentBreakpoint() !== "desktop")
    const height = useCurrentHeight()
    const location = useLocation()

    useEffect(() => {
        if (currentBreakpoint() !== "desktop") {
            changeSidebar(true)
        }
    }, [location])

    useEffect(() => {
        const navigation = document.querySelector(".navigation")

        if (navigation) {
            const contentHeight = height - navigation.clientHeight
            document.documentElement.style.setProperty("--content-height", `${contentHeight}px`)
        }
    }, [height])

    return (
        <Switch>
            <Route path="/comic">
                <AboutMeComic />
            </Route>

            <Route path="*">
                <Layout hideSidebar={sidebarCollapsed}>
                    <Sidebar collapsed={sidebarCollapsed} onSidebarToggle={() => {}} />
                    <Navbar onToggleSidebar={() => changeSidebar(!sidebarCollapsed)} open={!sidebarCollapsed}/>
                    <Switch>
                        <Route path="/products/castle">
                            <Switch>
                                <Route path="/products/castle/dataprotection">
                                    <CastleDataProtection />
                                </Route>
                                <Route path="*">
                                    <Castle />
                                </Route>
                            </Switch>
                            
                        </Route>
                        <Route path="/legaldisclosure">
                            <LegalDisclosure />
                        </Route>
                        <Route path="/dataprotection">
                            <DataProtectionDeclaration />
                        </Route>
                        <Route path="/download/:resource">
                            <DownloadPage />
                        </Route>
                        <Route path="/feedback">
                            <Feedback />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </Layout>
            </Route>
        </Switch>
    )
}