import React from 'react';

class Start extends React.Component {


    render() {

        return (
                <div>
                <form>
                    <p>Username: </p>
                    <input type="text" name='Username'></input>
                    <p>Password: </p>
                    <input type="password" name='Password'></input>
                </form>
                </div>
            )


    }
}
export default Start;