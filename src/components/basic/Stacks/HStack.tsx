import React from "react";
import ReactProps from "../../../game/utils/ReactProps";
import Stack, { Alignment } from "./Stack";

export interface Props extends ReactProps<HTMLDivElement> {
    spacing?: string
    alignment?: Alignment
    verticalAlignment?: Alignment
}

export default function HStack(props: Props) {
    const { spacing, alignment: horizontalAlignment, verticalAlignment, ...other } = props

    return (
        <Stack {...other} spacing={spacing || "0px"} mainAlignment={horizontalAlignment || "start"} secondaryAlignment={verticalAlignment || "stretch"} direction="row">
            { props.children }
        </Stack>
    )
}