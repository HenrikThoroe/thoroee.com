import React from "react"
import ProductPage from "../../components/ProductPage";
import Picture from "../../components/Picture";
import Icon from "../../components/Icon";
import HStack from "../../components/Stacks/HStack";
import VStack from "../../components/Stacks/VStack";
import Headline from "../../components/TextContent";
import Translation from "../../components/Translation";

export default function CastlePresentation() {
    return (
        <ProductPage.Group>
            <ProductPage.Title>
                <Translation select={lang => lang.productPages.castle.welcome.title} />
            </ProductPage.Title>
            <ProductPage.HeroText>
                <Translation select={lang => lang.productPages.castle.welcome.heroText} />
            </ProductPage.HeroText>
        </ProductPage.Group>
    )
}