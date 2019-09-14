import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";

function isUserAdmin(isAdmin) {
    if (isAdmin) {
        return(
                <Tab label='admin' component={Link} to='/admin/start'/>
            )
    }
}

const AppIntranetNav = ({selectedCat, onSelect, userIsAdmin}) => {
    return (
        <div>
            <div className='fl w-100'>
                <Paper>
                    <Tabs
                        className='f1-l bg-lightest-blue'
                        value={selectedCat}
                        onChange={(event, index) => {
                            onSelect(index)
                        }}
                        indicatorColor='primary'
                        textColor='primary'
                        centered>
                        <Tab label='dashboard' component={Link} to='/'/>
                        <Tab label='chat' component={Link} to='/chat'/>
                        {isUserAdmin(userIsAdmin)}
                    </Tabs>
                </Paper>
            </div>
        </div>


    );
};

export default AppIntranetNav