import React from "react";

const AppIntranetAdminSearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type="search"
                placeholder='Sök anställda'
                onChange={searchChange}/>
        </div>
    )
};
export default AppIntranetAdminSearchBox
