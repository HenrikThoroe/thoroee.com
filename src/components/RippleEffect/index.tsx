import React, { useRef } from "react";
import ReactProps from "../../utils/ReactProps";
import classNames from "classnames";
import "./index.scss"

export interface Props extends ReactProps<HTMLDivElement> {
    disabled?: boolean
}

export default function RippleEffect(props: Props) {
    const { disabled, className, children, onClick, ...other } = props

    const handleEvent = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!disabled) {
            const el = e.currentTarget
            const delay = 400
            const rect = el.getBoundingClientRect()
            const x = Math.floor(e.clientX - rect.left)
            const y = Math.floor(e.clientY - rect.top)

            el.style.setProperty("--x", `${x}`)
            el.style.setProperty("--y", `${y}`)
            el.style.setProperty("--r", `${Math.max(rect.width, rect.height) * 2}`)
            el.style.setProperty("--d", `${delay}`)
            el.classList.add("ripple")

        setTimeout(() => el.classList.remove("ripple"), delay)
        }

        if (onClick) {
            onClick(e)
        }
    }

    return (
        <div onClick={handleEvent} className={classNames("rippleEffect", { disabled: disabled }, className)} {...other}>
            <div className="effectBox" />
            { children }
        </div>
    )
}