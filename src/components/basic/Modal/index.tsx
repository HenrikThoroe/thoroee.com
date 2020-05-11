import "./index.scss"
import React, { ReactNode, useRef } from "react"
import Header from "./Header"
import Body from "./Body"
import classNames from "classnames"

Modal.Header = Header
Modal.Body = Body

export interface Props {
    children: ReactNode
    shown?: boolean
    onHide?: () => void 
    centered?: boolean
}

export default function Modal(props: Props) {
    const hidden = () => !(props.shown || false)
    const modalRef = useRef<HTMLDivElement>(null)

    const handleClick = (e: React.MouseEvent) => {
        const modal = modalRef.current

        if (modal && props.onHide) {
            const rect = modal.getBoundingClientRect()
            const verticallyInside = e.clientX >= rect.x && e.clientX <= rect.x + rect.width
            const horizontallyInside = e.clientY >= rect.y && e.clientY <= rect.y + rect.height
            
            if (!(verticallyInside && horizontallyInside)) {
                props.onHide()
            }
        }
    }

    return (
        <div className={classNames("modalContainer", { hidden: hidden(), centerContent: props.centered })} onClick={handleClick}>
            <div className="modal" ref={modalRef}>
                <div className="closeWrapper">
                    <div className="closeButton" onClick={props.onHide}>
                        <div />
                        <div />
                    </div>
                </div>
                { props.children }
            </div>
        </div>
    )
}