import React from "react";

const AppIntranetAdminSearchCard = ({email}) => {
    return (
        <div className='tc bg-white-90 dib br3 pa1 ma1 grow bw1 shadow-5'>
            <p>{email.toLowerCase()}</p>
        </div>
    )
};

export default AppIntranetAdminSearchCard