import React, {Component} from 'react';

import Start from './signIn/'
import StartIntranet from "./intranet/";

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
        if (!this.state.isLoggedIn) {
            return <div className="app" ><Start isLoggedIn={this.state.isLoggedIn} onClickSignInButton={this.onClickSignInButton}/></div>
        }

        if (this.state.isLoggedIn) {
            return <div className="app"><StartIntranet isLoggedIn={this.state.isLoggedIn}/></div>
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
