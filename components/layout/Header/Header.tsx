"use client"

import useBreakpoint from "../../../lib/useBreakpoint"
import HeaderMobile from "./Header.mobile"
import HeaderDesktop from "./Header.desktop"

/**
 * The `Header` component is a top bar navigation.
 * Depending on the client side the main
 * sites and a list of selected projects are
 * linked.
 */
export default function Header() {
  const breakpoint = useBreakpoint()

  if (breakpoint === "mobile" || breakpoint === "tablet") {
    return <HeaderMobile />
  }

  return <HeaderDesktop />
}
