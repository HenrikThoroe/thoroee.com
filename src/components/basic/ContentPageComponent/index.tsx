import React, { ReactNode } from "react"
import "./index.scss"

export interface Props {
    children: ReactNode[] | ReactNode
}

export default function ContentPageComponent(props: Props) {
    const children = props.children instanceof Array ? props.children : [props.children]

    return (
        <div className="contentPage">
            { 
                children.map(view => (
                    <section>
                        { view }
                    </section>
                ))
            }
        </div>
    )
}   