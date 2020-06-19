import RootState from "../state";

export default function selectEnableCookies(state: RootState) {
    return state.enableCookies
}