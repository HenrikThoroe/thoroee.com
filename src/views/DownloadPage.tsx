import Container from "../components/Container";
import React, { useEffect, useState } from "react";
import Headline from "../components/TextContent";
import VStack from "../components/Stacks/VStack";
import TextContent from "../components/Headline";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Link, useRouteMatch, useHistory, useParams } from "react-router-dom";
import If from "../components/If";

type Resource = "serverIcon"

export default function DownloadPage() {
    const history = useHistory()
    const { resource } = useParams<{ resource: Resource}>()
    
    const getParams = () => {
        console.log(resource)

        switch (resource) {
            case "serverIcon":
                console.log("KNOWN")
                return { name: "Server.png", location: "/images/server.png" }
            default:
                return undefined
        }
    }

    const [file, setFile] = useState(() => getParams())

    const startDownload = () => {
        if (file === undefined) {
            return
        }

        const el = document.createElement("a")

        el.href = file.location
        el.download = file.name
        el.target = "_self"
        el.style.display = "none"
        document.body.append(el)
        el.click()
        document.body.removeChild(el)
    }

    const back = () => {
        history.goBack()
    }

    useEffect(() => {
        startDownload()
    }, [])

    return (
        <Container padding="6rem min(5rem, 5%)">
            <VStack spacing="2rem">
                <VStack spacing=".5rem">
                    <Headline component="h1" size="xxl" bold>Download Center</Headline>
                    <Headline component="h2" size="l">{ file?.name || "Unknown Resource" }</Headline>
                </VStack>
                <TextContent size="m">
                    Your download should have started automatically. If not, please click "Download".
                    You can continue to your previous page whenever you want.
                </TextContent>
                <If condition={file}>
                    <a href={file?.location} download={file?.name} target="_self">
                        <Button icon={<Icon name="download" />} label="Download Manually" style="primary" fitContent />
                    </a>
                </If>
                <Button label="Back to Last Page" style="primary" onClick={back} fitContent />
            </VStack>
        </Container>
    )
}