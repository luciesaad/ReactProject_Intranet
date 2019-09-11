import React, {Component} from 'react';
//import axios from 'axios';//TODO
import {isLoggedIn} from './logIn/AuthHelper'; //TODO getToken use later!!!
import './app.css';
import Intranet from "./intranet";

class App extends Component {

    componentDidMount() {
        console.log(isLoggedIn())
        if(!isLoggedIn()) {
            this.props.history.replace('/login')
        }else{
            console.log('here will go the get method for chat messages')
        }
    }
    render() {
        console.log('in render')
            return (
                <div className="app" >
                    <Intranet/>

                </div>
                )
            }
}
export default App;
