import React, {Component} from "react";
import axios from "axios";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import {setToken} from "../../logIn/AuthHelper";

class AppIntranetAdmin extends Component{
    state = {
        newUser: '',
        newPassword: '',
        newIsAdmin: false
    };

    onFormSubmit = event => {
        event.preventDefault();
        console.log("New user registered");
        console.log(this.state.newIsAdmin);

        const loginData = {
            newUserName: this.state.newUser,
            newUserPassword: this.state.newPassword,
            newIsAdmin: this.state.newIsAdmin
        };

        // Signup fn
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
                <h3 className='f4'>Add a new user </h3>

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
                    <p><b>Allow administrative competence? &nbsp;&nbsp;</b>
                    <FormControlLabel
                        control={
                            <Switch
                                checked={this.state.newIsAdmin}
                                onChange={e => this.setState({newIsAdmin: e.target.checked})}
                                value={this.newIsAdmin}
                                color="primary"
                            />
                        }
                    />
                    </p>
                    <p>
                        <input type="submit" value='Submit'/>
                    </p>
                </form>
            </div>
        );
    }
};

export default AppIntranetAdmin