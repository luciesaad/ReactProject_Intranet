import {
    CHANGE_SEARCH_FIELD,
    REQUEST_EMPLOYEE_PENDING,
    REQUEST_EMPLOYEE_SUCCESS,
    REQUEST_EMPLOYEE_FAILED,
    LOGGED_IN_AS_ADMIN
} from "./constants";

// this is an object and redux-thunk is not needed but can handle both and act accordingly
export const setSearchField = (text) => ({          // ({ automatic return =) })
    type: CHANGE_SEARCH_FIELD,
    payload: text
});

// This returns a function that we need redux-thunk to handle
// This is a function that returns a function
// The first function provide the "dispatch function" to the second function
export const requestEmployees = () => (dispatch) => {   // Higher order function
    dispatch({type: REQUEST_EMPLOYEE_PENDING});
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({type: REQUEST_EMPLOYEE_SUCCESS, payload: data}))
        .catch(error => dispatch({ type: REQUEST_EMPLOYEE_FAILED, payload: error}))
};

export const setAdminStatus = (text) => ({
    type: LOGGED_IN_AS_ADMIN,
    payload: text
});

/*
export const setAdminStatusFalse = ({
    type: LOGGED_IN_AS_ADMIN,
    payload: false
});*/
