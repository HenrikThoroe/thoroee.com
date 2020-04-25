import React, { ReactNode, useRef, useState } from "react";
import Action from "./Action";

interface Props {
    label: string
    children: ReactNode
}

function Icon(props: { name: "chevron-down" | "chevron-up" }) {
    switch (props.name) {
        case "chevron-down":
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z" clip-rule="evenodd"/>
                </svg>
            )
        case "chevron-up":
            return (
                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 01.708 0l6 6a.5.5 0 01-.708.708L8 5.707l-5.646 5.647a.5.5 0 01-.708-.708l6-6z" clip-rule="evenodd"/>
                </svg>
            )
    }
}

export default function Dropdown(props: Props) {
    const content = useRef<HTMLDivElement>(null)
    const [icon, changeIcon] = useState<"chevron-down" | "chevron-up">("chevron-down")

    const handleClick = () => {
        changeIcon(icon === "chevron-down" ? "chevron-up" : "chevron-down")
        content.current?.classList.toggle("bt_close")
    }

    return (
        <div className="bt_sidebar-dropdown">
            <Action callback={handleClick}>{ props.label }</Action>

            <div className="bt_sidebar-dropdown-content bt_close" ref={content}>
                { props.children }
            </div>
        </div>
    )
}