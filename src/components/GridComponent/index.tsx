import React, { ReactNode } from "react";
import "./index.scss"

export interface Props {
    title: string
    children: ReactNode[] | ReactNode
}

export default function GridComponent(props: Props) {
    return (
        <section className="view">
            <h2 className="title">{ props.title }</h2>
            <div className="grid">
                { props.children }
            </div>
        </section>
    )
}