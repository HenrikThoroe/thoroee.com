import React, { ReactNode, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import classes from './classes'
import './style/content.map.scss'
import Sidebar from './library/Sidebar'
import Header from './library/Sidebar/Header'
import Title from './library/Sidebar/Title'
import Group from './library/Sidebar/Group'
import Caption from './library/Sidebar/Caption'
import Action from './library/Sidebar/Action'
import Dropdown from './library/Sidebar/Dropdown'
import Body from './library/Sidebar/Body'
import Footer from './library/Sidebar/Footer'
import Footnote from './library/Sidebar/Footnote'
import Navbar from './library/Navbar'
import Layout from './library/Layout'

function CustomCard() {
    return (
        <Card className={classes.card}>
            {/* <Card.Header>Featured</Card.Header> */}
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                With supporting text below as a natural lead-in to additional content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
            {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
        </Card>
    )
}

function a() {
    return (
        <div className="bt_sidebar hidden" id="testsidebar">
            <div className="bt_sidebar-heading">
                <svg className="bt_sidebar-heading_icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"/>
                </svg>
                <span className="bt_sidebar-heading_title">Lorem Ipsum</span>
            </div>
            
            <div className="bt_sidebar-body">
                <div className="bt_sidebar-group">
                    <span className="bt_sidebar-caption">Important</span>
                    <button className="bt_sidebar-action">Press me</button>
                    <button className="bt_sidebar-action">Press me</button>
                </div>
                <div className="bt_sidebar-group">
                    <button className="bt_sidebar-action">Press me</button>
                    <button className="bt_sidebar-action">Press me</button>
                </div>
                <div className="bt_sidebar-group">
                    <div className="bt_sidebar-dropdown">
                        <button className="bt_sidebar-action bt_sidebar-dropdown-toggle bt_close" id="test1" onClick={() => {}}>Press me</button>
                        <div className="bt_sidebar-dropdown-content bt_close" id="test">
                            <button className="bt_sidebar-action">Press me</button>
                            <button className="bt_sidebar-action">Press me</button>
                        </div>
                    </div>
                    <button className="bt_sidebar-action">Press me too</button>
                </div>
                <button className="bt_sidebar-action">Press me too</button>
            </div>

            <div className="bt_sidebar-footer">
                <button className="bt_sidebar-action bt_sidebar-collapse bt_close" id="footer-toggle" onClick={() => {}}>
                    <span className="bt_sidebar-collapse-text">
                        Hide
                    </span>
                </button>
                <span className="bt_sidebar-text">&copy; Copyright 2020 - Henrik Thorøe</span>
            </div>
        </div>
    )
}

function Icon(props: { name: "chevron-left" | "bootstrap" }) {
    switch (props.name) {
        case "chevron-left":
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                </svg>
            )
        case "bootstrap":
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"/>
                </svg>
            )
    }
}

function MyCard() {
    return (
        <Card className={classes.card} style={{ minWidth: "20rem", margin: "2rem" }}>
                <Card.Header style={{textAlign: "center"}}>
                    <Card.Subtitle style={{ color: "#666" }}>Free</Card.Subtitle>
                    <Card.Title style={{ margin: "1rem 0px" }}>$0 / month</Card.Title>
                </Card.Header>
                <Card.Body>
                    <ul>
                        <li>
                            <Card.Text>Feature 1</Card.Text>
                        </li>
                        <li>
                            <Card.Text>Feature 2</Card.Text>
                        </li>
                        <li>
                            <Card.Text>Feature 3</Card.Text>
                        </li>
                        <li>
                            <Card.Text>Feature 4</Card.Text>
                        </li>
                    </ul>
                    <Button>Buy Now</Button>
                </Card.Body>
            </Card>
    )
}

function Content() {
    return (
        <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignContent: "center", width: "100%"}}>
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
            <MyCard />
        </Container>
    )
}

function App() {
    const shouldCollapseSidebar = () => {
        const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        return vw < (20 * 16 * 3) // Three times the width of the sidebar (20rem * 3)
    }
    const [sidebarCollapsed, changeSidebar] = useState(shouldCollapseSidebar())
    const [scrollPosition, setScrollPosition] = useState(0)

    return (
        <Layout onScroll={setScrollPosition}>
            <Sidebar hidden={sidebarCollapsed}>
                <Header>
                    <svg className="bt_sidebar-heading_icon" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z" clip-rule="evenodd"/>
                        <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"/>
                    </svg>
                    <Title>My Website</Title>
                </Header>

                <Body>
                    <Group>
                        <Caption>Important</Caption>
                        <Action callback={() => {}}>Press Me</Action>
                        <Action callback={() => {}}>Press Me</Action>
                    </Group>
                    <Group>
                        <Action callback={() => {}}>Press Me</Action>
                        <Action callback={() => {}}>Press Me</Action>
                    </Group>
                    <Group>
                        <Dropdown label="Dropdown">
                            <Action callback={() => {}}>Press Me</Action>
                            <Action callback={() => {}}>Press Me</Action>
                        </Dropdown>
                        <Action callback={() => {}}>Outside</Action>
                    </Group>
                    <Action callback={() => {}}>Outside 2</Action>
                </Body>

                <Footer>
                    <Action callback={() => changeSidebar(!sidebarCollapsed)} trailing={<Icon name="chevron-left" />}>Hide</Action>
                    <Footnote>&copy; Copyright 2020 - Henrik Thorøe</Footnote>
                </Footer>
            </Sidebar>

            <Navbar closed={!sidebarCollapsed} onToggleSidebar={() => changeSidebar(!sidebarCollapsed)} transparent={scrollPosition <= 10}/>
            <Content />
        </Layout>
    )
}

export default App;
