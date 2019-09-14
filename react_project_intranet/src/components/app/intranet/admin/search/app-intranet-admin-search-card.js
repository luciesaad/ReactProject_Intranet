import React from "react";

const AppIntranetAdminSearchCard = ({email}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <p>{email.toLowerCase()}</p>
        </div>
    )
};

export default AppIntranetAdminSearchCard