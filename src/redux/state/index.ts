import Language from "./Language";

export const initialState: RootState = {
    language: "english",
    darkMode: false
}

export default interface RootState {
    language: Language
    darkMode: boolean
}