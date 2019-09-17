import React from "react";
import {browserHistory} from 'react-router'
//import {logout} from '../../logIn/AuthHelper';

import MontessoriVillornaLogo from "../../../../assets/images/logo_montessorivillorna.png";

let style = {
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

const handleLogOut =() => {
    sessionStorage.removeItem('keyToTheFuture')
    sessionStorage.removeItem('is Admin')
    sessionStorage.removeItem('name')
    window.location.reload(false)
    console.log('user logged out')
}
const AppIntranetFooter = () => {
    return (
        <div className='tc bg-gray bw2 shadow-5 cf' style={style}>
            <div className='fl w-third'>
                <img src={MontessoriVillornaLogo} alt="Logotype for Montessori school" style={{width: 300, height: 60}}/>
            </div>
            <div className='fl w-third f2'>
                Copyright INTRA SOLUTIONS
            </div>
            <div className='fl w-third f2'>
                <button onClick={handleLogOut}>Log out</button>
            </div>
        </div>
    );
};

export default AppIntranetFooter