import React, { ReactNode } from 'react'
import "./index.scss"
import classNames from 'classnames'
import ScrollView from '../ScrollView'
import VStack from '../Stacks/VStack'
import HStack from '../Stacks/HStack'

interface Props {
    hideSidebar?: boolean
    children: [ReactNode, ReactNode, ReactNode]
}

export default function Layout(props: Props) {
    const Sidebar = () => (
        <span className={"layout-sidebar-wrapper"}>
            { props.children[0] }
        </span>
    )

    const Content = () => (
        <span className="layout-content-wrapper">
            { props.children[2] }
        </span>
    )

    const Navbar = () => (
        <span className="layout-navbar-wrapper">
            { props.children[1] }
        </span>
    )

    // return (
    //     <div className={classNames("mainLayout", { hideSidebar: props.hideSidebar })}>
    //         <span className={"layout-sidebar-wrapper"}>
    //             { props.children[0] }
    //         </span>
    //         <VStack className="layout-body">
    //             <span className="layout-navbar-wrapper">
    //                 { props.children[1] }
    //             </span>
    //             <ScrollView>
    //                 <span className="layout-content-wrapper">
    //                     { props.children[2] }
    //                 </span>
    //             </ScrollView>
    //         </VStack>
    //     </div>
    // )

    return (
        <div className={classNames({ site: true, hideSidebar: props.hideSidebar })}>
            { props.children[0] }
            <div className="main">
                { props.children[1] }
                { props.children[2] }
            </div>
        </div>
    )
}