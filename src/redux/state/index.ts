import Language from "./Language";

export const initialState: RootState = {
    language: "english"
}

export default interface RootState {
    language: Language
}