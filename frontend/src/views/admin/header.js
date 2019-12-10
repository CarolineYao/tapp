import React from "react";
import { Header } from "../../components/header";
import { connect } from "react-redux";
import { usersSelector } from "../../api/actions";
import { ActiveUserDisplay } from "../../components/active-user";

/**
 * Header showing the routes that a user with `role=admin`
 * can see.
 *
 * @returns
 */
function AdminHeader() {
    return (
        <Header
            routes={[
                {
                    route: "/tapp",
                    name: "TAPP",
                    description: "TAPP Main View",
                    subroutes: [
                        {
                            route: "/applicants_by_course",
                            name: "Applicants by Course",
                            description: "Manage Applicants by courses"
                        },
                        {
                            route: "/sessions",
                            name: "Sessions",
                            description: "Manage Sessions"
                        },
                        {
                            route: "/contract_templates",
                            name: "Contract Templates",
                            description: "Manage Contract Templates"
                        },
                        {
                            route: "/instructors",
                            name: "Instructors",
                            description: "Manage Instructors"
                        },
                        {
                            route: "/positions",
                            name: "Positions",
                            description: "Manage Positions"
                        },
                        {
                            route: "/assignments",
                            name: "Assignments",
                            description: "Manage Assignments"
                        },
                        {
                            route: "/summary",
                            name: "Summary",
                            description: "Overivew of all data"
                        }
                    ]
                },
                {
                    route: "/cp",
                    name: "CP",
                    description: "Contract Presentment",
                    subroutes: [
                        {
                            route: "/statistics",
                            name: "Statistics",
                            description:
                                "See statistics about accepted/rejected contracts"
                        }
                    ]
                },
                {
                    route: "/dashboard",
                    name: "Dashboard",
                    description: "List of all widgets",
                    hidden: true
                }
            ]}
            infoComponent={<ConnectedActiveUserDisplay />}
        />
    );
}

const ConnectedActiveUserDisplay = connect(state => ({
    user: usersSelector(state).active_user,
    role: usersSelector(state).active_role
}))(ActiveUserDisplay);

export { AdminHeader };
