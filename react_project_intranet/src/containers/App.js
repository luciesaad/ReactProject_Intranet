import React from 'react';
import {Start} from './Start.js'
import {Nav} from "../Components/Nav";
import StartIntranet from "./StartIntranet";

function App() {


    return (
        <div>
            <p> hej </p>
            <Start/>
            <Nav/>
            <StartIntranet isLoggedIn={true}/>

        </div>
    );
}

export default App;
