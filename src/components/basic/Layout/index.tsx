import React, { ReactNode } from 'react'
import "./index.scss"
import classNames from 'classnames'

interface Props {
    hideSidebar?: boolean
    children: [ReactNode, ReactNode, ReactNode]
}

export default function Layout(props: Props) {
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