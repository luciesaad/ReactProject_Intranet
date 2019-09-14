import React from 'react'

import View from './App-intranet-view'
import Store from './App-intranet-store'

function AppChatIntranet() {
    return (
        <div className="App-intranet-Chat">
            <Store>
                <View/>
            </Store>
        </div>
    )
}

export default AppChatIntranet;