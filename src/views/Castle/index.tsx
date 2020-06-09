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
import Translation from "../../components/Translation";

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
                        <Translation select={lang => lang.productPages.castle.presentation.title} /> 
                    </ProductPage.Headline>
                    <ProductPage.HeroText>
                        <Translation select={lang => lang.productPages.castle.presentation.text} /> 
                    </ProductPage.HeroText>
                    <Button style="comic" label={<Translation select={lang => lang.productPages.castle.presentation.buy} /> } />
                    <Button style="comic" label={<Translation select={lang => lang.productPages.castle.presentation.viewDataProtection} /> } />
                </ProductPage.Group>
            </ProductPage>
        </Container>
    )
}