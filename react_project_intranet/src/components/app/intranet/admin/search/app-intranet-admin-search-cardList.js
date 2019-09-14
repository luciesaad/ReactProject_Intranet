import React from "react";
import Card from "./app-intranet-admin-search-card";

const AppIntranetAdminSearchCardList = ({employees, editUser}) => {

    function handleEvent(event) {
        const clickedEmailAddress = event.target.textContent.toLowerCase();
        editUser(clickedEmailAddress);
        // alert("Key: " + clickedEmailAddress + " was clicked");
    };

    return (
        <div onClick={handleEvent}>
            {employees.map((employee, i) => {
                return (
                    <Card
                        key={i}
                        email={employees[i].email}
                    />
                )
            })}
        </div>
    )
};

export default AppIntranetAdminSearchCardList