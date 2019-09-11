import React, {Component} from 'react';
import './app-logIn.css'
import IntraLogo from '../../../assets/images/logo_intra_solutions.png'
import axios from "axios";
import {setToken} from "./AuthHelper";

class AppLogIn extends Component {
    state = {
        user: '',
        pass: '',
    }

    onFormSubmit = event => {
        event.preventDefault();

        const loginData = {
            userName: this.state.user,
            passName: this.state.pass
        }

        axios.post('http://localhost:3010/login', {loginData}) //post method
            .then(res => {
                if (res && res.data && res.data.signedJWT) {
                    console.log('inuti .then post: ' + res.data);
                    setToken(res.data.signedJWT)
                    this.props.history.replace('/')
                }
            })
    };

    render() {
        return (
            <div>
                <img src={IntraLogo} alt="Intra Solutions" className="logo"/>
                <form onSubmit={e => this.onFormSubmit(e)}>
                    <p>Username:</p>
                    <input
                        type="text"
                        value={this.state.user}
                        placeholder='Username'
                        onChange={e => this.setState({user: e.target.value})}/>

                    <p>Password:</p>
                    <input
                        type="password"
                        value={this.state.pass}
                        placeholder='Password'
                        onChange={e => this.setState({pass: e.target.value})}/>

                    <p>
                        <input type="submit" value="Submit"/>
                    </p>
                </form>
            </div>
        )
    }
}

export default AppLogIn;