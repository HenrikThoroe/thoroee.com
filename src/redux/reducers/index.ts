import RootState, { initialState } from "../state"
import { SetLanguageAction } from "../actions/setLanguage"
import { SetDarkModeAction } from "../actions/setDarkMode"

function languageReducer(state: RootState = initialState, action: SetLanguageAction | SetDarkModeAction): RootState {
    switch (action.type) {
        case "SET_DARKMODE":
            return {
                ...state,
                darkMode: action.payload
            }
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload
            }
    }

    return state
}

export default languageReducer