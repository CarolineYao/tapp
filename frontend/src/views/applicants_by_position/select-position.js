import React from "react";
import { connect } from "react-redux";
import { positionsSelector } from "../../api/actions";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function PositionsCard(props) {
    const { positions, onSelectPosition } = props;
    return (
        <Card>
            <Card.Header>Courses</Card.Header>
            <ListGroup>
                {positions.map(position => (
                    <ListGroupItem
                        key={position.id}
                        onClick={() => onSelectPosition(position)}
                    >
                        {position.position_code}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    );
}

export const ConnectedSelectPosition = connect(
    state => ({
        positions: positionsSelector(state)
    }),
    {}
)(PositionsCard);
