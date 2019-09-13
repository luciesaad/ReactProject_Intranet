import React from 'react';
import io from 'socket.io-client';

//create context
export const CTX = React.createContext();

const initState = {
    general: [
        {from: 'Alex', msg: 'hello' },
        {from: 'Bengt', msg: 'Bengt here' },
        {from: 'Cecilia', msg: 'Tjenaaa' }
        ],
    other: [
        {from: 'Lukas', msg: 'hello' },
        {from: 'Michael', msg: 'Mich here' },
        {from: 'Nora', msg: 'where are you' }
    ]

}

function reducer(state, action) {
    const {from, msg, topic} = action.payload; //destructured for later use
    switch(action.type) {
        case 'RECEIVE_MSG':
            return { //state operator
                ...state,
                [topic]: [
                    ...state[topic],
                    {from, msg}
                ]
            };
        default:
            return state;
    }
}


let socket;
const username = sessionStorage.getItem('name');

function sendChatAction(value) {
    socket.emit('chat message', value)
}
export default function Store(props) {

    const [allChats, dispatch] = React.useReducer(reducer, initState);

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