import React, {Component} from 'react';
import axios from 'axios';

import SignIn from './signIn/'
import Intranet from "./intranet/";

import './app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [],
            passwords: [],
            isLoggedIn: false
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3010/users')
            .then(res => {
                console.log(res.data);
                this.setState({users: res.data})
            })
        axios.get('http://localhost:3010/passwords')
            .then(res => {
                console.log(res.data);
                this.setState({passwords: res.data})
            })
        axios({
            method: 'post',
            url: 'http://localhost:3010/home',
            data: {
                otherUser: '4',
                otherPass: '4'
            }
        })
    }

    onClickSignInButton = (event) => {
        console.log("App.js: isLoggedIn = " + event);
        this.setState({isLoggedIn: event})
    };

    render() {
        // If user is not logged in go to signin page
        if (!this.state.isLoggedIn) {
            return (
                <div className="app" >
                    <SignIn isLoggedIn={this.state.isLoggedIn} onClickSignInButton={this.onClickSignInButton}/>
                </div>
            )
        }

        // If user have valid credentials go to intranet page
        if (this.state.isLoggedIn) {
            return (
                <div className="app">
                    <Intranet isLoggedIn={this.state.isLoggedIn} showUsers={this.state.users} showPass={this.state.passwords}/>
                </div>
            )
        }

        return (
            <div className="app">
                <h1>AppStart</h1>
                <h2>Something went wrong!</h2>
            </div>
        );
    }
}

export default App;
