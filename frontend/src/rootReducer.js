import { reducer as formReducer } from "redux-form";
import { reducer as notificationReducer } from "react-notification-system-redux";
import { combineReducers } from "./api/reducers/utils";
import offerTableReducer from "./views/offertable/reducers";
import { globalReducer } from "./views/globals/reducers";
import {
    statusReducer,
    sessionsReducer,
    positionsReducer,
    applicantsReducer,
    applicantsByCourseReducer,
    applicationsReducer,
    assignmentsReducer,
    instructorsReducer,
    contractTemplatesReducer
} from "./api/reducers";

// When `combineReducers` is used,
// every action gets dispatched to every reducer.
// Since reducers don't change the state on unrecognized
// actions, this is okay. Further, each reducer believes
// it has its own top-level state, but in reality it is
// just passed a part of the whole state. E.g., if `combineReducers`
// is passed
//   {
//      mypath: myReducer
//   }
// When `myReducer(localState)` is called, `localSate == globalState.mypath`.
const reducer = combineReducers({
    model: combineReducers({
        status: statusReducer,
        sessions: sessionsReducer,
        positions: positionsReducer,
        applicants: applicantsReducer,
        applicantsByCourse: applicantsByCourseReducer,
        applications: applicationsReducer,
        assignments: assignmentsReducer,
        instructors: instructorsReducer,
        contractTemplates: contractTemplatesReducer
    }),
    ui: combineReducers({
        notifications: notificationReducer,
        form: formReducer,
        offerTable: offerTableReducer,
        globals: globalReducer
    })
});

export default reducer;
