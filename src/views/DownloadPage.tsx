import Container from "../components/Container";
import React, { ReactNode, useEffect, useState } from "react";
import Headline from "../components/TextContent";
import VStack from "../components/Stacks/VStack";
import TextContent from "../components/Headline";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Link, useRouteMatch, useHistory, useParams } from "react-router-dom";
import If from "../components/If";
import Translation from "../components/Translation";

type Resource = "quickNote" | "quickColor" | "edudocs"

type File = { name: string, label?: ReactNode, location: string }

type ResourcePack = { name: string, files: File[] }

export default function DownloadPage() {
    const history = useHistory()
    const { resource } = useParams<{ resource: Resource}>()
    
    const getParams = (): ResourcePack | undefined => {
        switch (resource) {
            case "quickNote":
                return {
                    name: "Quick Note",
                    files: [{ name: "QuickNote.zip", location: "/apps/QuickNote.zip" }]
                }
            case "quickColor":
                return {
                    name: "Quick Color",
                    files: [{ name: "QuickColor.zip", location: "/apps/QuickColour.zip" }]
                }
            case "edudocs":
                return {
                    name: "EduDocs",
                    files: [
                        { name: "edudocs.js", label: <Translation select={lang => lang.download.labels.edudocs.node} />, location: "/apps/edudocs/node/edudocs.js" },
                        { name: "edudocs.exe", label: <Translation select={lang => lang.download.labels.edudocs.win} />, location: "/apps/edudocs/win/edudocs.exe" },
                        { name: "edudocs", label: <Translation select={lang => lang.download.labels.edudocs.mac} />, location: "/apps/edudocs/mac/edudocs" },
                        { name: "edudocs", label: <Translation select={lang => lang.download.labels.edudocs.linux} />, location: "/apps/edudocs/linux/edudocs" }
                    ]
                }
            default:
                return undefined
        }
    }

    const [resourcePack] = useState<ResourcePack | undefined>(() => getParams())

    const startDownload = (file: File) => {
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
        if (resourcePack && resourcePack.files.length === 1) {
            startDownload(resourcePack.files[0])
        }
    }, [])

    return (
        <Container padding="6rem min(5rem, 5%)">
            <VStack spacing="2rem">
                <VStack spacing=".5rem">
                    <Headline component="h1" size="xxl" bold>
                        <Translation select={lang => lang.download.title}/>
                    </Headline>
                    <Headline component="h2" size="l">{ resourcePack?.name || "Unknown Resource" }</Headline>
                </VStack>
                <TextContent size="m">
                    <Translation select={lang => lang.download.message}/>
                </TextContent>
                <If condition={resourcePack}>
                    <VStack spacing=".5rem">
                        {
                            resourcePack!.files.map(file => (
                                <a href={file.location} download={file.name} target="_self">
                                    <Button 
                                        icon={<Icon name="download" />} 
                                        label={file.label || <Translation select={lang => lang.download.download}/>} 
                                        style="primary" 
                                        fitContent
                                    />
                                </a>
                            ))
                        }
                    </VStack>
                </If>
                <Button 
                    label={<Translation select={lang => lang.download.back}/>} 
                    style="primary" 
                    onClick={back} 
                    fitContent 
                />
            </VStack>
        </Container>
    )
}