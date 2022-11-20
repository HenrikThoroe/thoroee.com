import { useEffect, useState } from "react"
import breakpoints from "../styles/breakpoints.module.scss"

export type Breakpoint = "mobile" | "tablet" | "laptop" | "desktop"

function parseBreakpoint(bp: Breakpoint): number {
  const val: string | undefined = breakpoints[bp]

  try {
    return parseInt(val?.substring(0, val.length - 2)) ?? -1
  } catch {
    return -1
  }
}

function fetchBreakpoint(): Breakpoint {
  const available: Breakpoint[] = ["desktop", "laptop", "tablet", "mobile"]
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0,
  )

  for (const bp of available) {
    if (width >= parseBreakpoint(bp)) {
      return bp
    }
  }

  return "mobile"
}

/**
 * React hook, that returns and updates the current breakpoint
 * marker.
 */
export default function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>(fetchBreakpoint)

  const handleResize = () => {
    setBreakpoint(fetchBreakpoint())
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return breakpoint
}
