import React, { useState, useRef } from "react"
import "./index.scss"
import classNames from "classnames"

export type TextFieldStyle = "default" | "search"

export interface Props {
    style: TextFieldStyle
    placeholder?: string
    default?: string
    label?: string
    inline?: boolean
    flat?: boolean
}

export default function TextField(props: Props) {
    let inputType: string
    const [labelAtTop, setLabelAtTop] = useState(props.default !== undefined || props.placeholder !== undefined)
    const inputField = useRef<HTMLInputElement>(null)

    switch (props.style) {
        case "default":
            inputType = "text"
            break
        case "search": 
            inputType = "search"
            break
    }

    const handleInput = () => {
        if (inputField.current) {
            setLabelAtTop(inputField.current.value.length > 0)
        }
    }

    return (
        <div className={classNames({ textFieldContainer: true, inline: props.inline, flat: props.flat })}>
            <span className={classNames({ label: true, top: labelAtTop })}>{ props.label }</span>
            <input ref={inputField} onInput={handleInput} className={classNames({ textField: true })} type={inputType} placeholder={props.placeholder} defaultValue={props.default}></input>
        </div>
    )
}