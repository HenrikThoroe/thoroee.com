import RootState from "../state";

export default function selectDarkMode(state: RootState) {
    return state.darkMode
}