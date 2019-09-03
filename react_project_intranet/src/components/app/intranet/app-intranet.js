import React from 'react';

import {AppIntranetNavbar} from "./navbar/app-intranet-navbar";

import MontisoriLogo from '../../../assets/images/logo_montessorivillorna.png'

const AppIntranet = () => {
    return (
        <div>
            <AppIntranetNavbar/>
            <img src={MontisoriLogo} alt="Logotype for Montisori school"/>
            <h1>Welcome</h1>
        </div>
    )
};

export default AppIntranet;