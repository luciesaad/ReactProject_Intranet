import React,{Component} from 'react'

import View from './App-intranet-view'
import Store from './App-intranet-store'
import {getHistory} from "./App-intranet-store";

class AppChatIntranet extends Component{

    componentDidMount(){
        getHistory();
    }
    render() {
            return (
                <div className="App-intranet-Chat">
                    <Store>
                        <View/>
                    </Store>
                </div>
        )
    }
}

export default AppChatIntranet;