import { ReactNode } from "react";
import useCurrentBreakpoint from "../../utils/hooks/useCurrentBreakpoint";
import HStack from "../Stacks/HStack";
import React from "react";
import VStack from "../Stacks/VStack";
import classNames from "classnames";

interface Props {
    body: ReactNode
    title: ReactNode
    image: ReactNode
    floatRight?: boolean
}

export default function VisualContent(props: Props) {
    const breakpoint = useCurrentBreakpoint()

    const Body = () => (
        <div className={classNames("body", props.floatRight ? "right" : undefined)}>
            { props.body }
        </div>
    )

    const Image = () => (
        <div className={classNames("image", props.floatRight ? "right" : undefined)}>
            { props.image }
        </div>
    )

    if (breakpoint === "mobile") {
        return (
            <VStack className="vc" spacing="1rem">
                { props.title }
                <Image />
                <Body />
            </VStack>
        )
    }

    if (props.floatRight) {
        return (
            <HStack className="vc" spacing="1rem">
                <VStack spacing="1rem">
                    { props.title }
                    <Body />
                </VStack>
                <Image />
            </HStack>
        )
    } 

    return (
        <HStack className="vc" spacing="1rem">
            <Image />
            <VStack spacing="1rem">
                { props.title }
                <Body />
            </VStack>
        </HStack>
    )
}