import React from "react";
import { connect } from "react-redux";
import { fetchPositions } from "../../../api/actions/positions.js";
import {
    positionsSelector,
    viewPosition,
    switchPositions
} from "../../../api/actions";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

function SelectPosition(props) {
    const { selectedPositionIds } = props;
    function isActive(item) {
        return selectedPositionIds.includes(item.id);
    }
    return (
        <Card>
            <Card.Header>
                Courses{" "}
                {props.selectedPositionIds.length === 2 && (
                    <span
                        style={{ cursor: "pointer" }}
                        className="fa fa-arrows-h"
                        onClick={props.switchPositions}
                    />
                )}
            </Card.Header>
            <ListGroup>
                {props.positions.map(item => (
                    <ListGroupItem
                        key={item.id}
                        onClick={() => props.viewPosition(item.id)}
                        active={isActive(item)}
                    >
                        {item.position_code}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </Card>
    );
}

export default connect(
    state => ({
        positions: positionsSelector(state),
        selectedPositionIds: state.model.applicantsByCourse.selectedPositionIds
    }),
    { fetchPositions, viewPosition, switchPositions }
)(SelectPosition);
