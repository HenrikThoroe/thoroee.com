import LanguageSet from "./data/LanguageSet"
import load from "./load"
import Language from "../redux/state/Language"

export default function translate(lang: Language, callback: (lang: LanguageSet) => string): string {
    return callback(load(lang))
}