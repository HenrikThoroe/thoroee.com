import React, { ReactNode } from "react"
import ReactProps from "../../game/utils/ReactProps"
import classNames from "classnames"

export default function containerBuilder(cn: string) { 
    return (props: ReactProps<HTMLDivElement>) => {
        const { className, ...other } = props
        return <div { ...other } className={classNames(cn, className)}>{ props.children }</div>
    }
}