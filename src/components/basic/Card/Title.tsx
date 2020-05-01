import React from "react";

export interface Props {
    children: string
}

export default function Title(props: Props) {
    return <h3 className="title">{ props.children }</h3>
}