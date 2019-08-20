import React from "react";
import PropTypes from "prop-types";
import { Dropdown, DropdownButton } from "react-bootstrap";

export class EmailButton extends React.Component {
    static propTypes = {
        data: PropTypes.arrayOf(
            PropTypes.number
        ).isRequired
    };

    // email applicants
    email = () => {
        console.log(this.props.data);
        let emails = [...this.props.data];

        var a = document.createElement("a");
        a.href =
            emails.length === 1
                ? "mailto:" + emails[0] // if there is only a single recipient, send normally
                : "mailto:?bcc=" + emails.join(","); // if there are multiple recipients, bcc all
        a.click();
    };

    // email contract link to a single applicant
    emailContract = (offers) => {

    };

    nagOffers = (offers) => {
        // do nag offer thing
    }

    render() {
        return (
            <DropdownButton id="dropdown-basic-button" title="Email">
                <Dropdown.Item onClick={() => this.email(this.props.data)}>Email Blank</Dropdown.Item>
                <Dropdown.Item onClick={() => this.emailContract(this.props.data)}>Email Contract</Dropdown.Item>
                <Dropdown.Item onClick={() => this.nagOffers(this.props.data)}>Nag Offers</Dropdown.Item>
            </DropdownButton>
        );
    }
}
