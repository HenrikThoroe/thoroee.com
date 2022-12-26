"use client"

import classNames from "classnames"
import Link from "next/link"
import Icon from "../../Icon/Icon"
import Text from "../../Text/Text"
import MenuButton from "../../MenuButton/MenuButton"
import HStack from "../../Stack/HStack"
import VStack from "../../Stack/VStack"
import style from "./style.module.scss"
import { useState } from "react"

/**
 * The header for smaller devices.
 * Features an expandable 'burger' navigation
 * without project references.
 */
export default function HeaderMobile() {
  const [open, setOpen] = useState(false)

  return (
    <header className={classNames(style.main, { [style.open]: open })}>
      <VStack className={style["mobile-content"]} grow padding={[0, 30]}>
        <HStack alignment="space-between" grow="horizontal">
          <Link href="/">
            <HStack spacing="s">
              <Icon name="logo" width="24" height="24" />
              <Text variant="banner">THORØE.com</Text>
            </HStack>
          </Link>
          <MenuButton onClick={setOpen} />
        </HStack>
        <VStack
          grow="horizontal"
          spacing={20}
          className={classNames(style.dropdown, { [style.open]: open })}
        >
          <HStack alignment="leading" spacing={15} grow="horizontal">
            <Link href="https://github.com/HenrikThoroe" target="__blank">
              <Icon name="github" width="34" height="34" />
            </Link>
          </HStack>
          <VStack spacing={15} horizontalAlignment="leading" grow="horizontal">
            <Link href="/journey">
              <Text variant="nav-link">Journey</Text>
            </Link>
            <Link href="/resume">
              <Text variant="nav-link">Resumé</Text>
            </Link>
            <Link href="/contact">
              <Text variant="nav-link">Contact</Text>
            </Link>
          </VStack>
        </VStack>
      </VStack>
    </header>
  )
}
