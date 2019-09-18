import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import {CTX} from './App-intranet-store'
import axios from "axios";
import {getHistory} from "./App-intranet-store";
//import {getToken} from "../../logIn/AuthHelper";

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3, 2),
        margin: '50px'
    },
    flex: {
        display: 'flex',
        alignItems: 'center'
    },
    topicsWindow: {
        width: '30%',
        height: '300px',
        borderRight: '1px solid grey'
    },
    chatWindow: {
        width: '70%',
        height: '300px',
        padding: '20px'
    },
    chatBox: {
        width: '85%'
    },
    button: {
        width: '15%',

    }

}));

export default function View() {

    const classes = useStyles();

    //CTX Store
    const {allChats, sendChatAction, username} = React.useContext(CTX);
    const topics = Object.keys(allChats);

    //local state
    const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
    const [textValue, changeTextValue] = React.useState('');//hooks

    return (
        <div>
            <Paper className={classes.root}>
                <Typography variant="h4" component="h4">
                    Chat app
                </Typography>
                <Typography component="p">
                    {activeTopic}
                </Typography>
                <div className={classes.flex}>
                    <div className={classes.topicsWindow}>

                        <List>
                            {
                                topics.map(topic => (
                                    <ListItem onClick={e => changeActiveTopic(e.target.innerText)} key={topic} button>
                                        <ListItemText primary={topic} />
                                    </ListItem>
                                ))
                            }

                        </List>

                    </div>
                    <div className={classes.chatWindow}>
                        {
                            allChats[activeTopic].map((chat, index) => (
                                <div className={classes.flex} key={index}>
                                    <Chip label={chat.from}  className={classes.chip} />
                                    <Typography variant='body1' gutterBottom>{chat.msg}</Typography>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <div className={classes.flex}>
                    <TextField
                        label="Send a message"
                        className={classes.chatBox}
                        value={textValue}
                        onChange={e => changeTextValue(e.target.value)}
                    />

                    <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        onClick={() => {
                            sendChatAction({from: username, msg: textValue, topic: activeTopic});
                            getHistory();

                            const chatData = {
                                from: username,
                                msg: textValue,
                                topic: activeTopic
                            }
                            //post method - sending message
                            axios.post('http://localhost:3010/chat', {chatData})
                                .then(res => {
                                    if (res && res.data && res.data.signedJWT) { //signed JWT required for posting message too
                                        console.log('message has been saved')
                                    }
                                })
                            changeTextValue(''); //reset TextValue to empty after sending
                        }}
                    >
                        Send
                    </Button>
                </div>
            </Paper>
        </div>
    );
}
