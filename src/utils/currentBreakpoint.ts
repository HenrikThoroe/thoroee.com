import remToPx from "./remToPx"

export type Breakpoint = "mobile" | "desktop"

export default function currentBreakpoint(forWidth?: number): Breakpoint {
    const width = forWidth ? forWidth : document.documentElement.clientWidth

    if (remToPx(70) < width) {
        return "desktop"
    } else {
        return "mobile"
    }
}