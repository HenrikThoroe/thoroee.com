import React from "react";
import Container from "../../components/Container";
import Icon from "../../components/Icon";
import HStack from "../../components/Stacks/HStack";
import ProductPage from "../../components/ProductPage";
import CastlePresentation from "./CastlePresentation";
import CastleSharing from "./CastleSharing";
import CastleFeatures from "./CastleFeatures";
import Picture from "../../components/Picture";

export default function Castle() {
    return (
        <Container>
            <ProductPage>
                <CastlePresentation />
                <CastleSharing />
                <CastleFeatures />
            </ProductPage>
        </Container>
    )
}