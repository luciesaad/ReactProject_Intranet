import React, {Component} from 'react';
//import axios from 'axios';//TODO
import {isLoggedIn} from './logIn/AuthHelper'; //TODO getToken use later!!!
import './app.css';
import Intranet from "../../routes/intanet/intranet";

class App extends Component {

    componentDidMount() {
        console.log(isLoggedIn())
        if(!isLoggedIn()) {
            this.props.history.replace('/login')
        }else{
            console.log('here will go the get method for chat messages I guess')
        }
    }
    render() {
            return (
                <div className="app" >
                    <p>Our protected resources page</p>
                    <Intranet/>
                </div>
                )
            }
}
export default App;
