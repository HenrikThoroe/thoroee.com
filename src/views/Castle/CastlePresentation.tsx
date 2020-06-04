import React from "react"
import ProductPage from "../../components/ProductPage";

export default function CastlePresentation() {
    return (
        <ProductPage.Group>
            <ProductPage.Title>Castle. Designed for highest security.</ProductPage.Title>
            <ProductPage.HeroText>
                Great products are made out from simplicity. 
                Castle follows exactly one rule: It’s your data, 
                so you have full controll about it. Most password managers can be put into one group.
                They are offline or online ones. Offline password managers have the great benefit that users
                can access their passwords from everywhere, while offline password managers 
                are more private because you do not have to trust a company that they do not read your passwords.
                Castle combines both worlds! Your passwords are always offline on your device, but you can 
                still share them very easy over your local network (Wi-Fi).
            </ProductPage.HeroText>
        </ProductPage.Group>
    )
}