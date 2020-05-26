import ReactProps from "../../utils/ReactProps";
import React, { useEffect, useState, ReactNode, useRef } from "react";
import classNames from "classnames";
import "./index.scss"

type BoxType = "WaveIn" | "Wave"

export interface Props extends ReactProps<HTMLDivElement> {
    type: BoxType
    fill: string
}

interface SVGProps {
    fill: string
}

export default function FluidBox(props: Props) {
    const { type, children, fill, style, ...other } = props
    const bgStyle = {
        ...style,
        backgroundColor: fill
    }

    const wrapTop= (comp: ReactNode) => (
        <div className="content-wrapper">
            { comp }
            <div style={bgStyle} {...other}>
                { children }
            </div>
        </div>
    )

    const wrap= (top: ReactNode, bottom: ReactNode) => (
        <div className="content-wrapper">
            { top }
            <div style={bgStyle} {...other}>
                { children }
            </div>
            { bottom }
        </div>
    )

    switch (type) {
        case "Wave":
            return wrap(<WaveIn fill={fill}/>, <WaveOut fill={fill} />)
        case "WaveIn":
        default:
            return wrapTop(<WaveIn fill={fill} />)
    }
}

function WaveIn(props: SVGProps) {
    return (
        <svg viewBox="0 0 1000 150" preserveAspectRatio="minXMinY" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0C0 0 202.5 9 314 50.5C425.5 92 490.684 111.564 608.5 118C763.415 126.463 1000 50.5 1000 50.5V150H0V0Z" fill="inherit"/>
        </svg>
    )
}

function WaveOut(props: SVGProps) {
    return (
        <svg viewBox="0 0 1000 150" fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <path d="M1000 150C1000 150 797.5 141 686 99.5C574.5 58 509.316 38.4362 391.5 32C236.585 23.5371 0 99.5 0 99.5V0H1000V150Z" fill="inherit"/>
        </svg>        
    )
}

