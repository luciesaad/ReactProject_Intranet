import React, {Component} from "react";

import SearchBox from "./search/app-intranet-admin-searchBox";
import Scroll from "./search/app-intranet-admin-search-scroll";
import CardList from "./search/app-intranet-admin-search-cardList";
import ErrorBoundry from "./search/app-intranet-admin-search-errorBoundry";
import EditUser from "./search/app-intranet-admin-search-editUser";

// React-Redux
import {connect} from 'react-redux';    // Higher order function that return an other function
import {setSearchField, requestEmployees} from "../../redux/actions";

const mapStateToProps = state => {
    return {
        searchField: state.searchEmployees.searchField,  // From reducers
        employees: state.requestEmployees.employees,
        isPending: state.requestEmployees.isPending,
        error: state.requestEmployees.error
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestEmployees: () => dispatch(requestEmployees())
    }
};


class AppIntranetAdminSearchUsers extends Component {

    constructor() {
        super();
        this.state = {
            editUser: ''
        }
    }

    componentDidMount() {
        this.props.onRequestEmployees();
    }

    onEditUser = (event) => {
        // console.log("SearchUsers.js: onEditUser = " + event);
        this.setState({editUser: event})
    };

    render() {
        const {searchField, onSearchChange, employees, isPending} = this.props;
        console.log(employees)
        const filterEmployees = employees.filter(employee => {
            return employee.email.toLowerCase().includes(searchField.toLowerCase());
        });

        return isPending    // if isPending is true return "Loading..." else return <div>
            ? <h1>Loading...</h1>
            : <div className='tc'>
                <h1 className='f2'>Sök bland anställda</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <div className='fl w-20'>
                            <EditUser editThisUser={this.state.editUser}/>
                        </div>
                        <div className='fl w-80'>
                            <CardList employees={filterEmployees} editUser={this.onEditUser}/>
                        </div>
                    </ErrorBoundry>
                </Scroll>
            </div>
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AppIntranetAdminSearchUsers)


/*
import React, {Component, Fragment} from "react";
import Admin from "./app-intranet-admin";
import Left from "../left/app-intranet-left";
import Main from "../main/app-intranet-main";
import Right from "../right/app-intranet-right";

class AppIntranetAdminSearchUsers extends Component {

    allUsers = {    // remove when reading from database
        user1: 'Agda',
        user2: 'Bertil',
        user3: 'Calle'
    };

    onReadAllUsers = () => {
        // List all users
        return (
            <div>
                <p>{this.allUsers.user1.valueOf}</p>
                <p>{this.allUsers.user2.value}</p>
                <p>{this.allUsers.user3.value}</p>
            </div>
        )
    };

    onShowAllUsers() {

    }

    workSpace = () => {
        if (this.state.administrateUsers) {
            return (
                <div className='fl w-100'>
                    <Admin/>
                </div>
            )
        } else {
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
    };

    render() {
        return (
            <Fragment>
                <div>
                    <h1>Search Users</h1>
                    {this.onReadAllUsers}
                </div>
            </Fragment>

        )
    }
}


export default AppIntranetAdminSearchUsers
 */