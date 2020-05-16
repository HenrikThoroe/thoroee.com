import "./index.scss"
import React, { ReactNode, useRef } from "react"
import Header from "./Header"
import Body from "./Body"
import classNames from "classnames"
import ReactProps from "../../../utils/ReactProps"

Modal.Header = Header
Modal.Body = Body

export interface Props extends ReactProps<HTMLDivElement> {
    shown?: boolean
    onHide?: () => void 
    centered?: boolean
}

export default function Modal(props: Props) {
    const { shown, onHide, centered, children, className, ...other } = props
    const hidden = () => !(shown || false)
    const modalRef = useRef<HTMLDivElement>(null)

    const handleClick = (e: React.MouseEvent) => {
        const modal = modalRef.current

        if (modal && onHide) {
            const rect = modal.getBoundingClientRect()
            const verticallyInside = e.clientX >= rect.x && e.clientX <= rect.x + rect.width
            const horizontallyInside = e.clientY >= rect.y && e.clientY <= rect.y + rect.height
            
            if (!(verticallyInside && horizontallyInside)) {
                onHide()
            }
        }
    }

    return (
        <div className={classNames("modalContainer", { hidden: hidden(), centerContent: props.centered }, className)} onClick={handleClick}>
            <div className="modal" ref={modalRef} {...other}>
                <div className="closeWrapper">
                    <div className="closeButton" onClick={onHide}>
                        <div />
                        <div />
                    </div>
                </div>
                { children }
            </div>
        </div>
    )
}