import React from "react"
import ProductPage from "../../components/ProductPage";
import VStack from "../../components/Stacks/VStack";
import Picture from "../../components/Picture";
import Button from "../../components/Button";

export default function CastleSharing() {
    return (
        <ProductPage.Group>
            <ProductPage.Headline>Sharing passwords has never been so private.</ProductPage.Headline>
            <ProductPage.VisualContent 
                title={
                    <ProductPage.CaptionHeadline>Password Server</ProductPage.CaptionHeadline>
                }
                image={
                    <Picture src="server.png" />
                } 
                body={
                    <VStack spacing="1rem">
                        <ProductPage.BodyText>
                            The local server allows you to share your data across 
                            devices. But unlike other services your passwords 
                            stay right where you are. No cloud, no third party, 
                            only you and your passwords.
                        </ProductPage.BodyText>
                        <Button label="Learn More" />
                    </VStack>
                }
            />
            <ProductPage.VisualContent 
                title={
                    <ProductPage.CaptionHeadline>Web Client</ProductPage.CaptionHeadline>
                }
                image={
                    <Picture src="web-client.png" />
                } 
                body={
                    <VStack spacing="1rem">
                        <ProductPage.BodyText>
                        The web client is your connection to Castle. 
                        It might be a website, but all sensitive data is 
                        securely received from Castle over your local Wi-Fi. 
                        You can use all your devices with internet connection 
                        to access your Castle passwords. The passwords 
                        will not leave the place you are.
                        </ProductPage.BodyText>
                        <Button label="Let's go" />
                    </VStack>
                }
                floatRight
            />
        </ProductPage.Group>
    )
}