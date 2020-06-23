import RootState from "../state";

export default function selectLanguage(state: RootState) {
    return state.language
}