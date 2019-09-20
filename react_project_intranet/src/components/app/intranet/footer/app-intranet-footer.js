import React from "react";

let style = {
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    textAlign: "left"
};
let styleButton = {
    textAlign: "right",
    borderRadius: "5px"
}

const handleLogOut =() => {
    sessionStorage.removeItem('keyToTheFuture')
    sessionStorage.removeItem('is Admin')
    sessionStorage.removeItem('name')
    window.location.reload(false)
    console.log('user logged out')
}
const AppIntranetFooter = () => {
    return (
        <div className='bg-white-90 bw2' style={style}>
            <div className='fl w-70'>
                Copyright INTRA SOLUTIONS
            </div>
            <div className='fl w-30' style={styleButton} >
                <button style={styleButton} onClick={handleLogOut}>Log out</button>
            </div>
        </div>
    );
};

export default AppIntranetFooter