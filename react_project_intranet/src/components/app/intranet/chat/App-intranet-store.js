import React from 'react';
import io from 'socket.io-client';
import axios from 'axios'

//create context
export const CTX = React.createContext();


const initState = {
    general: [],
    other: []
}

let prevMessages = initState;
getPreviousMsgs().then(result => {
    console.log(result);
    result.forEach(item => {
        const {from, message, topic} = item; //destructured for later use
        const msg = message;
        prevMessages = {
            ...prevMessages,
            [topic]: [
                ...prevMessages[topic],
                {from, msg}
            ]
        }
    });
    console.log(prevMessages);
});

async function getPreviousMsgs() {
    const result = await axios.get('http://localhost:3010/api/messages');
    return result.data;
    //result.then(result => dispatch({type: 'LOAD_HISTORY', payload: result}))
}



function reducer(state, action) {

    switch(action.type) {
        case 'RECEIVE_MSG':
            const {from, msg, topic} = action.payload; //destructured for later use
            return { //state operator
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            };
        case 'LOAD_HISTORY':
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

let socket;
const username = sessionStorage.getItem('name');

function sendChatAction(value) {
    socket.emit('chat message', value);
}

export default function Store(props) {


    const [allChats, dispatch] = React.useReducer(reducer, prevMessages );

    if (!socket) {
        socket = io(':9090');
        socket.on('chat message', function(msg){
            dispatch({type: 'RECEIVE_MSG', payload: msg})
        });
    }
    return(
        <CTX.Provider value={{allChats, sendChatAction, username}}>
            {props.children}
        </CTX.Provider>
    )
}