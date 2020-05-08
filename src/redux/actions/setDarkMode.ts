export const SET_DARKMODE = "SET_DARKMODE"

export interface SetDarkModeAction {
    type: typeof SET_DARKMODE
    payload: boolean
}

const setDarkMode = (darkMode: boolean): SetDarkModeAction => ({
    type: SET_DARKMODE,
    payload: darkMode
})

export default setDarkMode

