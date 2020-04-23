import React, { ReactNode } from "react"

export interface Props {
    children: ReactNode
}

export default function textBuilder(className: string) {
    return (props: Props) => (
        <div className={className}>{ props.children }</div>
    )
}