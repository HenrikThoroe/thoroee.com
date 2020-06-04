import VStack from "../../components/Stacks/VStack";
import React, { useState } from "react";
import Headline from "../../components/Headline";
import TextContent from "../../components/TextContent"
import HStack from "../../components/Stacks/HStack";
import Button from "../../components/Button";
import Picture from "../../components/Picture";
import Container from "../../components/Container";
import TabView from "../../components/TabView";
import Transition from "../../components/Transition";

export default function CastleContent() {
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
        <VStack className="castle-main" spacing="10rem">
            <VStack spacing="2rem">
                <Headline type="centered" size="4rem" bold>Designed for highest Security.</Headline>
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
            </VStack>
            <VStack spacing="2rem">
                <Headline type="centered" size="4rem" bold>Sharing passwords has never been so private.</Headline>
                <HStack spacing="1rem" verticalAlignment="start">
                    <Picture src="server.png" className="side-image" />
                    <VStack spacing="1rem">
                        <Headline size="1.5rem" bold>Password Server</Headline>
                        <TextContent>
                            The local server enables you to share your data across 
                            devices. But unlike other services your passwords 
                            stay right where you are. No cloud, no third party, 
                            only you and your passwords.
                        </TextContent>
                        <Button label="Learn More" />
                    </VStack>
                </HStack>
                <HStack spacing="1rem" verticalAlignment="start">
                    <VStack spacing="1rem">
                        <Headline size="1.5rem" bold>Web Client</Headline>
                        <TextContent>
                            The web client is your connection to Castle. 
                            It might be a website, but all sensitive data is 
                            securely received from Castle over your local Wi-Fi. 
                            You can use all your devices with internet connection 
                            to access your Castle passwords. The passwords 
                            will not leave the place you are.
                        </TextContent>
                        <Button label="Let's go" />
                    </VStack>
                    <Picture src="web-client.png" className="right-side-image" />
                </HStack>
            </VStack>

            <VStack spacing="2rem" alignment="start" horizontalAlignment="start">
                <Headline type="centered" size="4rem" bold>Every tool to control your data right at your side.</Headline>
                <Transition>
                    <Picture 
                        src={selectedTab === 0 ? "server-mockup.png" : "server-mockup.png"  }
                        className="hero-image" 
                    />
                </Transition>
                <TabView tabs={tabs} selectedTab={selectedTab} onSelectTab={setSelectedTab}>
                    {
                        selectedTab === 0 ? 
                            <Tab1 /> :
                            <Tab2 />
                    }
                </TabView>
            </VStack>
        </VStack>
    )
}