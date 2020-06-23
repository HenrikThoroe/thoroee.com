import Item from "./Item";
import React, { ReactNode } from "react";
import "./index.scss"

export interface Props {
    children: ReactNode
}

ListSelection.Item = Item

export default function ListSelection(props: Props) {
    return (
        <div className="list">
            { props.children }
        </div>
    )
}