import Language from "../state/Language";
import { loadEnableCookies } from "./enableCookies";

const id = "state:language"

export function loadLanguage(): Language {
    const data = localStorage.getItem(id)

    if (data && (data === "english" || data === "german")) {
        return data
    } 

    return "english"
}

export function persistLanguage(language: Language) {
    if (loadEnableCookies()) {
        localStorage.setItem(id, language)
    }
}