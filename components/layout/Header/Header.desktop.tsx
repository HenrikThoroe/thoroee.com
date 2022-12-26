"use client"

import Link from "next/link"
import React, { useEffect, useRef, useState } from "react"
import { Project } from "../../../collections/generated-types"
import getProjects from "../../../lib/api/load/getProjects"
import useBreakpoint from "../../../lib/hooks/useBreakpoint"
import DropdownButton, {
  DropdownItem,
} from "../../DropdownButton/DropdownButton"
import Icon from "../../Icon/Icon"
import HStack from "../../Stack/HStack"
import Text from "../../Text/Text"
import style from "./style.module.scss"

/**
 * The navigation for larger desktop devices.
 * On tablets the project dropdown is hidden.
 */
export default function HeaderDesktop() {
  const ref = useRef<HTMLElement>(null)
  let observer: IntersectionObserver | undefined
  const breakpoint = useBreakpoint()
  const [projects, setProjects] = useState<Project[]>([])

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

  useEffect(() => {
    getProjects().then(setProjects)
  }, [])

  const ProjectButton = (): JSX.Element => {
    if (breakpoint === "desktop") {
      return (
        <DropdownButton
          variant="action"
          title="Projects"
          onChange={(item: Project) => window.open(item.github, "__blank")}
        >
          {projects.map((project) => (
            <DropdownItem label={project.name} value={project} />
          ))}
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
          <Link href="/resume">
            <Text variant="nav-link">Resumé</Text>
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
