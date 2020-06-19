export const SET_ENABLECOOKIES = "SET_ENABLECOOKIES"

export interface SetEnableCookiesAction {
    type: typeof SET_ENABLECOOKIES
    payload: boolean
}

const setSetEnableCookies = (allowed: boolean): SetEnableCookiesAction => ({
    type: SET_ENABLECOOKIES,
    payload: allowed
})

export default setSetEnableCookies

