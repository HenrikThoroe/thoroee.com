import React, { ReactNode } from "react"

export interface Props<T> {
    children: T
}

export default function containerBuilder<T = ReactNode>(className: string) {
    return (props: Props<T>) => (
        <div className={className}>{ props.children }</div>
    )
}