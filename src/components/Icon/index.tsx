import React from "react"
import github from "./github.svg"

export type Name = "chevron-left" | "bootstrap" | "person" | "envelopOpen" | "github"

export default function Icon(props: { name: Name, width?: string, height?: string, className?: string }) {
    switch (props.name) {
        case "chevron-left":
            return (
                <svg className={props.className} width={props.width || "1rem"} height={props.height || "1rem"} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clip-rule="evenodd"/>
                </svg>
            )
        case "bootstrap":
            return (
                <svg className={props.className} width={props.width || "1rem"} height={props.height || "1rem"} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M12 1H4a3 3 0 00-3 3v8a3 3 0 003 3h8a3 3 0 003-3V4a3 3 0 00-3-3zM4 0a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V4a4 4 0 00-4-4H4z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z" clip-rule="evenodd"/>
                </svg>
            )
        case "person":
            return (
                <svg className={props.className} width={props.width || "1rem"} height={props.height || "1rem"} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M13 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM3.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM8 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0z" clip-rule="evenodd"/>
                </svg>
            )
        case "envelopOpen":
            return (
                <svg className={props.className} width={props.width || "1rem"} height={props.height || "1rem"} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M.243 6.929l.514-.858L8 10.417l7.243-4.346.514.858L8 11.583.243 6.93z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M7.184 10.68L.752 14.432l-.504-.864L6.68 9.816l.504.864zm1.632 0l6.432 3.752.504-.864L9.32 9.816l-.504.864z" clip-rule="evenodd"/>
                    <path fill-rule="evenodd" d="M8.47 1.318a1 1 0 00-.94 0l-6 3.2A1 1 0 001 5.4V14a1 1 0 001 1h12a1 1 0 001-1V5.4a1 1 0 00-.53-.882l-6-3.2zM7.06.435a2 2 0 011.882 0l6 3.2A2 2 0 0116 5.4V14a2 2 0 01-2 2H2a2 2 0 01-2-2V5.4a2 2 0 011.059-1.765l6-3.2z" clip-rule="evenodd"/>
                </svg>
            )
        case "github":
            return <img className={props.className} src={github} />
    }
}