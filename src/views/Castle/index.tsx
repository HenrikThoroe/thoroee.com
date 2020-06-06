import React from "react";
import Container from "../../components/Container";
import ProductPage from "../../components/ProductPage";
import CastlePresentation from "./CastlePresentation";
import CastleSharing from "./CastleSharing";
import CastleFeatures from "./CastleFeatures";
import CastleWelcome from "./CastleWelcome";
import FluidBox from "../../components/FluidBox";
import "./index.scss"

export default function Castle() {
    return (
        <Container>
            <ProductPage>
                <CastleWelcome />
                <CastlePresentation />
                <FluidBox type="Wave" fill="var(--background-secondary)">
                    <CastleSharing />
                </FluidBox>
                <CastleFeatures />
            </ProductPage>
        </Container>
    )
}