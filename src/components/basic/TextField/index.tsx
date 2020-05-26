import React, { useState, useRef, ReactNode } from "react"
import "./index.scss"
import classNames from "classnames"
import ReactProps from "../../../utils/ReactProps"

export type TextFieldStyle = "default" | "search" | "email"

export interface Props extends ReactProps<HTMLDivElement>  {
    inputStyle: TextFieldStyle
    placeholder?: string
    defaultContent?: string
    label?: ReactNode
    inline?: boolean
    flat?: boolean
    required?: boolean
    multiline?: boolean
    onUpdate?: (content: string) => void
    inputRef?: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
    content?: string
}

export default function TextField(props: Props) {
    const { inputRef, multiline, onUpdate, inputStyle, placeholder, defaultContent, label, inline, flat, required, className, ...other } = props
    let inputType: string
    const [labelAtTop, setLabelAtTop] = useState(defaultContent !== undefined || placeholder !== undefined)
    const [invalid, setInvalid] = useState(false)
    const inputField = useRef<HTMLInputElement>(null)
    const textArea = useRef<HTMLTextAreaElement>(null)

    switch (inputStyle) {
        case "default":
            inputType = "text"
            break
        case "search": 
            inputType = "search"
            break
        case "email":
            inputType = "email"
            break
    }

    const currentText = () => {
        if (inputRef?.current) {
            return inputRef.current.value
        } else if (inputField.current) {
            return inputField.current.value
        } else {
            return textArea.current!.value
        }
    }

    const handleInput = () => {
        const text = currentText()

        if (text !== undefined) {
            setLabelAtTop(text.length > 0)

            if (required) {
                setInvalid(text.length === 0)
            }

            if (inputStyle === "email" && !/\S+@\S+\.\S+/.test(text)) {
                setInvalid(true)
            }

            onUpdate?.call(null, text)
        }
    }

    return (
        <div {...other} className={classNames({ textFieldContainer: true, inline: inline, flat: flat, invalid: invalid }, className)}>
            <span className={classNames({ label: true, top: labelAtTop })}>{ label }</span>
            {
                multiline 
                ? 
                <textarea ref={inputRef as any || textArea} onInput={handleInput} className={classNames("textarea")} placeholder={placeholder} defaultValue={props.defaultContent} required={required} value={props.content}></textarea>
                : 
                <input ref={inputRef as any || inputField} onInput={handleInput} className={classNames({ textField: true })} type={inputType} placeholder={placeholder} defaultValue={props.defaultContent} required={required} value={props.content}></input>
            }
        </div>
    )
}