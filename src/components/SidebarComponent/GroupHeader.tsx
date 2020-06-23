import { ReactNode } from "react";
import React from "react";

export interface Props {
    children: [ReactNode, ReactNode]
}

export default function GroupHeader(props: Props) {
    return (
        <div className="group-header">
            { props.children[0] }
            { props.children[1] }
        </div>
    )
}