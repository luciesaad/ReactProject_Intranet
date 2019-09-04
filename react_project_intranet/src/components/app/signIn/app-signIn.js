import React, {Component} from 'react';

import './app-signIn.css'

import IntraLogo from '../../../assets/images/logo_intra_solutions.png'

const INCORRECT_USER_CREDENTIALS = "Wrong username or password!";

class AppSignIn extends Component {

    isValidUserCredentials = (e) => {
        console.log("valid user&&password = " + e);
        this.props.onClickSignInButton(e);
    };

    onSubmit = event => {
        event.preventDefault();

        // Validate user
        if (this.uName.value === '1') {
            // console.log("Found user")
            if (this.pWord.value === '1') {
                // console.log("Correct password")
                console.log("Correct credentials");
                this.isValidUserCredentials(true)
            } else {
                // console.log("Incorrect password")
                console.log(INCORRECT_USER_CREDENTIALS);
                this.isValidUserCredentials(false)
            }
        } else {
            // console.log("User not found")
            console.log(INCORRECT_USER_CREDENTIALS);
            this.isValidUserCredentials(false)
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
                </form>
            </div>
        )
    }
}

export default AppSignIn;