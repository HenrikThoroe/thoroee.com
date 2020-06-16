const id = "state:darkMode"

export function loadDarkMode(): boolean {
    const data = localStorage.getItem(id)
    const dark = data === "true"

    if (dark) {
        document.documentElement.classList.add("darkMode")
    }

    return dark
}

export function persistDarkMode(dark: boolean) {
    localStorage.setItem(id, dark ? "true" : "false")
}