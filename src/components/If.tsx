import React, { ReactNode, useState, useEffect } from "react";

interface Props<T> {
    children: ReactNode
    condition?: T
}

export default function If<T>(props: Props<T>): JSX.Element {
    const [display, setDisplay] = useState(false)

    const validateCondition = (condition?: T): boolean => {
        if (typeof condition === "boolean") {
            return condition === true
        } else if (typeof condition === "function") {
            return validateCondition(condition.call(null))
        } else {
            return condition !== undefined && condition !== null
        }
    }

    useEffect(() => {
        setDisplay(validateCondition(props.condition))
        console.log("check condition")
    }, [props.condition])

    return (
        <>
            { display ? props.children : undefined }
        </>
    )
}   