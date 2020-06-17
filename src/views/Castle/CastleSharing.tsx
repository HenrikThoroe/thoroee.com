import React from "react"
import ProductPage from "../../components/ProductPage";
import VStack from "../../components/Stacks/VStack";
import Picture from "../../components/Picture";
import Button from "../../components/Button";
import Mockup from "../../components/Mockup";
import Translation from "../../components/Translation";

export default function CastleSharing() {
    return (
        <ProductPage.Group>
            <ProductPage.Headline>
                <Translation select={lang => lang.productPages.castle.sharing.title} />
            </ProductPage.Headline>
            <ProductPage.VisualContent 
                title={
                    <ProductPage.CaptionHeadline>
                        <Translation select={lang => lang.productPages.castle.sharing.passwordServer} />
                    </ProductPage.CaptionHeadline>
                }
                image={
                    <Mockup>
                        <Mockup.Window>
                            <Picture src="server.png" />
                        </Mockup.Window>
                    </Mockup>
                } 
                body={
                    <VStack spacing="1rem">
                        <ProductPage.BodyText>
                            <Translation select={lang => lang.productPages.castle.sharing.passwordServerBody} />
                        </ProductPage.BodyText>
                        <Button label={<Translation select={lang => lang.general.learnMore} />} fitContent />
                    </VStack>
                }
            />
            <ProductPage.VisualContent 
                title={
                    <ProductPage.CaptionHeadline>
                        <Translation select={lang => lang.productPages.castle.sharing.webClient} /> 
                    </ProductPage.CaptionHeadline>
                }
                image={
                    <Mockup type="monitor">
                        <Mockup.Window>
                            <Picture src="web-client.png" />
                        </Mockup.Window>
                    </Mockup>
                } 
                body={
                    <VStack spacing="1rem">
                        <ProductPage.BodyText>
                            <Translation select={lang => lang.productPages.castle.sharing.webClientBody} /> 
                        </ProductPage.BodyText>
                        <Button label={<Translation select={lang => lang.general.letsgo} />} link="/castle" fitContent />
                    </VStack>
                }
                floatRight
            />
        </ProductPage.Group>
    )
}