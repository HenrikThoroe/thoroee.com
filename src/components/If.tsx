import React, { ReactNode } from "react";

interface Props<T> {
    children: ReactNode
    condition?: T
}

export default function If<T>(props: Props<T>): JSX.Element {
    const shouldRender = () => {
        if (props.condition && typeof props.condition === "boolean") {
            return props.condition === true
        } else if (props.condition !== undefined) {
            return props.condition !== null
        } else {
            return false
        }
    }

    if (shouldRender()) {
        return <>{ props.children }</>
    }

    return <></>
}   