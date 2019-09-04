import React, {Component} from 'react';

import SignIn from './signIn/'
import Intranet from "./intranet/";

import './app.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
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
                    <Intranet isLoggedIn={this.state.isLoggedIn}/>
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
