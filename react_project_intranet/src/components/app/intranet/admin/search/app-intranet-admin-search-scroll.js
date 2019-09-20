import React from "react";

const AppIntranetAdminSearchScroll = (props) => {
    return (
        <div style={{
            overflow: 'scroll',
            height: '600px'
        }}>
            {props.children}
        </div>
    )
};

export default AppIntranetAdminSearchScroll