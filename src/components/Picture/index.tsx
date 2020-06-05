import ReactProps from "../../utils/ReactProps";
import React, { useState } from "react";
import "./index.scss"

interface Props extends ReactProps<HTMLDivElement> {
    src: string
}

export default function Picture(props: Props) {
    const { src, ...other } = props
    const [highResLoaded, setHighResLoaded] = useState(false)

    const highResStyles: React.CSSProperties = {
        opacity: highResLoaded ? 1 : 0
    }

    const loaderStyle: React.CSSProperties = {
        opacity: highResLoaded ? 0 : 1
    }

    const construct = () => `/images/${src}`
    const handleLoad = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
        setHighResLoaded(true)
    }

    return (
        <div style={{position: "relative"}} {...other}>
            <div style={loaderStyle} className="imageLoader" />
            <img  src={construct()} className="highResImage" style={highResStyles} onLoad={handleLoad} />
        </div>
    )
}