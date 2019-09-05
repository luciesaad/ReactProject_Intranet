import React, {Component} from 'react';

import './app-signIn.css'
import InvalidCredentials from './app-signIn-invalidCredentials';

import IntraLogo from '../../../assets/images/logo_intra_solutions.png'

class AppSignIn extends Component {
    constructor() {
        super();
        this.state = {
            showErrorMessage: false
        }
    }

    showErrorMessage = (event) => {
        console.log("App-signIn.js: showErrorMessage = " + event);
        this.setState({showErrorMessage: event})
    };

    isValidUserCredentials = (e) => {
        console.log("valid user&&password = " + e);
        this.props.onClickSignInButton(e);
    };

    onSubmit = event => {
        event.preventDefault();

        // Validate user
        if (this.uName.value === '1') {
            if (this.pWord.value === '1') {
                // console.log("Correct credentials");
                this.isValidUserCredentials(true)
            } else {
                this.isValidUserCredentials(false);
                this.showErrorMessage(true)
            }
        } else {
            this.isValidUserCredentials(false);
            this.showErrorMessage(true)
        }
    };

    render() {
        return (
            <div>
                <img src={IntraLogo} alt="Intra Solutions" className="logo"/>
                <form onSubmit={this.onSubmit}>
                    <p>Username:</p>
                    <input
                        type="text"
                        name='Username'
                        ref={input => this.uName = input}/>

                    <p>Password:</p>
                    <input
                        type="password"
                        name='Password'
                        ref={input => this.pWord = input}/>

                    <p>
                        <button type="submit">Submit</button>
                    </p>
                    <InvalidCredentials onShowErrorMessage={this.state.showErrorMessage}/>
                </form>
            </div>
        )
    }
}

export default AppSignIn;