import React, { ReactNode } from 'react'
import "./index.scss"
import classNames from 'classnames'

interface Props {
    children: ReactNode[] | ReactNode
}

export default function NavbarComponent(props: Props) {
    return (
        <div className={classNames({ navigation: true })}>
            { props.children }
        </div>
    )
}