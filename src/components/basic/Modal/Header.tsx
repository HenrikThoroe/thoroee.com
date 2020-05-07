import containerBuilder from '../../builder/containerBuilder'
import React from 'react'

export interface Props {
    children: string
}

export default function Header(props: Props) {
    return (
        <div className="header">
            { props.children }
        </div>
    )
}