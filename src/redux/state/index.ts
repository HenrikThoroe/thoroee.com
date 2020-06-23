import Language from "./Language";
import { loadLanguage } from "../persistance/language";
import { loadDarkMode } from "../persistance/darkMode";
import { loadEnableCookies } from "../persistance/enableCookies";

export const initialState: RootState = {
    language: loadLanguage(),
    darkMode: loadDarkMode(),
    enableCookies: loadEnableCookies()
}

export default interface RootState {
    language: Language
    darkMode: boolean
    enableCookies: boolean
}