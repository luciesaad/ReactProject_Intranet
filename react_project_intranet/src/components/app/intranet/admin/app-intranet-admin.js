import React, {Component} from "react";
import {Route} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";

import NavAdmin from "./app-intranet-admin-nav";
import CreateUser from "./app-intranet-admin-createUser";
import SearchUsers from "./app-intranet-admin-searchUsers";
import AdminStart from "./app-intranet-admin-start";

class AppIntranetAdmin extends Component {
    state = {
        categorySelectedAdminNav: 0,
    };

    onCategoryChange = selectedCat => {
        this.setState({
            categorySelectedAdminNav: selectedCat
        })
    };

    render() {
        return (
            <Router>
                <NavAdmin
                    selectedAdminCat={this.state.categorySelectedAdminNav}
                    onSelectAdminNav={this.onCategoryChange}
                    userIsAdmin={this.state.administrateUsers}/>

                <Route exakt path='/admin/start' component={admin}/>
                <Route path='/admin/createNewUser' component={createUser}/>
                <Route path='/admin/searchUsers' component={readUsers}/>
            </Router>
        );
    }
}

function admin() {
    return (
        <div className='fl w-100'>
            <AdminStart/>
        </div>
    )
}

function createUser() {
    return (
        <div className='fl w-100'>
            <CreateUser/>
        </div>
    )
}

function readUsers() {
    return (
        <div className='fl w-100'>
            <SearchUsers/>
        </div>
    )
}

export default AppIntranetAdmin