import React, { Component } from 'react';

class StartIntranet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: props.isLoggedIn
        }
    }

    render() {
        if (!this.state.isLoggedIn) {
            return <h1>Oooops. Not logged in correctly</h1>
        }

        if (this.state.isLoggedIn) {
            return <h1>Welcome</h1>
        }
    }
}

export default StartIntranet;