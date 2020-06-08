import React from "react";
import Container from "../../components/Container";
import ProductPage from "../../components/ProductPage";
import CastlePresentation from "./CastlePresentation";
import CastleSharing from "./CastleSharing";
import CastleFeatures from "./CastleFeatures";
import CastleWelcome from "./CastleWelcome";
import FluidBox from "../../components/FluidBox";
import "./index.scss"
import Button from "../../components/Button";

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
                <ProductPage.Group>
                    <ProductPage.Headline>
                        Interested?
                    </ProductPage.Headline>
                    <ProductPage.HeroText>
                        Do you want to test out Castle?
                        Buy it on the Mac App Store for only $9.99.
                    </ProductPage.HeroText>
                    <Button style="comic" label="Buy on Mac App Store" />
                    <Button style="comic" label="View Data Protection Declaration" />
                </ProductPage.Group>
            </ProductPage>
        </Container>
    )
}