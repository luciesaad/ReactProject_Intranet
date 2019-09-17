import {CHANGE_SEARCH_FIELD} from "./constants";

// Make som sort of starting point
const initialState = {
    searchField: ''
};

// Reducer - "big action that spits out state"
// Name it according to what it do
// since we do not want errors if something is empty set state to initialStat and action to an empty object (this is ES6 functionality)
export const searchEmployees = (state=initialState, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};
