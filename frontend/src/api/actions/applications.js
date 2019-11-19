import PropTypes from "prop-types";
import {
    FETCH_APPLICATIONS_SUCCESS,
    FETCH_ONE_APPLICATION_SUCCESS,
    UPSERT_ONE_APPLICATION_SUCCESS,
    DELETE_ONE_APPLICATION_SUCCESS
} from "../constants";
import { fetchError, upsertError, deleteError } from "./errors";
import {
    actionFactory,
    arrayToHash,
    runOnActiveSessionChange,
    validatedApiDispatcher
} from "./utils";
import { apiGET, apiPOST } from "../../libs/apiUtils";
import { applicationsReducer } from "../reducers/applications";
import { createSelector } from "reselect";
import { applicantsSelector } from "./applicants";
import { positionsSelector } from "./positions";

// actions
const fetchApplicationsSuccess = actionFactory(FETCH_APPLICATIONS_SUCCESS);
const fetchOneApplicationSuccess = actionFactory(FETCH_ONE_APPLICATION_SUCCESS);
const upsertOneApplicationSuccess = actionFactory(
    UPSERT_ONE_APPLICATION_SUCCESS
);
const deleteOneApplicationSuccess = actionFactory(
    DELETE_ONE_APPLICATION_SUCCESS
);

// dispatchers
export const fetchApplications = validatedApiDispatcher({
    name: "fetchApplications",
    description: "Fetch applications",
    onErrorDispatch: e => fetchError(e.toString()),
    dispatcher: () => async (dispatch, getState) => {
        const { id: activeSessionId } = getState().model.sessions.activeSession;
        const data = await apiGET(`/sessions/${activeSessionId}/applications`);
        dispatch(fetchApplicationsSuccess(data));
    }
});

export const fetchApplication = validatedApiDispatcher({
    name: "fetchApplication",
    description: "Fetch application",
    propTypes: { id: PropTypes.any.isRequired },
    onErrorDispatch: e => fetchError(e.toString()),
    dispatcher: payload => async (dispatch, getState) => {
        const { id: activeSessionId } = getState().model.sessions.activeSession;
        const data = await apiGET(
            `/sessions/${activeSessionId}/applications/${payload.id}`
        );
        dispatch(fetchOneApplicationSuccess(data));
    }
});

export const upsertApplication = validatedApiDispatcher({
    name: "upsertApplication",
    description: "Add/insert application",
    propTypes: {},
    onErrorDispatch: e => upsertError(e.toString()),
    dispatcher: payload => async (dispatch, getState) => {
        const { id: activeSessionId } = getState().model.sessions.activeSession;
        const data = await apiPOST(
            `/sessions/${activeSessionId}/applications`,
            payload
        );
        dispatch(upsertOneApplicationSuccess(data));
    }
});

export const deleteApplication = validatedApiDispatcher({
    name: "deleteApplication",
    description: "Delete application",
    propTypes: { id: PropTypes.any.isRequired },
    onErrorDispatch: e => deleteError(e.toString()),
    dispatcher: payload => async (dispatch, getState) => {
        const { id: activeSessionId } = getState().model.sessions.activeSession;
        const data = await apiPOST(
            `/sessions/${activeSessionId}/applications/delete`,
            payload
        );
        dispatch(deleteOneApplicationSuccess(data));
    }
});

// selectors

// Each reducer is given an isolated state; instead of needed to remember to
// pass the isolated state to each selector, `reducer._localStoreSelector` will intelligently
// search for and return the isolated state associated with `reducer`. This is not
// a standard redux function.
export const localStoreSelector = applicationsReducer._localStoreSelector;
export const _applicationsSelector = createSelector(
    localStoreSelector,
    state => state._modelData
);

export const applicationsSelector = createSelector(
    [_applicationsSelector, applicantsSelector, positionsSelector],
    (applications, applicants, positions) => {
        if (applications.length === 0) {
            return [];
        }
        applicants = arrayToHash(applicants);
        positions = arrayToHash(positions);
        return applications.map(({ position_id, applicant_id, ...rest }) => ({
            ...rest,
            position: positions[position_id] || {},
            applicant: applicants[applicant_id] || {}
        }));
    }
);

// Any time the active session changes, we want to refetch
// all data. Calling `runOnActiveSessionChange` ensures that
// when the active session changes all data is re-fetched
runOnActiveSessionChange(fetchApplications);
