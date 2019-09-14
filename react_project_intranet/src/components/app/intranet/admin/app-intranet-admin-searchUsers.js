import React, {Component} from "react";

import SearchBox from "./search/app-intranet-admin-searchBox";
import Scroll from "./search/app-intranet-admin-search-scroll";
import CardList from "./search/app-intranet-admin-search-cardList";
import ErrorBoundry from "./search/app-intranet-admin-search-errorBoundry";
import EditUser from "./search/app-intranet-admin-search-editUser";

class AppIntranetAdminSearchUsers extends Component {

    constructor(){
        super();

        this.state = {
            employees: [],
            searchField: '',
            editUser: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({employees: users})
            })
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    };

    onEditUser = (event) => {
        // console.log("SearchUsers.js: onEditUser = " + event);
        this.setState({editUser: event})
    };

    render() {
        const {employees, searchField} = this.state;

        const filterEmployees = employees.filter(employee => {
            return employee.email.toLowerCase().includes(searchField.toLowerCase())
        });

        if (!employees.length) {
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className='tc'>
                    <h1 className='f2'>Sök bland anställda</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <div className='fl w-80'>
                                <CardList employees={filterEmployees} editUser={this.onEditUser}/>
                            </div>
                            <div className='fl w-20'><
                                EditUser editThisUser={this.state.editUser}/>
                            </div>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        }
    }
}

export default AppIntranetAdminSearchUsers


















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