import React from 'react'
import "./index.scss"

export interface Props {
    children: string
}

export default function LargeTextComponent(props: Props) {
    return (
        <div className="box">
            <span className="text">{ props.children }</span>
        </div>
    )
}