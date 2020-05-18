import ReactProps from "../../../utils/ReactProps";
import React, { useEffect, useState, ReactNode, useRef } from "react";
import classNames from "classnames";
import "./index.scss"

type BoxType = "WaveIn"

export interface Props extends ReactProps<SVGSVGElement> {
    type?: BoxType
}

interface BoxProps extends ReactProps<SVGSVGElement> {
    w: number
    h: number
}

export default function FluidBox(props: Props) {
    const { type, children, ...other } = props
    const [height, setHeight] = useState(900)
    const wrapper = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (wrapper.current) {
            const rect = wrapper.current.getBoundingClientRect()
            setHeight(rect.height)
        }
    }, [])

    const wrap = (comp: ReactNode) => (
        <div ref={wrapper} className="content-wrapper">
            { comp }
            { children }
        </div>
    )

    switch (type) {
        case "WaveIn":
        default:
            return wrap(<WaveIn w={600} h={height} {...other} />)
    }
}

function WaveIn(props: BoxProps) {
    const { w, h, className, ...other } = props
    return (
        <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" className={classNames("bg-svg", className)} {...other}>
            <path d={`M${w} 41.5V${h}H0V31.5C0 31.5 25 9 116 1.50001C207 -5.99999 351.959 52.6671 430 55.5C528.917 59.0908 ${w} 41.5 ${w} 41.5Z`} fill="inherit"/>
        </svg>
    )
}

