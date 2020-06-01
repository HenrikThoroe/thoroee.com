import "./index.scss"
import Slide from "./Slide"
import ReactProps from "../../utils/ReactProps"
import React, { useEffect, useRef } from "react"
import classNames from "classnames"
import Cover from "./Cover"
import Body from "./Body"
import useCurrentBreakpoint from "../../utils/hooks/useCurrentBreakpoint"

Slideshow.Slide = Slide
Slideshow.Cover = Cover
Slideshow.Body = Body

export default function Slideshow(props: ReactProps<HTMLDivElement>) {
    const { className, children, ...other } = props
    const el = useRef<HTMLDivElement>(null)
    const bp = useCurrentBreakpoint()

    useEffect(() => {
        const adjustPosition = () => {
            const body = el.current?.querySelector<HTMLDivElement>(".wrapper > .body")

            if (body) {
                body.style.marginTop = `min(0px, calc(var(--content-height) * -1 + ${el.current!.scrollTop + "px"}))`
            }
        }

        if (bp !== "mobile") {
            el.current?.addEventListener("scroll", adjustPosition)

            return () => {
                el.current?.removeEventListener("scroll", adjustPosition)
            }
        } else {
            el.current?.removeEventListener("scroll", adjustPosition)
        }
    }, [el.current, bp])

    return (
        <div ref={el} className={classNames("slideshow", className)} {...other}>
            <div className="wrapper">
                { children }
            </div>
        </div>
    )
}