import currentBreakpoint from "../currentBreakpoint"
import { useState, useEffect } from 'react'
import getWindowWidth from '../getWindowWidth'

export default function useCurrentBreakpoint() {
    const [bp, setBp] = useState(currentBreakpoint(getWindowWidth()))

    useEffect(() => {
        const resizeListener = () => {
            const w = getWindowWidth()
            const newBp = currentBreakpoint(w)
    
            if (newBp !== bp) {
                setBp(newBp)
            }
        }

        window.addEventListener('resize', resizeListener)

        return () => {
            window.removeEventListener("resize", resizeListener)
        }
    }) 

    return bp
}