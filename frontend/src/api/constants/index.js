export const API_INTERACTION_START = "API_INTERACTION_START";
export const API_INTERACTION_END = "API_INTERACTION_END";

/* Constants were batch-created with the following code:

    let wrap = x => x.map(y => `export const ${y} = "${y}";`);
    console.log(
        [
            "session",
            "instructor",
            "position",
            "assignment",
            "offer",
            "contract_template",
            "application",
            "wage_chunk"
        ]
            .map(x => {
                x = x.toUpperCase();
                return [`// \`${x.toLowerCase()}\`-related constants`]
                    .concat(
                        wrap([
                            `FETCH_${x}S_SUCCESS`,
                            `FETCH_ONE_${x}_SUCCESS`,
                            `UPSERT_ONE_${x}_SUCCESS`,
                            `DELETE_ONE_${x}_SUCCESS`
                        ])
                    )
                    .join("\n");
            })
            .join("\n\n")
    );
*/

// `session`-related constants
export const FETCH_SESSIONS_SUCCESS = "FETCH_SESSIONS_SUCCESS";
export const FETCH_ONE_SESSION_SUCCESS = "FETCH_ONE_SESSION_SUCCESS";
export const UPSERT_ONE_SESSION_SUCCESS = "UPSERT_ONE_SESSION_SUCCESS";
export const DELETE_ONE_SESSION_SUCCESS = "DELETE_ONE_SESSION_SUCCESS";
export const SET_ACTIVE_SESSION = "SET_ACTIVE_SESSION";

// `instructor`-related constants
export const FETCH_INSTRUCTORS_SUCCESS = "FETCH_INSTRUCTORS_SUCCESS";
export const FETCH_ONE_INSTRUCTOR_SUCCESS = "FETCH_ONE_INSTRUCTOR_SUCCESS";
export const UPSERT_ONE_INSTRUCTOR_SUCCESS = "UPSERT_ONE_INSTRUCTOR_SUCCESS";
export const DELETE_ONE_INSTRUCTOR_SUCCESS = "DELETE_ONE_INSTRUCTOR_SUCCESS";
export const ADD_INSTRUCTOR_TO_POSITION_SUCCESS =
    "ADD_INSTRUCTOR_TO_POSITION_SUCCESS";

// `position`-related constants
export const FETCH_POSITIONS_SUCCESS = "FETCH_POSITIONS_SUCCESS";
export const FETCH_ONE_POSITION_SUCCESS = "FETCH_ONE_POSITION_SUCCESS";
export const UPSERT_POSITIONS_SUCCESS = "UPSERT_POSITIONS_SUCCESS";
export const UPSERT_ONE_POSITION_SUCCESS = "UPSERT_ONE_POSITION_SUCCESS";
export const DELETE_ONE_POSITION_SUCCESS = "DELETE_ONE_POSITION_SUCCESS";

// `assignment`-related constants
export const FETCH_ASSIGNMENTS_SUCCESS = "FETCH_ASSIGNMENTS_SUCCESS";
export const FETCH_ONE_ASSIGNMENT_SUCCESS = "FETCH_ONE_ASSIGNMENT_SUCCESS";
export const UPSERT_ONE_ASSIGNMENT_SUCCESS = "UPSERT_ONE_ASSIGNMENT_SUCCESS";
export const DELETE_ONE_ASSIGNMENT_SUCCESS = "DELETE_ONE_ASSIGNMENT_SUCCESS";

// `offer`-related constants
export const FETCH_OFFERS_SUCCESS = "FETCH_OFFERS_SUCCESS";
export const FETCH_ONE_OFFER_SUCCESS = "FETCH_ONE_OFFER_SUCCESS";
export const UPSERT_ONE_OFFER_SUCCESS = "UPSERT_ONE_OFFER_SUCCESS";
export const DELETE_ONE_OFFER_SUCCESS = "DELETE_ONE_OFFER_SUCCESS";
export const SET_OFFER_ACCEPTED_SUCCESS = "SET_OFFER_ACCEPTED_SUCCESS";
export const SET_OFFER_REJECTED_SUCCESS = "SET_OFFER_REJECTED_SUCCESS";
export const OFFER_CREATE_SUCCESS = "OFFER_CREATE_SUCCESS";
export const OFFER_EMAIL_SUCCESS = "OFFER_EMAIL_SUCCESS";
export const OFFER_NAG_SUCCESS = "OFFER_NAG_SUCCESS";
export const OFFER_WITHDRAW_SUCCESS = "OFFER_WITHDRAW_SUCCESS";

// `contract_template`-related constants
export const FETCH_CONTRACT_TEMPLATES_SUCCESS =
    "FETCH_CONTRACT_TEMPLATES_SUCCESS";
export const FETCH_ONE_CONTRACT_TEMPLATE_SUCCESS =
    "FETCH_ONE_CONTRACT_TEMPLATE_SUCCESS";
export const UPSERT_ONE_CONTRACT_TEMPLATE_SUCCESS =
    "UPSERT_ONE_CONTRACT_TEMPLATE_SUCCESS";
export const DELETE_ONE_CONTRACT_TEMPLATE_SUCCESS =
    "DELETE_ONE_CONTRACT_TEMPLATE_SUCCESS";
export const FETCH_ALL_CONTRACT_TEMPLATES_SUCCESS =
    "FETCH_ALL_CONTRACT_TEMPLATES_SUCCESS";

// `application`-related constants
export const FETCH_APPLICATIONS_SUCCESS = "FETCH_APPLICATIONS_SUCCESS";
export const FETCH_ONE_APPLICATION_SUCCESS = "FETCH_ONE_APPLICATION_SUCCESS";
export const UPSERT_ONE_APPLICATION_SUCCESS = "UPSERT_ONE_APPLICATION_SUCCESS";
export const DELETE_ONE_APPLICATION_SUCCESS = "DELETE_ONE_APPLICATION_SUCCESS";

// `wage_chunk`-related constants
export const FETCH_WAGE_CHUNKS_SUCCESS = "FETCH_WAGE_CHUNKS_SUCCESS";
export const FETCH_WAGE_CHUNKS_FOR_ASSIGNMENT_SUCCESS =
    "FETCH_WAGE_CHUNKS_FOR_ASSIGNMENT_SUCCESS";
export const UPSERT_WAGE_CHUNKS_FOR_ASSIGNMENT_SUCCESS =
    "UPSERT_WAGE_CHUNKS_FOR_ASSIGNMENT_SUCCESS";
export const FETCH_ONE_WAGE_CHUNK_SUCCESS = "FETCH_ONE_WAGE_CHUNK_SUCCESS";
export const UPSERT_ONE_WAGE_CHUNK_SUCCESS = "UPSERT_ONE_WAGE_CHUNK_SUCCESS";
export const DELETE_ONE_WAGE_CHUNK_SUCCESS = "DELETE_ONE_WAGE_CHUNK_SUCCESS";

// `applicant`-related constants
export const FETCH_APPLICANTS_SUCCESS = "FETCH_APPLICANTS_SUCCESS";
export const FETCH_ONE_APPLICANT_SUCCESS = "FETCH_ONE_APPLICANT_SUCCESS";
export const UPSERT_ONE_APPLICANT_SUCCESS = "UPSERT_ONE_APPLICANT_SUCCESS";
export const DELETE_ONE_APPLICANT_SUCCESS = "DELETE_ONE_APPLICANT_SUCCESS";
export const ADD_APPLICANT_TO_SESSION_SUCCESS =
    "ADD_APPLICANT_TO_SESSION_SUCCESS";

// `applicant_by_course`-related constatns
export const SELECT_APPLICANT_SUCCESS = "SELECT_APPLICANT_SUCCESS";
export const REMOVE_APPLICANT_SUCCESS = "REMOVE_APPLICANT_SUCCESS";
export const CHANGE_INSTRUCTOR_PREF_SUCCESS = "CHANGE_INSTRUCTOR_PREF_SUCCESS";
export const SWITCH_POSITIONS = "SWITCH_POSITIONS";
export const VIEW_POSITION = "VIEW_POSITION";
