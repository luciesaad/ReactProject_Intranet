import React, {Component, Fragment} from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class AppIntranetAdminSearchEditUser extends Component {
    constructor() {
        super();

        this.state = {
            newPassword: '',
            confirmPassword: '',
            deleteUser: false
        }
    }

    onFormSubmit = event => {
        event.preventDefault();

        const newPass1 = this.state.newPassword;
        const newPass2 = this.state.confirmPassword;

        // Check length of password
        if (newPass1.length >= 8 && newPass2.length >= 8) {
            // Compare passwords
            if (newPass1 === newPass2) {
                alert("Passwords match, updating i database");
                // TODO: put update password function to database here
            } else {
                alert("passwords don't match");
            }
        } else {
            alert("Password is to short")
        }



        // Clear all fields
        this.setState({newPassword: ''});
        this.setState({confirmPassword: ''})
    };

    onDeleteUser = event => {
        event.preventDefault();

        // TODO: Send erase request to db

        alert("Användare raderad")
    };


    render() {

        return (
            <Fragment>

                {/*cRud*/}
                <div>
                    <h2>Uppdatera användare</h2>
                    <p>{this.props.editThisUser}</p>
                </div>

                {/*crUd*/}
                <div className='ba br4 shadow-5'>

                    <form onSubmit={event => this.onFormSubmit(event)}>
                        <h3>Byt lösenord</h3>
                        <input
                            type="password"
                            value={this.state.newPassword}
                            placeholder='Nytt lösenord'
                            onChange={event => this.setState({newPassword: event.target.value})}/>

                        <input
                            type="password"
                            value={this.state.confirmPassword}
                            placeholder='Bekräfta lösenord'
                            onChange={event => this.setState({confirmPassword: event.target.value})}/>

                        <p><input type="submit"/></p>
                    </form>
                </div>
                <br/>

                {/*cruD*/}
                <div className='ba br4 shadow-5 bg-washed-red'>
                    <h3>Radera användare</h3>
                    <h4 className='dark-red'>Bekräfta &nbsp;&nbsp;
                        <FormControlLabel
                            control={
                                <Switch
                                    checked={this.state.deleteUser}
                                    onChange={e => this.setState({deleteUser: e.target.checked})}
                                    value={this.deleteUser}
                                    color="primary"
                                />
                            }
                        />
                    </h4>
                    <p>
                        <button disabled={!this.state.deleteUser} onClick={this.onDeleteUser}>Radera</button>
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default AppIntranetAdminSearchEditUser