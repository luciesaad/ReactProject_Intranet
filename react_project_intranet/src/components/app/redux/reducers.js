import {
    CHANGE_SEARCH_FIELD,
    REQUEST_EMPLOYEE_PENDING,
    REQUEST_EMPLOYEE_SUCCESS,
    REQUEST_EMPLOYEE_FAILED,
    LOGGED_IN_AS_ADMIN
} from "./constants";

// Make some sort of starting point
const initialStateSearch = {
    searchField: ''
};

// Reducer - "big action that spits out state"
// Name it according to what it do
// since we do not want errors if something is empty set state to initialStat and action to an empty object (this is ES6 functionality)
export const searchEmployees = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
};


const initialStateEmployees = {
    isPending: false,
    employees: [],
    error: ''
};

export const requestEmployees = (state = initialStateEmployees, action = {}) => {
    switch (action.type) {
        case REQUEST_EMPLOYEE_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_EMPLOYEE_SUCCESS:
            return Object.assign({}, state, {employees: action.payload, isPending: false});
        case REQUEST_EMPLOYEE_FAILED:
            return Object.assign({}, state, {error: action.payload, isPending: false});
        default:
            return state;
    }
};

const initialStateIsAdmin = false;
export const requestAdminStatus = (state = initialStateIsAdmin, action = {}) => {
    switch (action.type) {
        case LOGGED_IN_AS_ADMIN:
            console.log("LOGGED_IN_AS_ADMIN = true");
            return Object.assign({}, state, {initialStateIsAdmin: action.payload});
        default:
            console.log("LOGGED_IN_AS_ADMIN default = false");
            return state;
    }
};
