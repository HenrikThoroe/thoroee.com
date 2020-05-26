import { useSelector } from "react-redux"
import selectLanguage from "../../redux/selectors/selectLanguage"
import { useState, useEffect } from "react"
import React from "react"
import translate from "../../Localisation/translate"
import LanguageSet from "../../Localisation/data/LanguageSet"
import load from "../../Localisation/load"

export interface Props {
    select: (set: LanguageSet) => string
}

export default function Translation(props: Props) {
    const language = useSelector(selectLanguage)

    return (
        <>{ props.select!(load(language)) }</>
    )
}