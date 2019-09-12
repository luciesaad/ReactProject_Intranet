import React, {Component} from "react";
import axios from "axios";
import {setToken} from "../../logIn/AuthHelper";

class AppIntranetAdmin extends Component{
    state = {
        newUser: '',
        newPassword: ''
    };

    onFormSubmit = event => {
        event.preventDefault();
        console.log("New user registered");

        const loginData = {
            newUserName: this.state.newUser,
            newUserPassword: this.state.newPassword
        }

        // TODO: Lucie kontrollera
        axios.post('http://localhost:3010/signup', {loginData}) //post method
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
                <h1 className='f2'>Administrate users</h1>

                <form onSubmit={event => this.onFormSubmit(event)}>
                    <p>Username:</p>
                    <input
                        type="email"
                        value={this.state.newUser}
                        placeholder='New user'
                        onChange={event => this.setState({newUser: event.target.value})}/>

                    <p>Password:</p>
                    <input
                        type="text"
                        value={this.state.newPassword}
                    placeholder='New password'
                    onChange={event => this.setState({newPassword: event.target.value})}/>

                    {/*Funkar ej med nedanstående kod i reakt utan måste vara reakt specifik kod*/}
                    {/*<input type="radio" name='userGroup' value='standardUser'>Standard user</input>*/}
                    {/*<input type="radio" name='userGroup' value='adminUser'>Admin user</input>*/}

                    <p>
                        <input type="submit" value='Submit'/>
                    </p>
                </form>
            </div>
        );
    }
};

export default AppIntranetAdmin