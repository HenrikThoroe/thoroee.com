import RootState, { initialState } from "../state"
import { SetLanguageAction } from "../actions/setLanguage"
import { SetDarkModeAction } from "../actions/setDarkMode"
import { persistDarkMode } from "../persistance/darkMode"
import { persistLanguage } from "../persistance/language"

function rootReducer(state: RootState = initialState, action: SetLanguageAction | SetDarkModeAction): RootState {
    switch (action.type) {
        case "SET_DARKMODE":
            persistDarkMode(action.payload)
            return {
                ...state,
                darkMode: action.payload
            }
        case "SET_LANGUAGE":
            persistLanguage(action.payload)
            return {
                ...state,
                language: action.payload
            }
    }

    return state
}

export default rootReducer