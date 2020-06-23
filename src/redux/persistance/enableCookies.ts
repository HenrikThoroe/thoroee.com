const id = "state:enableCookie"

export function loadEnableCookies(): boolean {
    const data = localStorage.getItem(id)
    return data === "true"
}

export function persistEnableCookies(allowed: boolean) {
    if (allowed) {
        localStorage.setItem(id, "true")
    } else {
        localStorage.clear()
        sessionStorage.clear()

        document.cookie.split(";").forEach(cookie => {
            const eqPos = cookie.indexOf("=")
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie

            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT"
        })
    }
}