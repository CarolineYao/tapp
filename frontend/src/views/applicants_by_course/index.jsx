import React from "react";
import { connect } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import SelectCourse from "./components/SelectCourse";
import ManageCourse from "./components/ManageCourse";
// import { applicantsByCourseSelector } from "../../api/actions";

function ApplicantsByPosition(props) {
    return (
        <Container fluid>
            <Row>
                <Col xs={2}>
                    <SelectCourse />
                </Col>
                {props.selectedPositionIds.map(positionId => (
                    <Col
                        xs={10 / props.selectedPositionIds.length}
                        key={positionId}
                    >
                        <ManageCourse positionId={positionId} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default connect(state => {
    const selectedPositionIds =
        state.model.applicantsByCourse.selectedPositionIds;
    return { selectedPositionIds };
})(ApplicantsByPosition);
