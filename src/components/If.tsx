import React, { ReactNode } from "react";

interface Props<T> {
    children: ReactNode
    data: T
    when?: (arg0: T) => boolean
}

export default function If<T>(props: Props<T>): JSX.Element {
    const shouldRender = () => {
        if (props.when) {
            return props.when(props.data)
        } else {
            return props.data !== undefined && props.data !== null 
        }
    }

    if (shouldRender()) {
        return <>{ props.children }</>
    }

    return <></>
}   