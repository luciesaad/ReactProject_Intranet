import React, { Component } from 'react';

class AppIntranetAdminSearchErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>Oooops. There was an error here</h1>
        }
        return this.props.children;
    }
}

export default AppIntranetAdminSearchErrorBoundry;