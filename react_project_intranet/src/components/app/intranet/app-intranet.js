import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Nav from "./nav";
import Left from "./left"
import Main from "./main";
import Right from "./right"
import Footer from "./footer";
import Admin from "./admin";


class AppIntranet extends Component {
    state = {
        categorySelected: 0,
        // isUserAdmin: true,
        administrateUsers: true
    };

    onCategoryChange = selectedCat => {
        console.log("selected category = " + selectedCat);
        this.setState({
            categorySelected: selectedCat
        })
    };

    render() {
        return (
            <Fragment>
                <Router>
                    <div>
                        <Nav
                            className='tc code bg-lightest-blue'
                            selectedCat={this.state.categorySelected}
                            onSelect={this.onCategoryChange}
                            userIsAdmin={this.state.administrateUsers}/>

                        <Route exact path='/' component={dashBoard}/>
                        <Route path='/chat' component={chat}/>
                        <Route path='/admin' component={admin} />
                    </div>
                </Router>

                <Footer/>
            </Fragment>
        );
    }
};

function dashBoard() {
    return (
        <div>
            <div className='fl w-100'>
                <Left/>
                <Main/>
                <Right/>
            </div>
        </div>
    )
}

function chat() {
    return (
        <div className='fl w-100'>
            <h2>Chat</h2>
        </div>
    )
}

function admin() {
    return (
        <div className='fl w-100'>
            <Admin/>
        </div>
    )
}

export default AppIntranet;