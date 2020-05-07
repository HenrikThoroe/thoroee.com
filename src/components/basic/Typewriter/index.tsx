import React, { useEffect, useState, useRef, ReactNode } from "react";
import classNames from "classnames";
import "./index.scss"
import sleep from "../../../utils/sleep";

export interface Props {
    children: string
    animated?: boolean
}

function TypewriterHelper(props: { text: string, animate: boolean, startAnimation: boolean, onAnimationCompleted: () => void }) {
    const [content, setContent] = useState(props.animate ? "" : props.text)
    const [running, setRunning] = useState(false)

    useEffect(() => {
        if (props.animate && props.startAnimation && !running) {
            let text = ""

            setRunning(true)

            const add = async (char: string) => {
                const timeout = char !== " " ? 100 : 500
                text = text + char
                setContent(text)
                await sleep(timeout)
            }

            const animate = async () => {
                for (const char of props.text) {
                    await add(char)
                }

                await sleep(800)
            }

            animate() 
                .then(() => props.onAnimationCompleted())
                .catch(e => console.warn(e))
        }
    }, [running])

    return (
        <span className={classNames({ active: props.animate && props.startAnimation })}>{ content }</span>
    )
}   

export default function Typewriter(props: Props) {
    const lines = props.children.split("\\n")
    const contentRef = useRef<HTMLDivElement>(null)
    const [runningAnimation, setRunningAnimation] = useState(0)

    return (
        <div ref={contentRef} className={classNames("typewriter", { animated: props.animated })}>
            {
                lines.map((line, index) => (
                    <TypewriterHelper 
                        text={line} 
                        startAnimation={index === runningAnimation} 
                        animate={props.animated || false} 
                        onAnimationCompleted={() => setRunningAnimation(runningAnimation + 1)} 
                    />
                ))
            }
        </div>
    )
}