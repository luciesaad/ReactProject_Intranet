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
                alert("Passwords match, updating in database");
                // TODO: put update password function to database here
            } else {
                alert("Passwords don't match");
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
        alert("User removed")
    };


    render() {

        return (
            <Fragment>

                {/*crUd*/}
                <div className='bg-white-60 br1 pa2 ma2 shadow-5'>

                    <form onSubmit={event => this.onFormSubmit(event)}>
                        <h3>Change Password</h3>
                        <input
                            type="password"
                            value={this.state.newPassword}
                            placeholder='New password'
                            onChange={event => this.setState({newPassword: event.target.value})}/>
                        <p></p>
                        <input
                            type="password"
                            value={this.state.confirmPassword}
                            placeholder='Confirm password'
                            onChange={event => this.setState({confirmPassword: event.target.value})}/>

                        <p><button>Update</button></p>
                    </form>
                </div>
                <br/>

                {/*cruD*/}
                <div className=' br1 shadow-5 pa2 ma2 bg-washed-red'>
                    <h3>Delete user</h3>
                    <h4 className='dark-red'>Confirm &nbsp;&nbsp;
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
                        <button disabled={!this.state.deleteUser} onClick={this.onDeleteUser}>Delete</button>
                    </p>
                </div>
            </Fragment>
        )
    }
}

export default AppIntranetAdminSearchEditUser