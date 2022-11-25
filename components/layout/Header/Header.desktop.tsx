"use client"

import Link from "next/link"
import HStack from "../../Stack/HStack"
import style from "./style.module.scss"
import Text from "../../Text/Text"
import DropdownButton, {
  DropdownItem,
} from "../../DropdownButton/DropdownButton"
import { useEffect, useRef } from "react"
import Icon from "../../Icon/Icon"
import useBreakpoint from "../../../lib/hooks/useBreakpoint"

/**
 * The navigation for larger desktop devices.
 * On tablets the project dropdown is hidden.
 */
export default function HeaderDesktop() {
  const ref = useRef<HTMLElement>(null)
  let observer: IntersectionObserver | undefined
  const breakpoint = useBreakpoint()

  const setPinState = (el: Element) => {
    const shouldPin = window.scrollY <= 0
    const isPinned = el.classList.contains(style.pinned)

    if (shouldPin && !isPinned) {
      el.classList.add(style.pinned)
    }

    if (!shouldPin && isPinned) {
      el.classList.remove(style.pinned)
    }
  }

  useEffect(() => {
    if (!observer) {
      observer = new IntersectionObserver(
        ([entry]) => setPinState(entry.target),
        { threshold: 1 },
      )
    }

    if (ref.current) {
      observer.observe(ref.current)
      setPinState(ref.current)
    }
  }, [ref])

  // TODO: Fetch projects from backend and forward to given sites on select.
  const ProjectButton = (): JSX.Element => {
    if (breakpoint === "desktop") {
      return (
        <DropdownButton
          variant="action"
          title="Products"
          onChange={(item: string) => console.log(item)}
        >
          <DropdownItem label="Share My WiFi" value="share-my-wifi" />
          <DropdownItem label="Castle" value="castle" />
          <DropdownItem label="Flyde" value="flyde" />
        </DropdownButton>
      )
    }

    return <></>
  }

  return (
    <header className={style.main} ref={ref}>
      <HStack alignment="space-between" className={style.content}>
        <Link href="/">
          <HStack className={style.edge} alignment="leading" spacing="s">
            <Icon name="logo" width="24" height="24" />
            <Text variant="banner">THORØE.com</Text>
          </HStack>
        </Link>
        <HStack spacing="xxl">
          <Link href="/journey">
            <Text variant="nav-link">Journey</Text>
          </Link>
          <Link href="/references">
            <Text variant="nav-link">References</Text>
          </Link>
          <Link href="/contact">
            <Text variant="nav-link">Contact</Text>
          </Link>
        </HStack>
        <HStack className={style.edge} alignment="trailing" spacing="s">
          <ProjectButton />
          <Link href="https://github.com/HenrikThoroe" target="__blank">
            <Icon name="github" width="34" height="34" />
          </Link>
        </HStack>
      </HStack>
    </header>
  )
}
