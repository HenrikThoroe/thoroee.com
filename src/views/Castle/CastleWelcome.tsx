import React from "react";
import Picture from "../../components/Picture";
import Mockup from "../../components/Mockup";
import Icon from "../../components/Icon";
import HStack from "../../components/Stacks/HStack";
import VStack from "../../components/Stacks/VStack";
import Headline from "../../components/TextContent";
import ProductPage from "../../components/ProductPage";
import Container from "../../components/Container";
import useCurrentBreakpoint from "../../utils/hooks/useCurrentBreakpoint";

function Default() {
    return (
        <HStack alignment="center" className="hero-wrapper">
            <Container>
                <HStack className="hero-container" spacing="2rem">
                    <Icon name="castle" className="appIcon" />
                    <VStack spacing=".5rem">
                        <Headline size="2rem" component="h2" bold>Castle</Headline>
                        <Headline size="1.5rem" type="subtitle" component="h2">Password Manager</Headline>
                    </VStack>
                </HStack>
            </Container>
        </HStack>
    )
}

function Small() {
    return (
        <HStack alignment="center" className="hero-wrapper">
            <Container>
                <HStack className="hero-container" spacing="2rem">
                    <VStack spacing="1rem">
                        <HStack spacing="1rem" verticalAlignment="center">
                            <Icon name="castle" className="appIcon" />
                            <Headline size="2rem" component="h2" bold>Castle</Headline>
                        </HStack>
                        <Headline size="1.5rem" type="subtitle" component="h2">Password Manager</Headline>
                    </VStack>
                </HStack>
            </Container>
        </HStack>
    )
}

export default function CastleWelcome() {
    const bp = useCurrentBreakpoint()

    if (bp === "mobile-small") {
        return <Small />
    }

    return <Default />
}