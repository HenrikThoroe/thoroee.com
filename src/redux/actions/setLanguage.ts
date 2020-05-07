import Language from "../state/Language";

export const SET_LANGUAGE = "SET_LANGUAGE"

export interface SetLanguageAction {
    type: typeof SET_LANGUAGE
    payload: Language
}

const setLanguage = (language: Language): SetLanguageAction => ({
    type: SET_LANGUAGE,
    payload: language
})

export default setLanguage

