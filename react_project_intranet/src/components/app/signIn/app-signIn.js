import React, {Component} from 'react';

import './app-signIn.css'

import IntraLogo from '../../../assets/images/logo_intra_solutions.png'

const INCORRECT_USER_CREDENTIALS = "Wrong usernam or password!";

class AppSignIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn
        }
        console.log("Initial sign in status = " + this.state.isLoggedIn)
    }

    /*state = {
        isValidUser: ''
    };*/


    isValidUserCredentials = (e) => {
        console.log("valid user&&password = " + e);
        // this.setState({isValidUser: e});
        if (e) {
            this.setState({isLoggedIn: true});
            console.log("isLoggedIn = " + this.state.isLoggedIn);
        }


        // TODO: Fungerar ej
        /*this.setState(this.state.isLoggedIn = () => ({
            isLoggedIn: e
        }));*/
        this.props.onClickSignInButton(e);

        // console.log("isValidUser = " + this.state.isValidUser);
    };

    onSubmit = event => {
        event.preventDefault();

        const userName = this.uName.value;
        const passWord = this.pWord.value;

        // console.log("username = " + userName);
        // console.log("password = " + passWord);

        if (userName === '1') {
            // console.log("Found user")
            if (passWord === '1') {
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