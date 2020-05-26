import { useSelector } from "react-redux"
import selectLanguage from "../redux/selectors/selectLanguage"
import { useState, useEffect } from "react"
import React from "react"
import translate from "../localisation/translate"
import LanguageSet from "../localisation/data/LanguageSet"
import load from "../localisation/load"

export interface Props {
    select: (set: LanguageSet) => string
}

export default function Translation(props: Props) {
    const language = useSelector(selectLanguage)

    return (
        <>{ props.select!(load(language)) }</>
    )
}