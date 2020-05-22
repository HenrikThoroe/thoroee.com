import React, { ReactNode } from "react"
import ReactProps from "../../utils/ReactProps"
import classNames from "classnames"

export default function containerBuilder(cn: string, type: React.ElementType = "div") { 
    const Comp = type 

    return (props: ReactProps<HTMLDivElement>) => {
        const { className, ...other } = props
        return <Comp { ...other } className={classNames(cn, className)}>{ props.children }</Comp>
    }
}