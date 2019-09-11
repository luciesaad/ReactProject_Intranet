const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const envVars = require('dotenv').config()
const http = require('http')
const port = 3010
//const signup = require('./controllers/auth').signup;
const login = require('./controllers/auth').login;


const app = express()


if (envVars.error) {
    console.log('Error parsing environment variables')
    console.log(envVars.error)
}

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost/intranet_db', {useNewUrlParser: true, useCreateIndex: true})
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'))

/*app.get('/users', (req, res) => res.send(users))
app.get('/passwords', (req, res) => res.send(passwords))*/
app.get('/', function(req, res){
    res.json({someProperty : "Some value"})
})

/*app.post('/home', (req, res) => {
    const frontUser = req.body.loginData.userName;
    const frontPass = req.body.loginData.passName;
    console.log(frontUser) //username sent from frontend
    console.log(frontPass) //password sent from frontend
    res.send('This is post method') //printed in console
})*/

//app.post('/signup', signup)
app.post('/login', login)

app.listen(port, () => console.log(`App listening on port ${port}`))
