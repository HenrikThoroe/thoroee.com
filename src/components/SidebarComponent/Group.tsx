import containerBuilder from '../../utils/builder/containerBuilder'
import classNames from 'classnames'
import { ReactNode } from 'react'

interface Props {
    collapsed?: boolean
    children: ReactNode[]
}

export default function Group(props: Props) {
    return containerBuilder(classNames({group: true, collapsed: props.collapsed === true}))(props)
}