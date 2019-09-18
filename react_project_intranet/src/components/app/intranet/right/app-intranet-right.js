import React from "react";
import Calendar from "./calendar";
import SimpleChat from "./simpleChat";

export const AppIntranetRight = () => {
    return (
        <div className='pa2 fl w-25'>
            <div>
                <Calendar/>
            </div>
            <div>
                <SimpleChat/>
            </div>
        </div>
    );
};

export default AppIntranetRight