import React, { useRef, useEffect } from 'react'
import "./index.scss"
import ReactProps from '../../utils/ReactProps'
import classNames from 'classnames'

export type IconName = 
    "research" | 
    "language" | 
    "moon" | 
    "sun" | 
    "github" | 
    "chevron-left" | 
    "bootstrap" | 
    "person" | 
    "envelop-open" |
    "heart" | 
    "info-circle" |
    "heart-fill" | 
    "textfile" |
    "logo" |
    "logo-dark" |
    "sendmail" |
    "treasurechest" |
    "treasurechest-open" |
    "castle" |
    "download"

export interface Props extends ReactProps<HTMLDivElement> {
    name: IconName
    color?: "text" | "input"
    format?: "svg" | "png"
}

export default function Icon(props: Props): JSX.Element {
    const { name, color, format, className, ...other } = props
    const contentRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (format === "png") {
            if (contentRef.current) {
                for (const child of Array.from(contentRef.current.childNodes)) {
                    contentRef.current.removeChild(child)
                }
    
                const img = document.createElement("img")
    
                img.src = `/icons/${name}.png`
    
                contentRef.current.classList.replace("comp_loadingIcon", "comp_iconContainer")
                contentRef.current.appendChild(img)
            }
        } else {
            fetch(`/icons/${name}.svg`) 
                .then(res => { 
                    return res.text()
                })
                .then(text => {
                    const parser = new DOMParser()
                    const xml = parser.parseFromString(text, "text/xml")
                    const svg = xml.getElementsByTagName("svg")[0]
    
                    // if (className) {
                    //     svg.classList.add(className)
                    // }
    
                    svg?.classList.add("comp_icon")
                    svg?.classList.add(color === "input" ? "comp_inputColor" : "comp_textColor")
                    svg?.setAttribute("fill", "#f00")
    
                    if (svg && contentRef.current) {
                        for (const child of Array.from(contentRef.current.childNodes)) {
                            contentRef.current.removeChild(child)
                        }
    
                        contentRef.current.classList.replace("comp_loadingIcon", "comp_iconContainer")
                        contentRef.current.appendChild(svg)
                    }
                }) 
        }
    }, [contentRef.current])

    return (
        <div className={classNames("comp_loadingIcon", className)} ref={contentRef} {...other}>
            <div />
            <div />
            <div />
        </div>
    )
}