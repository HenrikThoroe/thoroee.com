import { useSelector } from "react-redux"
import selectLanguage from "../../redux/selectors/selectLanguage"
import { useState, useEffect } from "react"
import React from "react"
import translate from "../../Localisation/translate"

export interface Props {
    children?: string
    for?: string
}

export default function Translation(props: Props) {
    const language = useSelector(selectLanguage)
    const [text, setText] = useState("Loading...")
    const key = props.for || props.children || ""

    console.log(props)

    useEffect(() => {
        translate(key, language)
            .then(translation => setText(translation))
            .catch(e => console.error(e))
    }, [language])

    return (
        <>{ text }</>
    )
}