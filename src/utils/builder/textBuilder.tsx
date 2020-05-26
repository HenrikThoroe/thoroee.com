import React, { ReactNode } from "react"

export interface Props {
    children: ReactNode
}

export default function textBuilder(className: string) {
    return (props: Props) => (
        <span className={className}>{ props.children }</span>
    )
}