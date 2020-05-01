import React from "react";

export interface Props {
    children: string
}

export default function Subtitle(props: Props) {
    return <h4 className="subtitle">{ props.children }</h4>
}