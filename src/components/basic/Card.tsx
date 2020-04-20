import React from "react";
import BCard from 'react-bootstrap/Card'

export default class Card extends React.Component {

    render() {
        return (
            <BCard>
                <BCard.Header>
                    <BCard.Title>Hello</BCard.Title>
                </BCard.Header>
                <BCard.Body>
                    World
                </BCard.Body>
            </BCard>
        )
    }

}