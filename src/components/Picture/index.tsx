import ReactProps from "../../utils/ReactProps";
import React, { useState, Suspense, useEffect } from "react";
import "./index.scss"

interface Props extends ReactProps<HTMLDivElement> {
    src: string
}

export default function Picture(props: Props) {
    const { src, style, ...other } = props
    const [highResLoaded, setHighResLoaded] = useState(false)
    const [buffer, setBuffer] = useState(true)

    const highResStyles: React.CSSProperties = {
        opacity: highResLoaded || buffer ? 1 : 0
    }

    const loaderStyle: React.CSSProperties = {
        opacity: highResLoaded || buffer ? 0 : 1
    }

    const construct = () => `/images/${src}`
    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setHighResLoaded(true)
    }

    useEffect(() => {
        setTimeout(() => {
            setBuffer(false)
        }, 100)
    }, [])

    return (
        <div style={{...style, position: "relative"}} {...other}>
            <div style={loaderStyle} className="imageLoader" />
            <img  src={construct()} className="highResImage" style={highResStyles} onLoad={handleLoad} />
        </div>
    )
}