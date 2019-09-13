const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const envVars = require('dotenv').config();
const isAuthorized = require('./controllers/auth').isAuthorized;
const port = 3010;
const signup = require('./controllers/auth').signup;
const login = require('./controllers/auth').login;

//create a new express app for chat
const app_chat = express();
const http = require('http').Server(app_chat)
const io = require('socket.io');
const port_chat = 9090;
const pocket = io(http);

//socket backend logic
pocket.on('connection', function(socket){
    console.log('user connected')
    socket.on('chat message', function(msg){
        console.log('message: ' + JSON.stringify(msg));
        pocket.emit('chat message', msg)
    })
});

//create a new express app for app
const app = express();

if (envVars.error) {
    console.log('Error parsing environment variables');
    console.log(envVars.error)
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/intranet_db', {useNewUrlParser: true, useCreateIndex: true});
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', function(req, res){
    res.json({someProperty : "Some value"})
})


app.post('/signup', signup);
app.post('/login', login);
app.use('/api', isAuthorized);

app.listen(port, () => console.log(`App listening on port ${port}`));
http.listen(port_chat, ()=> console.log('Chat listening on port: ' + port_chat));

