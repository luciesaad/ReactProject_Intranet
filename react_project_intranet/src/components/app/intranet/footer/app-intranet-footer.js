import React, {Fragment} from "react";

import MontessoriVillornaLogo from "../../../../assets/images/logo_montessorivillorna.png";

let style = {
    padding: "0px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
};

const AppIntranetFooter = () => {
    return (
        <div className='bg-gray bw2 shadow-5 cf' style={style}>
            <div className='fl w-third'>
                <img src={MontessoriVillornaLogo} alt="Logotype for Montessori school" style={{width: 300, height: 60}}/>
            </div>
            <div className='fl w-third f2'>
                Copyright INTRA SOLUTIONS
            </div>
            <div className='fl w-third f2'>
                Något väsentligt ;)
            </div>
        </div>
    );
};

export default AppIntranetFooter