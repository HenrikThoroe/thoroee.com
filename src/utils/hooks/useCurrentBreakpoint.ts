import useCurrentWitdh from './useCurrentWidth'
import currentBreakpoint from "../currentBreakpoint"

export default function useCurrentBreakpoint() {
    let width = useCurrentWitdh()

    return currentBreakpoint(width)
}