"use client"

import Button from "../../../Button/Button"
import Card from "../../../Card/Card"
import HStack from "../../../Stack/HStack"
import VStack from "../../../Stack/VStack"
import ZStack from "../../../Stack/ZStack"
import Text from "../../../Text/Text"
import Image from "next/image"
import useBreakpoint from "../../../../lib/hooks/useBreakpoint"
import style from "./style.module.scss"
import { resources } from "../../../../lib/utils/resources"

interface Links {
  store: string
  source: string
}

interface Props extends Links {
  title: string
  body: string
}

const ButtonGroup = ({ source, store }: Links) => (
  <HStack spacing={20}>
    <Button variant="contrast" action={store} trailing="apple">
      App Store
    </Button>
    <Button variant="contrast" action={source} trailing="github">
      GitHub
    </Button>
  </HStack>
)

export default function CardPresentation(props: Props) {
  const { title, body } = props
  const breakpoint = useBreakpoint()

  if (breakpoint === "mobile") {
    return (
      <ZStack
        className={style.clip}
        background={
          <Image
            src={resources.images.shareYourWifiBackground.url}
            alt="Share Your Wifi Card Background"
            width={1000}
            height={1000}
            className={style["background-image"]}
          />
        }
      >
        <VStack>
          <VStack
            grow
            alignment="center"
            spacing={60}
            padding={["3rem", "1rem"]}
          >
            <VStack spacing={40}>
              <Text variant="hero-heading">{title}</Text>
              <Text variant="card-hero-title">{body}</Text>
            </VStack>
            <ButtonGroup {...props} />
          </VStack>
        </VStack>
      </ZStack>
    )
  }

  return (
    <Card className={style.card}>
      <ZStack
        background={
          <Image
            src={resources.images.shareYourWifiBackground.url}
            alt="Share Your Wifi Card Background"
            width={1000}
            height={1000}
            className={style["background-image"]}
          />
        }
      >
        <VStack grow alignment="center" spacing={60} className={style.content}>
          <VStack spacing={40}>
            <Text variant="hero-heading">{title}</Text>
            <Text variant="card-hero-title">{body}</Text>
          </VStack>
          <ButtonGroup {...props} />
        </VStack>
      </ZStack>
    </Card>
  )
}
