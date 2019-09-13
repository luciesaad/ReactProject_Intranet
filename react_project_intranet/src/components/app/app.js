import React, {Component} from 'react';
import axios from 'axios';
import {isLoggedIn, getToken} from './logIn/AuthHelper';
import './app.css';
import Intranet from "./intranet";
import Chat from "./intranet/chat";

class App extends Component {

    componentDidMount() {
        console.log(isLoggedIn());
        if (!isLoggedIn()) {
            this.props.history.replace('/login')
        } else {
            console.log('init.Now running get method for the token');
            axios({
                method: 'get',
                url: 'http://localhost:3010/api',
                headers: {
                    authorization: 'Bearer ' + getToken()
                }
            }).then((result) => {
                console.log("app protected resource");
                console.log(result)
            })
        }
    }


    render() {
        console.log('in render');
        return (
            <div className="app">
                <Intranet/>
            </div>
        )
    }
}

export default App;
