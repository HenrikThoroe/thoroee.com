import Language from "../redux/state/Language"
import cache from "./cache"

export default async function translate(key: string, language: Language): Promise<string> {
    try {
        const dict = await cache(language)
        const translation = dict.get(key)

        if (!translation) {
            console.warn(`Missing translation for key '${key}' in language pack '${language}'`)
            return `Ooops, there's something missing.`
        }

        return translation

    } catch (e) {

        console.warn(`Failed to load language pack '${language}'.`, e)
        return `Cannot read language files (${language}).`
    }
}