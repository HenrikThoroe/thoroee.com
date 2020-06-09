import React, { useState } from "react"
import ProductPage from "../../components/ProductPage";
import TextContent from "../../components/Headline";
import Mockup from "../../components/Mockup";
import Transition from "../../components/Transition";
import Picture from "../../components/Picture";
import TabView from "../../components/TabView";
import Translation from "../../components/Translation";

export default function CastleFeatures() {
    const [selectedTab, setSelectedTab] = useState(0)

    const tabs = [
        <Translation select={lang => lang.productPages.castle.features.backups.title} />,
        <Translation select={lang => lang.productPages.castle.features.multiUser.title} />,
        <Translation select={lang => lang.productPages.castle.features.menuBar.title} />,
        <Translation select={lang => lang.productPages.castle.features.safari.title} />,
        <Translation select={lang => lang.productPages.castle.features.overview.title} /> 
    ]

    const getTranslation = (index: number) => {
        switch (index) {
            case 0:
                return <Translation select={lang => lang.productPages.castle.features.backups.body} /> 
            case 1:
                return <Translation select={lang => lang.productPages.castle.features.multiUser.body} /> 
            case 2:
                return <Translation select={lang => lang.productPages.castle.features.menuBar.body} />
            case 3: 
                return <Translation select={lang => lang.productPages.castle.features.safari.body} />  
            case 4:
            default: 
                return <Translation select={lang => lang.productPages.castle.features.overview.body} /> 
        }
    }
    
    return (
        <ProductPage.Group>
            <ProductPage.Headline>
                <Translation select={lang => lang.productPages.castle.features.title} /> 
            </ProductPage.Headline>
            <Mockup>
                <Mockup.Window>
                    <Transition>
                        <Picture src={selectedTab === 0 ? "server.png" : "web-client.png"  } />
                    </Transition>
                </Mockup.Window>
            </Mockup>
            <TabView tabs={tabs} selectedTab={selectedTab} onSelectTab={setSelectedTab}>
                <ProductPage.BodyText>
                    { getTranslation(selectedTab) }
                </ProductPage.BodyText>
            </TabView>
        </ProductPage.Group>
    )
}