import React, { useState } from 'react'
import Toggle from './Toggle'

interface Props {
    closed?: boolean
    onToggleSidebar: () => void
    transparent?: boolean
}

export default function Navbar(props: Props) {
    return (
        <div className={`bt_navigation ${props.transparent ? "top" : ""}`}>
            <Toggle onClick={props.onToggleSidebar} closed={props.closed} />
        </div>
    )
}