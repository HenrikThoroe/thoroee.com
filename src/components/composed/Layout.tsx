import React, { ReactNode, useRef } from "react";
import "../style/content.map.scss"

interface Props {
    children: [ReactNode, ReactNode, ReactNode]
    onScroll: (number: number) => void
}

export default function Layout(props: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const update = () => {
        props.onScroll(ref.current?.scrollTop || 0)
    }

    return (
        <div className="bt_app">
            { props.children[0] }
            <div ref={ref} className="bt_site-wrapper" onScroll={update}>
                <div style={{ display: "block", width: "100%" }}>
                    { props.children[1] }
                </div>

                <div className="bt_content">
                    { props.children[2] }
                </div>
            </div>
        </div>
    )
}