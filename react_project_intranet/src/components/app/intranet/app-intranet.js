import React from 'react';

import {AppIntranetNavbar} from "./navbar/app-intranet-navbar";

import MontisoriLogo from '../../../assets/images/logo_montessorivillorna.png'

const AppIntranet = (props) => {
    return (
        <div>
            <AppIntranetNavbar/>
            <img src={MontisoriLogo} alt="Logotype for Montisori school"/>
            <h1>Welcome</h1>
            <ul>
                {props.showUsers.map(value => (<li key={value}> {value}  </li>))}
                {props.showPass.map(value => (<li key={value}> {value}  </li>))}
            </ul>
        </div>
    )
};

export default AppIntranet;