import React, { ReactNode } from "react";

export interface Props {
    children: ReactNode
}

export default function Title(props: Props) {
    return <h3 className="title">{ props.children }</h3>
}