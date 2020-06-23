import "./index.scss"
import React from "react"

export default function Spinner({ size = "80px", shown = true }) {  
    if (!shown) {
        return null
    }
    
    return (
        <div className="spinner" style={{ ["--size" as any]: size }} />
    )
}