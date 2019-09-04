import React from 'react';

import AppIntranetNavbar from "./navbar";
import AppIntranetLeft from "./left"
import AppIntranetMain from "./main";
import AppIntranetRight from "./right"
import AppIntranetFooter from "./footer";

import MontessoriVillornaLogo from '../../../assets/images/logo_montessorivillorna.png'

const AppIntranet = () => {
    return (
        <div>
            <AppIntranetNavbar/>
            <img src={MontessoriVillornaLogo} alt="Logotype for Montessori school"/>
            <h1>Welcome</h1>
            <div>
                <AppIntranetLeft/>
                <AppIntranetMain/>
                <AppIntranetRight/>
            </div>

            <AppIntranetFooter/>
        </div>
    )
};

export default AppIntranet;