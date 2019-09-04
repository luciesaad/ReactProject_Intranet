import React, {Fragment} from 'react';

function InvalidCredentials({onShowErrorMessage}) {

    function displayErrorMessage(event) {
        if (event) {
            return(
                <h2>Username and/or password is incorrect</h2>
            )
        }
    }

    return (
        <Fragment>
            {displayErrorMessage(onShowErrorMessage)}
        </Fragment>
    )
}

export default InvalidCredentials