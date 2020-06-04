import React, { useState } from "react"
import ProductPage from "../../components/ProductPage";
import TextContent from "../../components/Headline";
import Mockup from "../../components/Mockup";
import Transition from "../../components/Transition";
import Picture from "../../components/Picture";
import TabView from "../../components/TabView";

export default function CastleFeatures() {
    const [selectedTab, setSelectedTab] = useState(0)

    const tabs = ["Backups", "Multi-User", "Menu Bar Icon", "Safari Extension", "Overview"]

    const Tab1 = () => (
        <TextContent size="1.5rem" type="centered">
            Great products are made out from simplicity. 
            Castle follows exactly one rule: It’s your data, 
            so you have full controll about it. Most password managers can be put into one group.
            They are offline or online ones. Offline password managers have the great benefit that users
            can access their passwords from everywhere, while offline password managers 
            are more private because you do not have to trust a company that they do not read your passwords.
            Castle combines both worlds! Your passwords are always offline on your device, but you can 
            still share them very easy over your local network (Wi-Fi).
        </TextContent>
    )

    const Tab2 = () => (
        <TextContent size="1.5rem" type="centered">
            Hello World Hello World Hello World Hello World Hello World Hello World 
            Hello World Hello World Hello World Hello World Hello World Hello World 
            Hello World Hello World Hello World Hello World Hello World Hello World 
            Hello World Hello World Hello World Hello World Hello World Hello World 
            Hello World Hello World Hello World Hello World Hello World Hello World 
            Hello World Hello World Hello World Hello World Hello World Hello World 
            Hello World Hello World Hello World Hello World Hello World Hello World 
            Hello World Hello World Hello World Hello World Hello World Hello World 
        </TextContent>
    )
    
    return (
        <ProductPage.Group>
            <ProductPage.Headline>Every tool to control your data right at your side.</ProductPage.Headline>
            <Mockup>
                <Mockup.Window>
                    <Transition>
                        <Picture src={selectedTab === 0 ? "server.png" : "web-client.png"  } />
                    </Transition>
                </Mockup.Window>
            </Mockup>
            <TabView tabs={tabs} selectedTab={selectedTab} onSelectTab={setSelectedTab}>
                {
                    selectedTab === 0 ? 
                        <Tab1 /> :
                        <Tab2 />
                }
            </TabView>
        </ProductPage.Group>
    )
}