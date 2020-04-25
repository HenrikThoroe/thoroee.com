import React, { ReactNode } from 'react'
import "./index.scss"

interface Props {
    children: [ReactNode, ReactNode, ReactNode]
}

export default function Layout(props: Props) {
    return (
        <div className="site">
            { props.children[0] }
            <div className="main">
                { props.children[1] }
                { props.children[2] }
            </div>
        </div>
    )
}