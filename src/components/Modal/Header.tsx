import React, { ReactNode } from 'react'

export interface Props {
    children: ReactNode
}

export default function Header(props: Props) {
    return (
        <div className="header">
            { props.children }
        </div>
    )
}