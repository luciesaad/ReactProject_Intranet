import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import LogIn from './components/app/logIn'
import Admin from "./components/app/intranet/admin";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import 'tachyons';
import '@material-ui/core';

import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

// ============= Redux related =============
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import {searchEmployees, requestEmployees, requestAdminStatus} from "./components/app/redux/reducers";
import {createLogger} from "redux-logger/src";
import thunkMiddleware from 'redux-thunk';

const logger = createLogger();
const rootReducer = combineReducers({searchEmployees, requestEmployees, requestAdminStatus});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));
// ============= Redux related =============


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Fragment>
                <Route exact path="/" component={App}/> {/*//path to protected resources available only with login*/}
                <Route exact path="/login" component={LogIn}/> {/*//redirect here without login*/}
                <Route exact path="/admin/start" component={Admin} />
            </Fragment>
        </Router>
    </Provider>, document.getElementById('root'));


registerServiceWorker();