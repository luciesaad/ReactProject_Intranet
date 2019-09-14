import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {Link} from "react-router-dom";

const AppIntranetAdminNav = ({selectedAdminCat, onSelectAdminNav}) => {
    return (
        <div>
            <Paper className='fl w-100'>
                <Tabs
                    className='f1-m bg-washed-red'
                    value={selectedAdminCat}
                    onChange={(event, index) => {
                        onSelectAdminNav(index)
                    }}
                    indicatorColor='primary'
                    textColor='primary'
                    centered>
                    <Tab label='Start' component={Link} to='/admin/start'/>
                    <Tab label='create New User' component={Link} to='/admin/createNewUser'/>
                    <Tab label='search Users' component={Link} to='/admin/searchUsers'/>
                </Tabs>
            </Paper>
        </div>
    );
};

export default AppIntranetAdminNav