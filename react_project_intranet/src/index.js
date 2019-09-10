import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/app';
import './index.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import LogIn from './Components/app/logIn'

ReactDOM.render( <Router>
    <div className="app" >
        <Route exact path="/" component={App} /> {/*//path to protected resources available only with login*/}
        <Route exact path="/login" component={LogIn} /> {/*//redirect here without login*/}
        {/*TODO<Route exact path="/home/admin" component={Admin} />*/}
    </div>
</Router>, document.getElementById('root'));


