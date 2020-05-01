import React, { ReactNode } from "react";

export interface Props {
    children: ReactNode
}

export default function Section(props: Props) {
    return <div className="section">{ props.children }</div>
}