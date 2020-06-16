import Language from "./Language";
import { loadLanguage } from "../persistance/language";
import { loadDarkMode } from "../persistance/darkMode";

export const initialState: RootState = {
    language: loadLanguage(),
    darkMode: loadDarkMode()
}

export default interface RootState {
    language: Language
    darkMode: boolean
}