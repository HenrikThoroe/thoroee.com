import React, { ReactNode } from "react";

export interface Props {
    children: ReactNode
}

export default function Subtitle(props: Props) {
    return <h4 className="subtitle">{ props.children }</h4>
}