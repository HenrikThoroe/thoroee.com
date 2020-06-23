import english from "./data/english"
import german from "./data/german"
import Language from "../redux/state/Language"
import LanguageSet from "./data/LanguageSet"

export default function load(language: Language): LanguageSet {
    switch (language) {
        case "english":
            return english
        case "german":
            return german
    }
}