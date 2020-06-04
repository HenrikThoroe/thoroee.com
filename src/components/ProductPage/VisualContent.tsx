import { ReactNode } from "react";
import useCurrentBreakpoint from "../../utils/hooks/useCurrentBreakpoint";
import HStack from "../Stacks/HStack";
import React from "react";
import VStack from "../Stacks/VStack";

interface Props {
    children: ReactNode
    title: ReactNode
    image: ReactNode
}

export default function VisualContent(props: Props) {
    const breakpoint = useCurrentBreakpoint()

    if (breakpoint === "mobile") {
        return (
            <VStack className="mobileVC" spacing="1rem">
                { props.title }
                { props.image }
                { props.children }
            </VStack>
        )
    }

    return (
        <HStack className="desktopVC" spacing="1rem">
            { props.image }
            <VStack spacing="1rem">
                { props.title }
                { props.children }
            </VStack>
        </HStack>
    )
}