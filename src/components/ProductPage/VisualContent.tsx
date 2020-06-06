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

    const Title = () => (
        <div className={classNames("title", props.floatRight ? "right" : undefined)}>
            { props.title }
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
                <Image />
                <Title />
                <Body />
            </VStack>
        )
    }

    if (props.floatRight) {
        return (
            <VStack className="vc-alt" spacing="1.5rem">
                <Image />
                <HStack spacing="3rem" className="info">
                    <Body />
                    <Title />
                </HStack>
            </VStack>
        )
    } 

    // return (
    //     <HStack className="vc" spacing="1rem">
    //         <Image />
    //         <VStack spacing="1rem">
    //             <Title />
    //             <Body />
    //         </VStack>
    //     </HStack>
    // )

    return (
        <VStack className="vc-alt" spacing="1.5rem">
            <Image />
            <HStack spacing="3rem" className="info">
                <Title />
                <Body />
            </HStack>
        </VStack>
    )
}