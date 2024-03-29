import React from "react";
import ReactProps from "../../utils/ReactProps";
import Stack, { Alignment } from "./Stack";
import classNames from "classnames";

export interface Props extends ReactProps<HTMLDivElement> {
    spacing?: string
    alignment?: Alignment
    verticalAlignment?: Alignment
    maxItemWidth?: string
    minItemWidth?: string
}

export default function HStack(props: Props) {
    const { spacing, alignment: horizontalAlignment, verticalAlignment, maxItemWidth, minItemWidth, style, ...other } = props
    let injectedStyle: React.CSSProperties = {
        ...style
    }

    if (maxItemWidth) {
        injectedStyle = {
            ...injectedStyle,
            ["--maxWidth" as any]: maxItemWidth
        }
    }

    if (minItemWidth) {
        injectedStyle = {
            ...injectedStyle,
            ["--minWidth" as any]: minItemWidth
        }
    }

    return (
        <Stack {...other} spacing={spacing || "0px"} mainAlignment={horizontalAlignment || "start"} secondaryAlignment={verticalAlignment || "stretch"} direction="row" style={injectedStyle}>
            { props.children }
        </Stack>
    )
}