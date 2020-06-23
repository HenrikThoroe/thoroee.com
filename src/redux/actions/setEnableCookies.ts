export const SET_ENABLECOOKIES = "SET_ENABLECOOKIES"

export interface SetEnableCookiesAction {
    type: typeof SET_ENABLECOOKIES
    payload: boolean
}

const setEnableCookies = (allowed: boolean): SetEnableCookiesAction => ({
    type: SET_ENABLECOOKIES,
    payload: allowed
})

export default setEnableCookies

