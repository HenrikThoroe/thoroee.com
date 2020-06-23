import React, { useState, useEffect } from "react"
import Layout from "../components/Layout"
import Sidebar from "./Sidebar"
import Home from "./Home"
import Navbar from "./Navigation"
import currentBreakpoint from "../utils/currentBreakpoint"
import { Switch, Route, useLocation, useParams } from "react-router-dom"
import Feedback from "./Feedback"
import useCurrentHeight from "../utils/hooks/useCurrentHeight"
import Castle from "./Castle"
import AboutMeComic from "./AboutMeComic"
import DownloadPage from "./DownloadPage"
import DataProtectionDeclaration from "./DataProtectionDeclaration"
import LegalDisclosure from "./LegalDisclosure"
import CastleDataProtection from "./Castle/CastleDataProtection"
import WebClientHelp from "./Castle/WebClientHelp"
import Modal from "../components/Modal"
import { useSelector, useDispatch } from "react-redux"
import selectEnableCookies from "../redux/selectors/selectEnableCookies"
import setEnableCookies from "../redux/actions/setEnableCookies"
import VStack from "../components/Stacks/VStack"
import Headline from "../components/TextContent"
import TextContent from "../components/Headline"
import Button from "../components/Button"
import Icon from "../components/Icon"
import Translation from "../components/Translation"

export interface Props {
}

export default function Page(props: Props) {
    const [sidebarCollapsed, changeSidebar] = useState(currentBreakpoint() !== "desktop")
    const height = useCurrentHeight()
    const location = useLocation()
    const allowCookies = useSelector(selectEnableCookies)
    const dispatch = useDispatch()
    const [showCookieMessage, setShowCookieMessage] = useState(!allowCookies)

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
                        <Route path={["/products/castle", "/en/products/castle/", "/de/produkte/castle/"]}>
                            <Switch>
                                <Route path={["/products/castle/dataprotection", "/de/produkte/castle/datenschutz.html", "/en/products/castle/dataprotectiondeclaration.html"]}>
                                    <CastleDataProtection />
                                </Route>
                                <Route path={["/products/castle/webclient", "/en/products/castle/webclient.html", "/de/produkte/castle/webclient.html"]}>
                                    <WebClientHelp />
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

                <Modal shown={showCookieMessage} centered requireInteraction gradient>
                    <Modal.Body>
                        <VStack spacing="2rem" horizontalAlignment="center">
                            <Icon style={{ maxWidth: "5rem" }} name="cookie" />
                            <Headline size="l" type="centered" bold>
                                <Translation select={lang => lang.cookieMessage.title} />
                            </Headline>
                            <TextContent size="m" type="centered" bold>
                                <Translation select={lang => lang.cookieMessage.message} />   
                            </TextContent>
                            <VStack spacing=".5rem">
                                <Button 
                                    label={<Translation select={lang => lang.cookieMessage.allow} />}
                                    onClick={() => {
                                        dispatch(setEnableCookies(true))
                                        setShowCookieMessage(false)
                                    }}
                                />
                                <Button 
                                    label={<Translation select={lang => lang.cookieMessage.deny} />}
                                    style="text"
                                    onClick={() => {
                                        dispatch(setEnableCookies(false))
                                        setShowCookieMessage(false)
                                    }}
                                />
                            </VStack>
                        </VStack>
                    </Modal.Body>
                </Modal>
            </Route>
        </Switch>
    )
}