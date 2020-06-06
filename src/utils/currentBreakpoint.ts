import remToPx from "./remToPx"

export type Breakpoint = "mobile" | "desktop" | "mobile-small"

export default function currentBreakpoint(forWidth?: number): Breakpoint {
    const width = forWidth ? forWidth : document.documentElement.clientWidth

    if (remToPx(70) < width) {
        return "desktop"
    } else if (413 < width) {
        return "mobile"
    } else {
        return "mobile-small"
    }
}