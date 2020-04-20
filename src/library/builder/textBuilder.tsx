import React from "react"

export interface Props {
    children: string
}

export default function textBuilder(className: string) {
    return (props: Props) => (
        <span className={className}>{ props.children }</span>
    )
}