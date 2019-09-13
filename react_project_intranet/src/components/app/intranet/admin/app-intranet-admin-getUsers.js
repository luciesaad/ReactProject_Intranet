import React, {Component} from "react";
import Admin from "./app-intranet-admin";
import Left from "../left/app-intranet-left";
import Main from "../main/app-intranet-main";
import Right from "../right/app-intranet-right";

class AppIntranetAdminGetUsers extends Component {

    allUsers = {    // remove when reading from database
        user1: 'Agda',
        user2: 'Bertil',
        user3: 'Calle'
    };

    onReadAllUsers = () => {
        // List all users
        return(
            <div>
                <p>{this.allUsers.user1}</p>
                <p>{this.allUsers.user2}</p>
                <p>{this.allUsers.user3}</p>
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

                    <div className='fl w-100 bg-light-pink bw2 shadow-5 cf'>
                        DAS CHAT
                    </div>
                </div>
            )
        }
    };

    render() {
        return(
            <div>
                <h1>getUsers</h1>
                {this.onReadAllUsers}
            </div>
        )
    }
}



export default AppIntranetAdminGetUsers