import React, { useRef } from 'react'
import "./index.scss"

export type IconName = "research" | "language" | "moon" | "sun"

export interface Props {
    name: IconName
}

export default function Icon(props: Props): JSX.Element {
    const contentRef = useRef<HTMLDivElement>(null)

    fetch(`/icons/${props.name}.svg`) 
        .then(res => { 
            return res.text()
         })
        .then(text => {
            const parser = new DOMParser()
            const xml = parser.parseFromString(text, "text/xml")
            const svg = xml.getElementsByTagName("svg")[0]

            svg?.classList.add("icon")
            svg?.setAttribute("fill", "#f00")

            console.log(text, xml, svg)
            console.log(svg?.outerHTML)

            if (svg && contentRef.current) {
                for (const child of Array.from(contentRef.current.childNodes)) {
                    contentRef.current.removeChild(child)
                }

                contentRef.current.classList.replace("loadingIcon", "iconContainer")
                contentRef.current.appendChild(svg)
            }
        }) 

    return (
        <div className="loadingIcon" ref={contentRef}>
            <div />
            <div />
            <div />
        </div>
    )
}