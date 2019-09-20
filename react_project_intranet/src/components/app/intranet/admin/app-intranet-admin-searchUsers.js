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
                <h1 className='f2'>Search employees</h1>
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
