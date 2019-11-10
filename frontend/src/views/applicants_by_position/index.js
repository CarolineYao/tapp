import React from "react";
import { ConnectedSelectPosition } from "./select-position";
import { Col, Container, Row } from "react-bootstrap";

function setSelectedPositionsFromChild(stateProps, newlySelectedPostion) {
    let { selectedPositions, setSelectedPositions } = stateProps;

    const newList = [...selectedPositions]
    if (newList.includes(..)){}else{}
    debugger;
    // TODO: remove from list is it is already in the list
    if (selectedPositions.length >= 2) {
        selectedPositions = selectedPositions.slice(1);
    }

    setSelectedPositions(newList);

    //if (selectedPositions.length > 2) {
    //    setSelectedPositions(selectedPositions.shift());
    //}
}

export function AdminApplicantsByPosition() {
    const [selectedPositions, setSelectedPositions] = React.useState([]);
    const stateProps = { selectedPositions, setSelectedPositions };

    return (
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <ConnectedSelectPosition
                        onSelectPosition={position => {
                            setSelectedPositionsFromChild(stateProps, position);
                            debugger;
                        }}
                    />
                </Col>
                {/* {props.selectedPositionIds.map(positionId => (
                    <Col
                        xs={10 / props.selectedPositionIds.length}
                        key={positionId}
                    >
                        <ManageCourse positionId={positionId} />
                    </Col>
                ))} */}
            </Row>
        </Container>
    );
}
