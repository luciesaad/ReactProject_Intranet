import React, {Component, Fragment} from 'react';
// import axios from 'axios';
import {isLoggedIn, /*getToken*/} from './logIn/AuthHelper';
import Intranet from "./intranet";

class App extends Component {

    componentDidMount() {
        console.log("isLoggedIn = " + isLoggedIn());
        if (!isLoggedIn()) {
            this.props.history.replace('/login')
        } else {

            try {

                /*axios({
                    method: 'get',
                    url: 'http://localhost:3010/api',
                    headers: {
                        authorization: 'Bearer ' + getToken()
                    }
                }).then((result) => {
                    console.log("app protected resource");
                    console.log(result)
                })*/
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
