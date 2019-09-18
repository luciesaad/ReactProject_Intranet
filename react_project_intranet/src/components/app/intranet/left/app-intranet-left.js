import React from "react";

import CaseManagement from './caseManagement'
import Gallery from "./gallery";
import MeetingPlanning from "./meetingPlanning";

const AppIntranetLeft = () => {
    return (
        <div className='pa2 fl w-25'>
            <div>
                <CaseManagement/>
            </div>
            <div>
                <Gallery/>
            </div>
            <div>
                <MeetingPlanning/>
            </div>
        </div>
    );
};

export default AppIntranetLeft