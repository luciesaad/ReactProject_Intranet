import React, {Component, Fragment} from 'react';
//import axios from 'axios';
import {isLoggedIn, /*getToken*/} from './logIn/AuthHelper';
import Intranet from "./intranet";

class App extends Component {

    componentDidMount() {
        console.log("isLoggedIn = " + isLoggedIn());
        if (!isLoggedIn()) {
            this.props.history.replace('/login')
        } else {
            try {
                this.props.history.replace('/')
            } catch (e) {
                console.log("Catch Error = " + e)
           }
        }
    }


    render() {
        return (
            <Fragment>
                <Intranet/>
            </Fragment>
        )
    }
}

export default App;
