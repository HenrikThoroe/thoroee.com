import React from "react";
import RippleEffect from "../RippleEffect";

export interface Props {
    selected?: boolean
    onSelect?: () => void
    children: string
}

export default function Item(props: Props) {
    const handleClick = () => {
        if (props.selected !== true && props.onSelect) {
            props.onSelect()
        }
    }

    return (
        <RippleEffect>
            <div className="listItem" onClick={handleClick}>
                { props.children }
                { props.selected ? <div className="selected"><div /><div /></div> : undefined }
            </div>
        </RippleEffect>
    )
}