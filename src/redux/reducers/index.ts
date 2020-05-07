import RootState, { initialState } from "../state"
import { SetLanguageAction } from "../actions/setLanguage"
import { combineReducers } from "redux"

function languageReducer(state: RootState = initialState, action: SetLanguageAction): RootState {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                // ...state,
                language: action.payload
            }
    }

    return state
}

export default languageReducer